"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { HeroReference } from "@/components/home/HeroReference";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { MissionStatement } from "@/components/home/MissionStatement";
import { SolutionsVenn } from "@/components/home/SolutionsVenn";
import { ObservedStories } from "@/components/home/ObservedStories";
import { ClinicalDashboard } from "@/components/home/ClinicalDashboard";
import { TakeControlSection } from "@/components/home/TakeControlSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PromptCard } from "@/components/shared/PromptCard";
import { PromptModal } from "@/components/shared/PromptModal";
import { PROMPTS, PromptItem } from "@/data/promptsData";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);

  // Featured sample prompts for the homepage preview
  const featuredPrompts = PROMPTS.slice(0, 4);

  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* 1. Hero Section (Matching Reference Top-Left) */}
      <HeroReference />

      {/* Social Proof Bar (Next Section) */}
      <SocialProofBar />

      {/* 2. Mission Statement Section (Matching Reference Top-Right) */}
      <MissionStatement />

      {/* 3. Solutions Venn Diagram Section (Matching Reference Middle-Left) */}
      <SolutionsVenn />

      {/* 4. Observed Stats & Stories Section (Matching Reference Middle-Right) */}
      <ObservedStories />

      {/* 8. Pricing Section */}
      <Section variant="sage" padding="default" id="pricing">
        <Container>
          <PricingSection />
        </Container>
      </Section>

      {/* 9. FAQ Section */}
      <Section variant="ivory" padding="default" id="faq">
        <Container>
          <SectionHeading
            eyebrow="Questions, Answered"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Rootwell clinical prompts, AI tool compatibility, and our 7-day guarantee."
          />
          <FaqAccordion />
        </Container>
      </Section>

      {/* 10. Final Call to Action */}
      <Section variant="forest" padding="default">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(16,185,130,0.18)] border border-[rgba(16,185,130,0.3)] text-xs font-semibold text-[var(--color-accent)]">
              <Sparkles className="w-3.5 h-3.5" />
              Instant Access Today
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Your healthiest self is one structured prompt away.
            </h2>

            <p className="text-xs sm:text-sm text-[var(--color-secondary)]/85 max-w-xl mx-auto">
              500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/#pricing"
                variant="outline"
                size="lg"
                className="bg-white text-[#0B2C13] border-white hover:bg-white/90 font-semibold"
              >
                Get Instant Access
              </Button>
              <Button
                href="/library"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore Prompt Library
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />

      {/* Interactive Prompt Preview Modal */}
      <PromptModal
        prompt={selectedPrompt}
        isOpen={Boolean(selectedPrompt)}
        onClose={() => setSelectedPrompt(null)}
      />
    </main>
  );
}
