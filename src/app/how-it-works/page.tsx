"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TakeControlSection } from "@/components/home/TakeControlSection";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SolutionsVenn } from "@/components/home/SolutionsVenn";

interface ComparisonScenario {
  id: "gut" | "skin" | "nutrition";
  label: string;
  category: string;
  basicPrompt: string;
  basicHighlights: {
    context: string;
    method: string;
    outcome: string;
  };
  avyayaPrompt: string;
  avyayaHighlights: {
    context: string;
    method: string;
    outcome: string;
  };
}

const COMPARISON_SCENARIOS: ComparisonScenario[] = [
  {
    id: "gut",
    label: "Gut Microbiome & Digestion",
    category: "Gastroenterology",
    basicPrompt: "What should I eat to fix my bloating?",
    basicHighlights: {
      context: "0 biological variables (assumes textbook average gut)",
      method: "Summarizes generic internet blog recommendations",
      outcome: "Recommends high-fiber foods that worsen SIBO or FODMAP issues",
    },
    avyayaPrompt:
      "Act as a functional gastroenterology specialist. Before recommending any routine, conduct a 4-point diagnostic intake on bloating transit time, FODMAP tolerance, meal spacing, and stress biomarkers. Once answered, output a phased 14-day elimination protocol with safe ingredient substitutions.",
    avyayaHighlights: {
      context: "Conducts 4-point intake on transit time & food reactions first",
      method: "Differentiates upper vs lower GI transit and enzyme deficiency",
      outcome: "Personalized 14-day protocol with safe swaps and physician notes",
    },
  },
  {
    id: "skin",
    label: "Skin Barrier Repair",
    category: "Dermatology",
    basicPrompt: "Give me a skincare routine for redness and sensitive skin.",
    basicHighlights: {
      context: "No audit of current actives, retinoids, or climate",
      method: "Pulls product lists without checking pH or lipid ratios",
      outcome: "Risks combining conflicting actives that further damage barrier integrity",
    },
    avyayaPrompt:
      "Act as a clinical aesthetician and barrier repair specialist. Conduct a 4-point intake on active ingredients (retinoids, AHA/BHA), stinging triggers, climate, and barrier pH history before prescribing an AM/PM routine.",
    avyayaHighlights: {
      context: "Audits active ingredients, pH balance, and exfoliation history",
      method: "Structures lipid-replenishing ceramides, cholesterol, and fatty acids",
      outcome: "Phased 4-week barrier restoration protocol with contraindication warnings",
    },
  },
  {
    id: "nutrition",
    label: "Metabolic Nutrition",
    category: "Clinical Nutrition",
    basicPrompt: "How many calories and macros should I eat to lose fat?",
    basicHighlights: {
      context: "Uses rigid textbook formulas ignoring hormonal biofeedback",
      method: "Imposes generic caloric deficit without recovery metrics",
      outcome: "Rapid metabolic adaptation, hunger spikes, and muscle loss",
    },
    avyayaPrompt:
      "Act as a clinical sports nutritionist. Before calculating targets, conduct an intake evaluating training volume, sleep biofeedback, hunger signals, and diet history to formulate a progressive, muscle-sparing metabolic protocol.",
    avyayaHighlights: {
      context: "Integrates training load, recovery metrics, and metabolic history",
      method: "Calculates progressive carbohydrate cycling and leucine threshold",
      outcome: "Sustainable body recomposition protocol with automated refeed guidelines",
    },
  },
];

export default function HowItWorksPage() {
  const [activeScenarioId, setActiveScenarioId] = useState<"gut" | "skin" | "nutrition">("gut");
  const [copiedDemo, setCopiedDemo] = useState(false);

  const activeScenario =
    COMPARISON_SCENARIOS.find((s) => s.id === activeScenarioId) ||
    COMPARISON_SCENARIOS[0];

  const samplePrompt = `Act as an expert functional medicine specialist & clinical aesthetician.
I want to build a targeted evening skin-barrier restoration protocol.
Before providing advice, ask me 4 clarifying questions about:
1. My skin type, climate, and current active ingredients (retinoids, AHA/BHA)
2. Frequency and signs of barrier damage (stinging, redness, flaking)
3. Budget and preferred texture (gel, cream, oil)
4. Any known allergies or sensitivities
Once I answer, produce a phased 4-week protocol with AM/PM routines and ingredient contraindications.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedDemo(true);
    setTimeout(() => setCopiedDemo(false), 2500);
  };

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* 1. Page Hero Banner */}
      <div className="bg-[#0B2C13] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
        {/* Subtle ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[rgba(16,185,130,0.08)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[rgba(215,228,201,0.05)] blur-2xl pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-5">

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.08] tracking-tight">
              How Avyaya turns standard AI into your wellness team.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-secondary)]/90 leading-relaxed max-w-2xl">
              Three simple steps. Under 60 seconds. Powered by clinical frameworks tested across skin barrier health, gut microbiome, metabolic nutrition, and mobility.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/pricing"
                variant="accent"
                size="lg"
                className="bg-[var(--color-accent)] text-[#0B2C13] font-semibold hover:brightness-105"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get Instant Access
              </Button>
              <Button
                href="/library"
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10"
              >
                Browse Free Prompts
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* 5. Clinical Quality Carousel */}
      <SolutionsVenn />

      {/* 2. The Core 3-Step Process (TakeControlSection) */}
      <TakeControlSection />

      {/* 3. The Science Behind The Prompts: Minimal Professional Framework Comparison */}
      <Section variant="ivory" padding="default">
        <Container>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-secondary)]/50 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              Framework Architecture
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text-primary)] tracking-tight">
              The difference is in the intake
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              When you prompt without structure, AI guesses your biology. Avyaya prompts instruct the AI to conduct a structured diagnostic interview first.
            </p>
          </div>

          {/* Minimalist Scenario Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            {COMPARISON_SCENARIOS.map((scenario) => {
              const isActive = activeScenarioId === scenario.id;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveScenarioId(scenario.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${isActive
                    ? "bg-[var(--color-primary)] text-white shadow-xs"
                    : "bg-white text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-background)]"
                    }`}
                >
                  {scenario.label}
                </button>
              );
            })}
          </div>

          {/* Unified Architectural Comparison Console */}
          <div className="bg-white rounded-3xl border border-[var(--color-border)] shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border)]">
              {/* Left Column: Standard One-Liner Approach */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[var(--color-background)]/30">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                      Standard Prompting
                    </span>
                    <span className="text-[11px] font-semibold text-[var(--color-text-secondary)] px-2.5 py-0.5 rounded-full bg-[var(--color-background)] border border-[var(--color-border)]">
                      Unstructured Input
                    </span>
                  </div>

                  {/* Monospace Query Box */}
                  <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-primary)] shadow-xs">
                    <span className="text-[var(--color-text-secondary)] select-none">&gt; </span>
                    {activeScenario.basicPrompt}
                  </div>

                  {/* Minimal Specs Breakdown */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    <div className="flex items-start gap-3 pb-3 border-b border-[var(--color-border)]/60">
                      <span className="font-semibold text-[var(--color-text-primary)] shrink-0 w-28">
                        Biological Context
                      </span>
                      <span>{activeScenario.basicHighlights.context}</span>
                    </div>

                    <div className="flex items-start gap-3 pb-3 border-b border-[var(--color-border)]/60">
                      <span className="font-semibold text-[var(--color-text-primary)] shrink-0 w-28">
                        Reasoning Logic
                      </span>
                      <span>{activeScenario.basicHighlights.method}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-[var(--color-text-primary)] shrink-0 w-28">
                        Practical Safety
                      </span>
                      <span>{activeScenario.basicHighlights.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                  <span>Method: Open web scraping</span>
                  <span className="font-medium text-[var(--color-text-muted)]">Generic Advice</span>
                </div>
              </div>

              {/* Right Column: Avyaya Clinical Framework */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0B2C13] text-white relative">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                      Avyaya Framework
                    </span>
                    <span className="text-[11px] font-semibold text-[var(--color-accent)] px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
                      Clinical Protocol
                    </span>
                  </div>

                  {/* Monospace Query Box */}
                  <div className="bg-black/35 rounded-2xl p-4 border border-white/10 font-mono text-xs text-[var(--color-secondary)] leading-relaxed shadow-inner">
                    <span className="text-[var(--color-accent)] select-none">&gt; </span>
                    {activeScenario.avyayaPrompt}
                  </div>

                  {/* Minimal Specs Breakdown */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/80">
                    <div className="flex items-start gap-3 pb-3 border-b border-white/10">
                      <span className="font-semibold text-white shrink-0 w-28">
                        Biological Context
                      </span>
                      <span className="text-[var(--color-secondary)]">{activeScenario.avyayaHighlights.context}</span>
                    </div>

                    <div className="flex items-start gap-3 pb-3 border-b border-white/10">
                      <span className="font-semibold text-white shrink-0 w-28">
                        Reasoning Logic
                      </span>
                      <span className="text-[var(--color-secondary)]">{activeScenario.avyayaHighlights.method}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-white shrink-0 w-28">
                        Practical Safety
                      </span>
                      <span className="text-[var(--color-secondary)]">{activeScenario.avyayaHighlights.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="text-[var(--color-accent)] flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    Structured Diagnostic Architecture
                  </span>
                  <Button
                    href="/library"
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/25 text-white hover:bg-white/20 text-xs py-1 px-3"
                  >
                    View in library
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Interactive Live Prompt Anatomy & Demo */}
      <Section variant="sage" padding="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] block">
                Interactive Example
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-primary)] leading-tight">
                See the framework in action
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Copy this actual Avyaya sample prompt and paste it into ChatGPT or Claude right now to experience how the AI turns into an attentive clinician.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--color-primary)] font-medium">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[var(--color-accent)] shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>1. Role Definition & Clinical Persona</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--color-primary)] font-medium">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[var(--color-accent)] shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>2. Diagnostic Intake Questions Before Advice</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--color-primary)] font-medium">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[var(--color-accent)] shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>3. Structured Output: Routines, Cautions & Doctor Notes</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  href="/pricing"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Unlock 500+ Prompts
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#0B2C13] rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 text-white relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-white/60 ml-2 font-mono">
                      sample-prompt.txt
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer border border-white/15 active:scale-95"
                  >
                    {copiedDemo ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        <span className="text-[var(--color-accent)]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="font-mono text-xs sm:text-sm text-[var(--color-secondary)] whitespace-pre-wrap leading-relaxed overflow-x-auto p-2 bg-black/25 rounded-2xl border border-white/5">
                  {samplePrompt}
                </pre>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Ready to paste into ChatGPT, Claude or Gemini
                  </span>
                  <span className="text-[var(--color-accent)] font-semibold">
                    100% Free to test
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Frequently Asked Questions on How It Works */}
      <Section variant="ivory" padding="default">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Workflow FAQ"
            title="Common questions about using our prompts"
            subtitle="Everything you need to know about setup, compatibility, and device access."
            align="center"
          />

          <div className="pt-6">
            <div className="bg-white rounded-3xl px-6 sm:px-8 border border-[var(--color-border)] shadow-xs">
              <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
                <AccordionItem value="faq-0">
                  <AccordionTrigger iconStyle="plus">
                    Do I need to pay for a premium ChatGPT or Claude subscription?
                  </AccordionTrigger>
                  <AccordionContent>
                    No. All 500+ Avyaya prompts work flawlessly on the completely free versions of ChatGPT (GPT-4o mini) and Claude 3.5 Sonnet. While paid tiers offer slightly deeper reasoning, you will get incredible results without spending a dime on AI subscriptions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-1">
                  <AccordionTrigger iconStyle="plus">
                    Can I save and use these on my iPhone, Android, or tablet?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! You receive instant access to this searchable online library (optimized for all mobile screens) as well as downloadable offline PDF and plain-text files you can keep on your notes app or iCloud/Drive.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger iconStyle="plus">
                    What if I am a wellness coach or personal trainer?
                  </AccordionTrigger>
                  <AccordionContent>
                    Both the Pro Prompt Library and Monthly Membership include full commercial usage rights and coach intake scripts. You can use our frameworks to craft customized routines and client plans directly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Final Call to Action */}
      <Section variant="sage" padding="default">
        <Container size="narrow">
          <div className="text-center space-y-6">

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0B2C13] leading-tight tracking-tight">
              Ready to experience expert wellness AI?
            </h2>

            <p className="text-sm sm:text-base text-[#526454] max-w-xl mx-auto leading-relaxed">
              Get 500+ tested prompts for skin, gut, nutrition and fitness. Protected by our 7-day money-back guarantee.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/pricing"
                variant="primary"
                size="lg"
                className="bg-[#0B2C13] text-white hover:bg-[#0B2C13]/90 font-semibold shadow-sm px-8"
              >
                View Plans & Pricing
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
