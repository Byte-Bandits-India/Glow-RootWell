import { NextRequest, NextResponse } from "next/server";
import { eq, or } from "drizzle-orm";
import { db, client, ensureDbInitialized } from "@/lib/db";
import { users, sessions, orders } from "@/lib/db/schema";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { connection } from "next/server";

export async function POST(req: NextRequest) {
  await connection();
  try {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized: No active session token found." },
        { status: 401 }
      );
    }

    const payload = await verifySessionToken(token);
    if (!payload?.id) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid or expired session token." },
        { status: 401 }
      );
    }

    await ensureDbInitialized();

    const userId = payload.id;
    const userEmail = payload.email || "";

    // 1. Delete all user sessions from database
    try {
      await db.delete(sessions).where(eq(sessions.userId, userId));
    } catch {
      await client.execute({
        sql: "DELETE FROM sessions WHERE user_id = ?",
        args: [userId],
      });
    }

    // 2. Delete all orders and purchase records associated with user
    try {
      await db.delete(orders).where(eq(orders.userId, userId));
    } catch {
      await client.execute({
        sql: "DELETE FROM orders WHERE user_id = ?",
        args: [userId],
      });
    }

    // 3. Delete user account record completely from DB (by ID and email)
    try {
      if (userEmail) {
        await db.delete(users).where(or(eq(users.id, userId), eq(users.email, userEmail)));
      } else {
        await db.delete(users).where(eq(users.id, userId));
      }
    } catch {
      await client.execute({
        sql: "DELETE FROM users WHERE id = ? OR email = ?",
        args: [userId, userEmail],
      });
    }

    // 4. Return success and clear the authentication session cookie
    const response = NextResponse.json({
      success: true,
      message: "Account and all associated records permanently deleted from database.",
    });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Delete account error:", error);
    return NextResponse.json(
      { error: "Failed to delete account. Please try again." },
      { status: 500 }
    );
  }
}

// Support DELETE method as well
export async function DELETE(req: NextRequest) {
  return POST(req);
}

