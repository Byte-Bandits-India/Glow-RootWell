import { NextRequest, NextResponse } from "next/server";
import { eq, desc, and } from "drizzle-orm";
import { db, ensureDbInitialized } from "@/lib/db";
import { orders } from "@/lib/db/schema";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { connection } from "next/server";

export async function GET(req: NextRequest) {
  await connection();
  try {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sessionUser = await verifySessionToken(token);
    if (!sessionUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await ensureDbInitialized();

    // Only return the last 6 successfully completed and paid orders to the user
    const userOrders = await db
      .select({
        id: orders.id,
        planId: orders.planId,
        amount: orders.amount,
        currency: orders.currency,
        status: orders.status,
        receipt: orders.receipt,
        createdAt: orders.createdAt,
      })
      .from(orders)
      .where(and(eq(orders.userId, sessionUser.id), eq(orders.status, "paid")))
      .orderBy(desc(orders.createdAt))
      .limit(6);

    return NextResponse.json({ orders: userOrders });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Fetch orders error:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders." },
      { status: 500 }
    );
  }
}
