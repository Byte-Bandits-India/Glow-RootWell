"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS, FaqItem } from "@/data/siteData";
import {
  Search,
  HelpCircle,
  Sparkles,
  MessageCircle,
  Mail,
  ShieldCheck,
  ArrowRight,
  X,
  FileQuestion,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface ExtendedFaqItem extends FaqItem {
  category: "ai" | "pricing" | "safety" | "coaching";
}

const EXTENDED_FAQS: ExtendedFaqItem[] = [
  {
    question: "Which AI tools do the prompts work with?",
    answer:
      "All of them. The prompts are pure text frameworks, engineered to work flawlessly in ChatGPT (Free & Plus), Claude 3.5 Sonnet, Google Gemini, Microsoft Copilot, Perplexity, and open-source models like Llama 3.",
    category: "ai",
  },
  {
    question: "Do I need a paid AI subscription to use this?",
    answer:
      "No! All prompts work exceptionally well on free tiers of ChatGPT and Claude. Paid AI models offer slightly deeper reasoning, but free models deliver outstanding, personalized routines using our structured prompts.",
    category: "ai",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. Avyaya prompts are designed for lifestyle education, daily wellness organization, meal planning, and appointment preparation. They do not diagnose or treat medical conditions and do not replace a licensed physician.",
    category: "safety",
  },
  {
    question: "How does the 7-day money-back guarantee work?",
    answer:
      "We stand behind our library 100%. If you try the prompts and don't feel they transformed your AI responses within 7 days, email support@avyaya.com and we will promptly refund your payment in full, no questions asked.",
    category: "pricing",
  },
  {
    question: "How do I receive updates to the library?",
    answer:
      "Pro purchasers receive instant access to this online portal where updates are reflected live, as well as an email notification whenever fresh prompt collections are added.",
    category: "pricing",
  },
  {
    question: "Can wellness coaches use these prompts for clients?",
    answer:
      "Yes! Both the Pro Library and Monthly Membership include coach-ready templates and commercial rights to generate plans and client intakes for your paying clients.",
    category: "coaching",
  },
  {
    question: "How will I receive the prompts after purchase?",
    answer:
      "Immediately after completing your purchase, you receive instant access to our searchable online dashboard as well as a download link containing clean PDF and copy-pasteable plain-text files delivered straight to your email.",
    category: "pricing",
  },
  {
    question: "Can I use these prompts on mobile phones and tablets?",
    answer:
      "Absolutely. Our web library is fully responsive and optimized for one-tap copying on iPhone, Android, iPad, and desktop computers. You can also paste the PDF or plain-text files into Apple Notes, Notion, or Google Keep.",
    category: "ai",
  },
  {
    question: "What makes Avyaya prompts different from free online prompts?",
    answer:
      "Most free prompts are simple one-sentence commands that cause AI to give generic, surface-level advice. Avyaya prompts are multi-stage clinical protocols that instruct the AI to conduct an intake diagnostic interview first, account for your individual biomarkers, evaluate active ingredient contraindications, and structure phased 30-day action plans.",
    category: "safety",
  },
  {
    question: "Are the prompts safe if I have existing health conditions?",
    answer:
      "Every prompt contains built-in safety boundaries that instruct the AI to ask about your existing medications, allergies, and contraindications before suggesting any routine, supplement, or diet shift. However, they are strictly informational and you should always verify recommendations with your healthcare provider.",
    category: "safety",
  },
  {
    question: "Will the prompts continue to work as AI models update?",
    answer:
      "Yes! Because our prompts rely on proven natural language frameworks and structured diagnostic prompting, they actually get smarter and more accurate with every new AI release (like GPT-5 and Claude 4). Furthermore, all Pro members receive lifetime prompt updates whenever new capabilities emerge.",
    category: "ai",
  },
  {
    question: "Can I share my access with family members?",
    answer:
      "Yes! You are welcome to use the prompts to generate routines, meal plans, and fitness protocols for your immediate household family members. For commercial client distribution, please select the Pro Library or Monthly Membership tier.",
    category: "coaching",
  },
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "ai" | "pricing" | "safety" | "coaching"
  >("all");


  const categories = [
    { id: "all", label: "All Questions" },
    { id: "ai", label: "AI & Compatibility" },
    { id: "pricing", label: "Pricing & Guarantee" },
    { id: "safety", label: "Health & Medical Safety" },
    { id: "coaching", label: "Coaching & Commercial" },
  ];

  const filteredFaqs = useMemo(() => {
    return EXTENDED_FAQS.filter((faq) => {
      const matchCat =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchQuery =
        !searchQuery.trim() ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [searchQuery, selectedCategory]);



  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* 1. FAQ Page Hero */}
      <div className="bg-[#0B2C13] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[rgba(16,185,130,0.1)] blur-3xl pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-secondary)]/90 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Avyaya clinical prompts, AI tool compatibility, our 7-day guarantee, and health guidelines.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. Search Bar, Categorized Filter Pills & Interactive Accordion */}
      <Section variant="ivory" padding="default">
        <Container size="narrow">
          {/* Quick Search Input above FAQs */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search questions (e.g. Claude, refund, medical advice, coach)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4 text-[var(--color-text-secondary)]" />}
                rightIcon={
                  searchQuery ? (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="p-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  ) : null
                }
                className="bg-white border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:bg-white focus:border-[var(--color-accent)] py-3 px-4 rounded-2xl shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)] text-white shadow-sm"
                      : "bg-white text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Result Count Strip */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
              <span>
                Showing {filteredFaqs.length} of {EXTENDED_FAQS.length} questions
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="font-semibold text-[var(--color-accent)] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[var(--color-border)] p-8">
              <FileQuestion className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-3 opacity-80" />
              <h3 className="font-heading text-xl font-semibold text-[var(--color-primary)] mb-1">
                No matching questions found
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-md mx-auto mb-6">
                We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Try searching for &quot;Claude&quot;, &quot;refund&quot;, &quot;mobile&quot;, or &quot;coach&quot;.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Reset Search
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl px-6 sm:px-8 shadow-xs border border-[var(--color-border)]">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {filteredFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
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
          )}
        </Container>
      </Section>

      {/* 4. Final Call to Action */}
      <Section variant="sage" padding="default">
        <Container size="narrow">
          <div className="text-center space-y-6">

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0B2C13] leading-tight tracking-tight">
              Ready to transform your wellness questions?
            </h2>

            <p className="text-sm sm:text-base text-[#526454] max-w-xl mx-auto leading-relaxed">
              500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/pricing"
                variant="primary"
                size="lg"
                className="bg-[#0B2C13] text-white hover:bg-[#0B2C13]/90 font-semibold shadow-sm px-8"
              >
                Get Instant Access
              </Button>
              <Button
                href="/library"
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white text-[#0B2C13] border-[#0B2C13]/25 hover:border-[#0B2C13] font-semibold px-8 transition-all"
              >
                Explore Prompt Library
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
