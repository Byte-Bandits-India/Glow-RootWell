"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PricingSection } from "@/components/home/PricingSection";
import { ObservedStories } from "@/components/home/ObservedStories";
import {
  ShieldCheck,
  Zap,
  Check,
  X as XIcon,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Clock,
  Heart,
  Award,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function PricingPage() {

  const pricingFaqs = [
    {
      question: "Is this a one-time payment or a subscription?",
      answer:
        "The Starter Pack (₹199) and the Pro Prompt Library (₹1,999) are strictly one-time payments for permanent lifetime access. There are no recurring fees or automatic renewals. The Monthly Membership (₹499/mo) is an optional subscription for wellness professionals who want new monthly drops and 1-on-1 coaching.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit & Debit cards (Visa, Mastercard, RuPay, Amex), Net Banking, and international cards via Stripe & Razorpay.",
    },
    {
      question: "How does the 7-day money-back guarantee work?",
      answer:
        "We believe in our prompt library 100%. If you try the prompts in ChatGPT, Claude or Gemini and don't feel they transformed your routines within 7 days, email support@rootwell.ai and we will immediately refund 100% of your money. No questions asked.",
    },
    {
      question: "Can I upgrade from Starter to Pro later?",
      answer:
        "Yes! If you start with the Starter Pack (₹199) and decide to unlock the full 500+ prompt database, email our team or reach out on WhatsApp and we will credit your initial ₹199 directly toward the Pro tier.",
    },
    {
      question: "Can I use these prompts with paying clients?",
      answer:
        "Yes! Both the Pro Prompt Library and Monthly Membership include a commercial license. You are fully authorized to use the prompts to generate meal plans, skincare routines, and client intake protocols for your paying clients.",
    },
  ];

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* 1. Pricing Page Hero */}
      <div className="bg-[#0B2C13] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[rgba(16,185,130,0.1)] blur-3xl pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight">
              Invest once in your lifelong health routines.
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-secondary)]/90 max-w-2xl mx-auto leading-relaxed">
              Less than the cost of a single 30-minute consultation. 500+ clinical prompts you will rely on every time you need health, skin, or nutrition guidance.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[var(--color-secondary)]/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                7-Day Money-Back Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                Instant Delivery to Your Email
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[var(--color-accent)]" />
                Lifetime Access & Future Updates
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Pricing Cards Grid (Exact Component from Home Page) */}
      <Section variant="sage" padding="default" id="plans">
        <Container>
          <PricingSection />
        </Container>
      </Section>

      {/* 3. Detailed Feature Comparison Table */}
      <Section padding="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block">
              Side-by-Side Comparison
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[var(--color-text-primary)]">
              Compare All Plans
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              Find the perfect fit for your personal wellness journey or coaching practice.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[var(--color-border)] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-background)]/60">
                    <th className="py-4 px-6 font-heading font-semibold text-[var(--color-primary)] text-sm sm:text-base">
                      Features
                    </th>
                    <th className="py-4 px-4 text-center font-heading font-semibold text-[var(--color-primary)]">
                      <div>Starter Pack</div>
                      <div className="text-xs font-normal text-[var(--color-text-secondary)]">₹199 one-time</div>
                    </th>
                    <th className="py-4 px-4 text-center font-heading font-semibold text-white bg-[#0B2C13]">
                      <div className="flex items-center justify-center gap-1">
                        <span>Pro Library</span>
                        <span className="text-[10px] bg-[var(--color-accent)] text-[#0B2C13] px-2 py-0.5 rounded-full font-bold">
                          Popular
                        </span>
                      </div>
                      <div className="text-xs font-normal text-[var(--color-secondary)]/80">₹1,999 one-time</div>
                    </th>
                    <th className="py-4 px-4 text-center font-heading font-semibold text-[var(--color-primary)]">
                      <div>Membership</div>
                      <div className="text-xs font-normal text-[var(--color-text-secondary)]">₹499 / month</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] text-gray-700">
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      Total Prompts Included
                    </td>
                    <td className="py-3.5 px-4 text-center">25 Prompts</td>
                    <td className="py-3.5 px-4 text-center font-bold text-[#0B2C13] bg-[#0B2C13]/5">
                      500+ Complete Vault
                    </td>
                    <td className="py-3.5 px-4 text-center">500+ & 30 New/Mo</td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      Categories Covered
                    </td>
                    <td className="py-3.5 px-4 text-center">Skin & Gut Basics</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      Skin, Gut, Nutrition, Fitness
                    </td>
                    <td className="py-3.5 px-4 text-center">All Pillars + Advanced</td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      AI Tool Compatibility
                    </td>
                    <td className="py-3.5 px-4 text-center">ChatGPT, Claude, Gemini</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      All LLMs & Free Versions
                    </td>
                    <td className="py-3.5 px-4 text-center">All LLMs + Custom Prompts</td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      Online Searchable Library Dashboard
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400">PDF & Text only</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      Lifetime Future Updates
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400">
                      <XIcon className="w-4 h-4 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      Coach Intake Scripts & Client Templates
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400">
                      <XIcon className="w-4 h-4 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      Commercial Use Rights
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400">Personal only</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      Full Commercial Rights
                    </td>
                    <td className="py-3.5 px-4 text-center">Full Commercial Rights</td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      WhatsApp Member Community
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400">
                      <XIcon className="w-4 h-4 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[#0B2C13] bg-[#0B2C13]/5">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[var(--color-primary)]">
                      1-on-1 Monthly Strategy Call
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400">
                      <XIcon className="w-4 h-4 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-400 bg-[#0B2C13]/5">
                      <XIcon className="w-4 h-4 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-[var(--color-primary)]">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mx-auto" />
                    </td>
                  </tr>

                  <tr className="bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-[var(--color-primary)]">
                      7-Day Money-Back Guarantee
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-[var(--color-accent)]">
                      100% Guaranteed
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-[var(--color-accent)] bg-[#0B2C13]/5">
                      100% Guaranteed
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-[var(--color-accent)]">
                      100% Guaranteed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Observed Stories / Member Testimonials */}
      <ObservedStories />

      {/* 6. Pricing & Billing FAQ */}
      <Section padding="default">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Billing & Purchases"
            title="Common Questions About Pricing"
            subtitle="Clear answers about payments, guarantees, and instant delivery."
            align="center"
          />

          <div className="pt-6">
            <div className="bg-white rounded-3xl px-6 sm:px-8 shadow-xs border border-[var(--color-border)]">
              <Accordion type="single" collapsible defaultValue="pricing-faq-0" className="w-full">
                {pricingFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`pricing-faq-${idx}`}>
                    <AccordionTrigger iconStyle="plus">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Bottom CTA */}
      <Section variant="sage" padding="default">
        <Container size="narrow">
          <div className="text-center space-y-6">

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0B2C13] leading-tight tracking-tight">
              Start your wellness transformation today.
            </h2>

            <p className="text-sm sm:text-base text-[#526454] max-w-xl mx-auto leading-relaxed">
              Unlock 500+ expert prompts for skin, gut, nutrition and fitness. Works on ChatGPT, Claude, and Gemini in seconds.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="#plans"
                variant="primary"
                size="lg"
                className="bg-[#0B2C13] text-white hover:bg-[#0B2C13]/90 font-semibold shadow-sm px-8"
              >
                Choose Your Plan
              </Button>
              <Button
                href="/library"
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white text-[#0B2C13] border-[#0B2C13]/25 hover:border-[#0B2C13] font-semibold px-8 transition-all"
              >
                Browse Free Prompts
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
