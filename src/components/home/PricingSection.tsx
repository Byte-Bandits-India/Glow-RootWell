"use client";

import React, { useState } from "react";
import { PRICING_PLANS } from "@/data/siteData";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Check, ShieldCheck, Zap } from "lucide-react";

export const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<"inr" | "usd">("inr");

  return (
    <div className="space-y-12">
      {/* Header & Currency Switcher */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          Early-Access Launch Pricing
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text-primary)]">
          Invest in your transformation
        </h2>

        <p className="text-base sm:text-lg text-[var(--color-text-secondary)]">
          Less than the cost of a single 30-minute consultation. Results you will use and rely on every single day.
        </p>

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
                  <Button
                    variant="accent"
                    size="lg"
                    fullWidth
                    onClick={() => {
                      alert(`Checkout for ${plan.name} (${price}). In production this initiates secure Stripe/Razorpay checkout.`);
                    }}
                  >
                    {plan.ctaText}
                  </Button>
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
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  onClick={() => {
                    alert(`Checkout for ${plan.name} (${price}). In production this initiates secure Stripe/Razorpay checkout.`);
                  }}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium">
          <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
          <span>7-Day 100% Money-Back Guarantee · Instant File Delivery · Works on Free ChatGPT</span>
        </div>
      </div>
    </div>
  );
};
