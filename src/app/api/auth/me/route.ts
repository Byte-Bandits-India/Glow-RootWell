import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db, ensureDbInitialized } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { connection } from "next/server";

export async function GET(req: NextRequest) {
  await connection();
  try {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ user: null });
    }

    const payload = await verifySessionToken(token);
    if (!payload) {
      return NextResponse.json({ user: null });
    }

    await ensureDbInitialized();

    // Fetch fresh user from DB
    const result = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        avatarUrl: users.avatarUrl,
        provider: users.provider,
        plan: users.plan,
        planActivatedAt: users.planActivatedAt,
        planExpiresAt: users.planExpiresAt,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.id, payload.id))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({ user: result[0] });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Auth me error:", error);
    return NextResponse.json({ user: null });
  }
}
