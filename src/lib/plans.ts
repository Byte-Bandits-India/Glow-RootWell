export type PlanId = "free" | "starter" | "pro" | "membership";

export interface PlanConfig {
  id: PlanId;
  name: string;
  priceInr: number; // in rupees
  amountPaise: number; // in paise for Razorpay
  cadence: "one-time" | "monthly";
  description: string;
  allowedBundles: ("free" | "starter" | "pro")[];
  features: string[];
}

export const SERVER_PLANS: Record<Exclude<PlanId, "free">, PlanConfig> = {
  starter: {
    id: "starter",
    name: "Starter Pack",
    priceInr: 199,
    amountPaise: 19900,
    cadence: "one-time",
    description: "25 clinical prompts for skin & gut. Instant lifetime access.",
    allowedBundles: ["free", "starter"],
    features: [
      "25 hand-picked prompts for skin & gut",
      "Quick-start prompt primer guide",
      "Instant lifetime file access",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro Prompt Library",
    priceInr: 1999,
    amountPaise: 199900,
    cadence: "one-time",
    description: "Complete 500+ clinical prompts across skin, gut, nutrition & fitness.",
    allowedBundles: ["free", "starter", "pro"],
    features: [
      "500+ prompts: skin, gut, nutrition & fitness",
      "Advanced clinical personalisation frameworks",
      "Coach-ready intake scripts",
      "Lifetime updates at no extra cost",
      "Priority WhatsApp support community",
    ],
  },
  membership: {
    id: "membership",
    name: "Monthly Membership",
    priceInr: 499,
    amountPaise: 49900,
    cadence: "monthly",
    description: "Fresh monthly prompts, private coaching calls & commercial license.",
    allowedBundles: ["free", "starter", "pro"],
    features: [
      "Everything in the Pro Library",
      "30+ new prompts dropped monthly",
      "Monthly 1-on-1 prompt coaching call",
      "Private community of wellness coaches",
      "Commercial use license included",
    ],
  },
};

/**
 * Checks if a user's active plan grants access to a specific prompt bundle.
 */
export function hasAccessToBundle(
  userPlan: string | undefined | null,
  promptBundle: "free" | "starter" | "pro"
): boolean {
  if (promptBundle === "free") return true;
  if (!userPlan || userPlan === "free") return false;

  const plan = SERVER_PLANS[userPlan as keyof typeof SERVER_PLANS];
  if (!plan) return false;

  return plan.allowedBundles.includes(promptBundle);
}
