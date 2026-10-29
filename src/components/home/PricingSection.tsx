"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PRICING_PLANS } from "@/data/siteData";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Check, ShieldCheck, Zap, Loader2, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { initiateCheckout } from "@/lib/checkout";

export const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<"inr" | "usd">("inr");
  const [processingPlan, setProcessingPlan] = useState<string | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const { user, refreshUser } = useAuth();
  const router = useRouter();

  const handleBuyPlan = async (planId: "starter" | "pro" | "membership") => {
    setFeedbackMsg(null);

    if (!user) {
      router.push(`/login?redirect=/pricing`);
      return;
    }

    setProcessingPlan(planId);

    await initiateCheckout({
      planId,
      onSuccess: async (data) => {
        setProcessingPlan(null);
        setFeedbackMsg({
          type: "success",
          text: "Payment verified successfully! Redirecting to your dashboard...",
        });
        await refreshUser();
        setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      },
      onError: (errorMsg) => {
        setProcessingPlan(null);
        setFeedbackMsg({ type: "error", text: errorMsg });
      },
      onCancel: () => {
        setProcessingPlan(null);
      },
    });
  };

  return (
    <div className="space-y-12">
      {/* Header & Currency Switcher */}
      <div className="text-center max-w-3xl mx-auto space-y-4">

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text-primary)]">
          Invest in your transformation
        </h2>

        <p className="text-base sm:text-lg text-[var(--color-text-secondary)]">
          Less than the cost of a single 30-minute consultation. Results you will use and rely on every single day.
        </p>

        {feedbackMsg && (
          <div
            className={`p-4 rounded-2xl max-w-md mx-auto text-sm font-medium ${
              feedbackMsg.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {feedbackMsg.text}
          </div>
        )}

        {/* Currency Switcher */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
            <button
              type="button"
              onClick={() => setCurrency("inr")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                currency === "inr"
                  ? "bg-[var(--color-primary)] text-white shadow-xs"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("usd")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                currency === "usd"
                  ? "bg-[var(--color-primary)] text-white shadow-xs"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = currency === "inr" ? plan.priceInr : plan.priceUsd;
          const altPrice = currency === "inr" ? `or ${plan.priceUsd}` : `or ${plan.priceInr}`;

          const isCurrentPlan = user?.plan === plan.id;
          const isHigherTier =
            user?.plan === "pro" ||
            user?.plan === "membership" ||
            (user?.plan === "starter" && plan.id === "starter");
          const isProcessing = processingPlan === plan.id;

          if (plan.popular) {
            return (
              <div
                key={plan.id}
                className="relative rounded-[var(--radius-card-lg)] bg-[#0B2C13] text-white p-8 md:p-9 flex flex-col justify-between shadow-[0_30px_70px_-20px_rgba(11,44,19,0.5)] border-2 border-[var(--color-accent)] transform md:-translate-y-3"
              >
                {/* Popular Badge */}
                <div className="absolute -top-3.5 left-8 bg-[var(--color-accent)] text-[#0B2C13] font-bold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  {plan.badge || "Most Popular"}
                </div>

                <div>
                  <div className="mb-4">
                    <h3 className="font-heading text-2xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[var(--color-secondary)]/80 mt-1">
                      {plan.audience}
                    </p>
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-white/15">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-5xl font-normal text-white">
                        {price}
                      </span>
                      <span className="text-sm text-[var(--color-secondary)]/80">
                        {plan.cadence}
                      </span>
                    </div>
                    <span className="text-xs text-white/50 block mt-1">
                      {altPrice} {plan.cadence}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-sm text-white/90 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {isCurrentPlan ? (
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      disabled
                      className="border-emerald-400/40 text-emerald-300 bg-emerald-950/40 opacity-90 cursor-default"
                    >
                      <Check className="w-4 h-4 mr-2 text-emerald-400" />
                      Active Plan
                    </Button>
                  ) : (
                    <Button
                      variant="accent"
                      size="lg"
                      fullWidth
                      disabled={isProcessing}
                      onClick={() => handleBuyPlan(plan.id as any)}
                      className="cursor-pointer"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Processing...
                        </>
                      ) : (
                        plan.ctaText
                      )}
                    </Button>
                  )}
                </div>
              </div>
            );
          }

          return (
            <Card
              key={plan.id}
              variant="surface"
              padding="lg"
              className="flex flex-col justify-between border-[var(--color-border)] shadow-[var(--shadow-card)]"
            >
              <div>
                <div className="mb-4">
                  <h3 className="font-heading text-2xl font-semibold text-[var(--color-text-primary)]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    {plan.audience}
                  </p>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="mb-6 pb-6 border-b border-[var(--color-border)]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-5xl font-normal text-[var(--color-text-primary)]">
                      {price}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {plan.cadence}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)]/70 block mt-1">
                    {altPrice} {plan.cadence}
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-[var(--color-text-secondary)] mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#1E7A46] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {isCurrentPlan ? (
                  <Button
                    variant="outline"
                    size="md"
                    fullWidth
                    disabled
                    className="border-emerald-600/30 text-emerald-800 bg-emerald-50 cursor-default"
                  >
                    <Check className="w-4 h-4 mr-2 text-emerald-600" />
                    Active Plan
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="md"
                    fullWidth
                    disabled={isProcessing}
                    onClick={() => handleBuyPlan(plan.id as any)}
                    className="cursor-pointer"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      plan.ctaText
                    )}
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
