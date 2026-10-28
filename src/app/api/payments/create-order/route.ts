import { NextRequest, NextResponse } from "next/server";
import { db, ensureDbInitialized } from "@/lib/db";
import { orders } from "@/lib/db/schema";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { SERVER_PLANS, PlanId } from "@/lib/plans";
import { createRazorpayOrder } from "@/lib/razorpay";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Authentication required to purchase a membership plan." },
        { status: 401 }
      );
    }

    const user = await verifySessionToken(token);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired session. Please sign in again." },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const planId = body.planId as PlanId;

    if (!planId || !(planId in SERVER_PLANS)) {
      return NextResponse.json(
        { error: "Invalid plan selected. Choose 'starter', 'pro', or 'membership'." },
        { status: 400 }
      );
    }

    const plan = SERVER_PLANS[planId as keyof typeof SERVER_PLANS];
    await ensureDbInitialized();

    const receipt = `rcpt_${user.id.substring(0, 8)}_${Date.now()}`;

    // Create server-side order with Razorpay
    const rzpOrder = await createRazorpayOrder({
      amount: plan.amountPaise,
      currency: "INR",
      receipt,
      notes: {
        userId: user.id,
        userEmail: user.email,
        planId: plan.id,
        planName: plan.name,
      },
    });

    const now = new Date();
    const orderRecordId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Store order record in database with created status
    await db.insert(orders).values({
      id: orderRecordId,
      userId: user.id,
      planId: plan.id,
      amount: plan.amountPaise,
      currency: "INR",
      status: "created",
      razorpayOrderId: rzpOrder.id,
      receipt,
      createdAt: now,
      updatedAt: now,
    });

    const keyId =
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      process.env.RAZORPAY_KEY_ID ||
      "rzp_test_TtCnQSeZXjBuyh";

    return NextResponse.json({
      success: true,
      orderId: rzpOrder.id,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency,
      keyId,
      planId: plan.id,
      planName: plan.name,
      isSandbox: rzpOrder.isSandbox,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { error: "Failed to create payment order. Please try again." },
      { status: 500 }
    );
  }
}
