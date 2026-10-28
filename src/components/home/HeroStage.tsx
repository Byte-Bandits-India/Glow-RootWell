"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "../layout/Navbar";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { BotanicalBranch } from "../shared/BotanicalBranch";
import { CATEGORIES } from "@/data/promptsData";
import { Sparkles, Sun, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export const HeroStage: React.FC = () => {
  const [activeChip, setActiveChip] = useState<number>(0);

  const chips = [
    {
      title: "Skin barrier routine",
      desc: "Fits your climate & actives",
      icon: <Sun className="w-4 h-4 text-[#A24A33]" />,
      bg: "bg-[#FCE7E1]",
      promptSnippet: "Act as a skincare coach. Ask about my skin type, climate & budget, then construct a gentle barrier repair routine...",
    },
    {
      title: "Gut-friendly meal plan",
      desc: "Ready in 40 seconds",
      icon: <Droplets className="w-4 h-4 text-[#4B6B25]" />,
      bg: "bg-[#E3F1D4]",
      promptSnippet: "Act as a microbiome gut specialist. Review my bloating triggers and build a personalized 7-day low-fermentation plan...",
    },
    {
      title: "Coach-ready templates",
      desc: "Use with your clients",
      icon: <CheckCircle2 className="w-4 h-4 text-[#1E7A46]" />,
      bg: "bg-[#DDF5E6]",
      promptSnippet: "Act as a wellness clinic intake consultant. Build an assessment checklist for new lifestyle coaching clients...",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#0B2C13] via-[#103319] to-[#08220F] text-white pt-2 pb-16 md:pb-24 overflow-hidden">
      {/* Botanical Branches in Background */}
      <div className="absolute -left-12 top-24 w-72 h-96 text-[#24402B] opacity-60 rotate-[-12deg] pointer-events-none blur-[1px]">
        <BotanicalBranch />
      </div>
      <div className="absolute -right-16 bottom-0 w-96 h-[480px] text-[#24402B] opacity-45 rotate-[150deg] pointer-events-none blur-[2px]">
        <BotanicalBranch />
      </div>
      <div className="absolute right-[12%] -top-16 w-56 h-80 text-[#24402B] opacity-35 rotate-[190deg] pointer-events-none blur-[3px]">
        <BotanicalBranch />
      </div>

      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-radial from-[rgba(215,228,201,0.12)] via-[rgba(16,185,130,0.06)] to-transparent pointer-events-none"
      />

      <Navbar variant="dark" />

      <Container className="relative z-10 mt-6 sm:mt-10">
        {/* Main Floating Surface Sheet */}
        <div className="bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-[var(--radius-card-lg)] p-7 sm:p-10 lg:p-14 shadow-[0_35px_80px_-25px_rgba(5,20,10,0.6)] border border-[var(--color-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-secondary)] border border-[var(--color-border-sage)] text-xs font-semibold text-[var(--color-text-primary)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>The Premier Healthcare AI Prompt System</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal tracking-tight leading-[1.08] text-[var(--color-text-primary)]">
                Make any AI answer like a wellness expert.
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                500+ expert-engineered prompts for skin, gut, nutrition and fitness. Paste one into ChatGPT, Claude or Gemini and get advice shaped around your biology in under a minute.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/#pricing" variant="primary" size="lg">
                  Get Instant Access
                </Button>
                <Button
                  href="/library"
                  variant="outline"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore 500+ Prompts
                </Button>
              </div>

              {/* Verified Metrics Strip */}
              <div className="pt-8 border-t border-[var(--color-border)] grid grid-cols-3 gap-6">
                <div>
                  <span className="font-heading text-3xl sm:text-4xl font-normal text-[var(--color-text-primary)]">
                    500+
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
                    Tested prompts
                  </p>
                </div>
                <div>
                  <span className="font-heading text-3xl sm:text-4xl font-normal text-[var(--color-text-primary)]">
                    60s
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
                    To a personal plan
                  </p>
                </div>
                <div>
                  <span className="font-heading text-3xl sm:text-4xl font-normal text-[var(--color-text-primary)]">
                    7 Days
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
                    Money-back guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Stage */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px]">
              {/* Conic Orb */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center shadow-2xl">
                {/* Glowing Outer Conic Ring */}
                <div
                  className="absolute inset-0 rounded-full animate-spin [animation-duration:40s]"
                  style={{
                    background:
                      "conic-gradient(from 210deg, #10B982 0%, #D7E4C9 40%, #E9C86A 75%, #10B982 100%)",
                  }}
                />
                {/* Inner Disc */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#F0EFE7] to-[#DDE6D4] flex items-center justify-center shadow-inner">
                  <div className="w-44 h-44 text-[#24402B] opacity-80 rotate-12">
                    <BotanicalBranch />
                  </div>
                </div>
              </div>

              {/* Floating Interactive Chips */}
              {chips.map((chip, idx) => {
                const positions = [
                  "-left-3 top-6 sm:-left-6 sm:top-10",
                  "-right-2 top-2 sm:-right-4 sm:top-6",
                  "-right-2 bottom-6 sm:-right-4 sm:bottom-10",
                ];
                return (
                  <button
                    key={chip.title}
                    type="button"
                    onClick={() => setActiveChip(idx)}
                    className={`absolute z-20 ${positions[idx]} flex items-center gap-3 bg-[var(--color-surface)] text-[var(--color-text-primary)] px-4 py-3 rounded-2xl shadow-[0_12px_30px_-8px_rgba(11,44,19,0.22)] border transition-all cursor-pointer text-left ${
                      activeChip === idx
                        ? "border-[var(--color-accent)] ring-2 ring-[rgba(16,185,130,0.25)] scale-105"
                        : "border-[var(--color-border)] hover:scale-102"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${chip.bg}`}
                    >
                      {chip.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold leading-tight">
                        {chip.title}
                      </h4>
                      <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                        {chip.desc}
                      </p>
                    </div>
                  </button>
                );
              })}

              {/* Interactive Dynamic Prompt Preview */}
              <div className="absolute z-20 left-4 sm:left-6 -bottom-5 sm:-bottom-7 right-4 sm:right-6 bg-[#0B2C13] text-[#EAF3EC] rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] border border-[rgba(215,228,201,0.2)]">
                <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                  <span className="text-[var(--color-accent)] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Prompt Preview
                  </span>
                  <span className="text-[var(--color-secondary)] text-[11px]">
                    {chips[activeChip].title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-mono leading-relaxed text-[#D7E4C9]">
                  {chips[activeChip].promptSnippet}
                </p>
              </div>
            </div>
          </div>

          {/* 4 Category Pill Tiles at bottom of sheet */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--color-border)]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
              Explore By Clinical Category
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(
                [
                  { key: "fat_loss" as const, grad: "from-[#F7DDD5] to-[#F1C2B4]" },
                  { key: "sales" as const, grad: "from-[#FBE9BA] to-[#F3D78E]" },
                  { key: "content" as const, grad: "from-[#D8E1F8] to-[#B8CCF5]" },
                  { key: "delivery" as const, grad: "from-[#D5EAC3] to-[#B5D99B]" },
                ]
              ).map(({ key, grad }) => {
                const cat = CATEGORIES[key];
                return (
                  <Link
                    key={key}
                    href={`/library?cat=${key}`}
                    className="group rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div
                      className={`h-28 bg-gradient-to-br ${grad} p-4 relative overflow-hidden flex items-end justify-between`}
                    >
                      <div className="absolute -right-3 -bottom-5 w-24 h-32 text-white/40 group-hover:scale-110 transition-transform">
                        <BotanicalBranch />
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-xs text-[#0B2C13]">
                        {cat.count}+ prompts
                      </span>
                    </div>
                    <div className="p-3.5">
                      <h4 className="font-heading text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {cat.label}
                      </h4>
                      <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
