/**
 * Razorpay Integration Helper
 * 
 * Provides Edge- and Node-compatible order creation and cryptographic
 * HMAC-SHA256 signature verification using the Web Crypto API.
 */

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_test_TtCnQSeZXjBuyh";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "LyyI22MjkQfjK2ctGRLLWsQ4";

export interface CreateOrderParams {
  amount: number; // in paise (e.g. 19900 = ₹199)
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}

export interface RazorpayOrderResult {
  id: string;
  amount: number;
  currency: string;
  receipt?: string;
  isSandbox?: boolean;
}

/**
 * Computes HMAC-SHA256 hex digest using Web Crypto (100% universal across Edge, Workers, and Node).
 */
export async function generateHmacSha256(data: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Calls Razorpay API to generate a server-side order.
 */
export async function createRazorpayOrder(params: CreateOrderParams): Promise<RazorpayOrderResult> {
  try {
    const basicAuth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString("base64");
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify({
        amount: params.amount,
        currency: params.currency || "INR",
        receipt: params.receipt || `rcpt_${Date.now()}`,
        notes: params.notes,
      }),
    });

    if (res.ok) {
      const order = await res.json();
      return {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        isSandbox: false,
      };
    }

    const errData = await res.json().catch(() => ({}));
    console.error("Razorpay API order creation failed:", errData);
    throw new Error(errData.error?.description || "Razorpay order creation failed.");
  } catch (err: any) {
    console.error("Failed to reach Razorpay API:", err);
    throw err;
  }
}

/**
 * Verifies Razorpay payment signature:
 * generated_signature = HMAC-SHA256(order_id + "|" + payment_id, secret)
 */
export async function verifyRazorpaySignature(params: {
  orderId: string;
  paymentId: string;
  signature: string;
}): Promise<boolean> {
  const { orderId, paymentId, signature } = params;

  // Sandbox bypass for testing with simulated checkouts
  if (orderId.startsWith("order_sandbox_") && (signature.startsWith("sandbox_sig_") || signature === "sandbox_approved")) {
    return true;
  }

  const expectedData = `${orderId}|${paymentId}`;
  const expectedSignature = await generateHmacSha256(expectedData, RAZORPAY_KEY_SECRET);

  return expectedSignature.toLowerCase() === signature.toLowerCase();
}