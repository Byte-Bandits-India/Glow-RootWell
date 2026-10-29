"use client";

import { RAZORPAY_FLOWER_LOGO } from "./razorpayLogo";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

/**
 * Loads the official Razorpay Checkout SDK script dynamically
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.warn("Failed to load Razorpay script from CDN.");
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export interface CheckoutOptions {
  planId: "starter" | "pro" | "membership";
  onSuccess?: (result: { plan: string; message?: string }) => void;
  onError?: (errorMsg: string) => void;
  onCancel?: () => void;
}

/**
 * Initiates end-to-end checkout for a selected plan
 */
export async function initiateCheckout(options: CheckoutOptions) {
  const { planId, onSuccess, onError, onCancel } = options;

  try {
    // 1. Create order on backend
    const orderRes = await fetch("/api/payments/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });

    if (orderRes.status === 401) {
      // User is not signed in
      const returnUrl = encodeURIComponent(`/pricing?plan=${planId}`);
      window.location.href = `/login?redirect=${returnUrl}`;
      return;
    }

    if (!orderRes.ok) {
      const err = await orderRes.json().catch(() => ({}));
      throw new Error(err.error || "Failed to create payment order.");
    }

    const orderData = await orderRes.json();
    const { orderId, amount, currency, keyId, user, planName } = orderData;

    // 2. Load official Razorpay Checkout script
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      throw new Error("Unable to load Razorpay Checkout. Please check your internet connection.");
    }

    // 3. Open official Razorpay Checkout Modal with brand flower logo
    const rzpOptions = {
      key: keyId,
      amount,
      currency,
      name: "Avyaya",
      description: `${planName} Access`,
      image: RAZORPAY_FLOWER_LOGO,
      order_id: orderId,
      prefill: {
        name: user?.name || "",
        email: user?.email || "",
      },
      theme: {
        color: "#0B2C13", // Avyaya forest green brand color
      },
      handler: async function (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) {
        try {
          const verifyRes = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          if (!verifyRes.ok) {
            const err = await verifyRes.json().catch(() => ({}));
            throw new Error(err.error || "Payment verification failed.");
          }

          const verifyData = await verifyRes.json();
          onSuccess?.(verifyData);
        } catch (vErr: any) {
          onError?.(vErr.message || "Payment verification failed.");
        }
      },
      modal: {
        ondismiss: function () {
          onCancel?.();
        },
      },
    };

    const rzpInstance = new window.Razorpay(rzpOptions);
    rzpInstance.open();
  } catch (error: any) {
    console.error("Checkout initialization failed:", error);
    onError?.(error.message || "Failed to start checkout. Please try again.");
  }
}
