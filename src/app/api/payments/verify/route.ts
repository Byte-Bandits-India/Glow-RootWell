import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db, ensureDbInitialized } from "@/lib/db";
import { users, orders } from "@/lib/db/schema";
import { verifySessionToken, createSessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { verifyRazorpaySignature } from "@/lib/razorpay";
import { SERVER_PLANS } from "@/lib/plans";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Authentication required to verify payment." },
        { status: 401 }
      );
    }

    const sessionUser = await verifySessionToken(token);
    if (!sessionUser) {
      return NextResponse.json(
        { error: "Invalid or expired session. Please sign in again." },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing required payment verification parameters." },
        { status: 400 }
      );
    }

    // 1. Cryptographically verify signature
    const isValid = await verifyRazorpaySignature({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
    });

    if (!isValid) {
      console.error("Razorpay signature verification failed for order:", razorpay_order_id);
      return NextResponse.json(
        { error: "Invalid payment signature. Transaction could not be verified." },
        { status: 400 }
      );
    }

    await ensureDbInitialized();

    // 2. Fetch the corresponding order record
    const existingOrders = await db
      .select()
      .from(orders)
      .where(eq(orders.razorpayOrderId, razorpay_order_id))
      .limit(1);

    if (existingOrders.length === 0) {
      return NextResponse.json(
        { error: "Order record not found in system." },
        { status: 404 }
      );
    }

    const order = existingOrders[0];
    const now = new Date();

    // 3. Idempotency: If already marked as paid, return success
    if (order.status === "paid") {
      return NextResponse.json({
        success: true,
        alreadyProcessed: true,
        plan: order.planId,
      });
    }

    // 4. Update order to paid
    await db
      .update(orders)
      .set({
        status: "paid",
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        updatedAt: now,
      })
      .where(eq(orders.id, order.id));

    // 5. Calculate expiration if monthly subscription
    let planExpiresAt: Date | null = null;
    if (order.planId === "membership") {
      planExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    }

    // 6. Upgrade user plan in users table
    await db
      .update(users)
      .set({
        plan: order.planId,
        planActivatedAt: now,
        planExpiresAt,
        updatedAt: now,
      })
      .where(eq(users.id, sessionUser.id));

    // 7. Generate a refreshed session token reflecting the new plan
    const updatedUser = {
      ...sessionUser,
      plan: order.planId,
    };
    const newToken = await createSessionToken(updatedUser);

    const response = NextResponse.json({
      success: true,
      plan: order.planId,
      user: updatedUser,
      message: `Congratulations! Your ${order.planId.toUpperCase()} plan is now active.`,
    });

    // Refresh cookie with updated plan
    response.cookies.set(AUTH_COOKIE_NAME, newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify payment. Please contact support." },
      { status: 500 }
    );
  }
}
