"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
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
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PromptCard } from "@/components/shared/PromptCard";
import { PromptModal } from "@/components/shared/PromptModal";
import { PromptItem } from "@/data/promptsData";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* 1. Hero Section (Matching Reference Top-Left) */}
      <HeroReference />

      {/* 2. Mission Statement Section (Matching Reference Top-Right) */}
      <MissionStatement />

      {/* 5. How It Works Section */}
      <TakeControlSection />

      {/* 3. Solutions Venn Diagram Section (Matching Reference Middle-Left) */}
      <SolutionsVenn />

      {/* 4. Observed Stats & Stories Section (Matching Reference Middle-Right) */}
      <ObservedStories />

      {/* Verified Clinical Testimonials Section */}
      <TestimonialsSection />

      {/* 9. FAQ Section */}
      <Section variant="ivory" padding="default" id="faq">
        <Container>
          <SectionHeading
            eyebrow="Questions, Answered"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Avyaya clinical prompts, AI tool compatibility, and our 7-day guarantee."
          />
          <FaqAccordion />
        </Container>
      </Section>

      {/* 10. Final Call to Action */}
      <Section variant="sage" padding="default">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B2C13] leading-tight tracking-tight">
              Your healthiest self is one structured prompt away.
            </h2>

            <p className="text-xs sm:text-sm text-[#526454] max-w-xl mx-auto leading-relaxed">
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

      {/* Interactive Prompt Preview Modal */}
      <PromptModal
        prompt={selectedPrompt}
        isOpen={Boolean(selectedPrompt)}
        onClose={() => setSelectedPrompt(null)}
      />
    </div>
  );
}
