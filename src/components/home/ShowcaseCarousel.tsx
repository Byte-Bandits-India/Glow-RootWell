"use client";

import React, { useState } from "react";
import { SHOWCASE_SLIDES } from "@/data/siteData";
import { Button } from "../ui/Button";
import { BotanicalBranch } from "../shared/BotanicalBranch";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const ShowcaseCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = SHOWCASE_SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Navigation Arrows */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
            Clinical Quality Engineering
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text-primary)] leading-[1.12]">
            What if AI could be your personal wellness expert?
          </h2>
          <p className="mt-3 text-base text-[var(--color-text-secondary)] leading-relaxed">
            With the right prompts, ChatGPT and Claude become your skin advisor, gut coach, nutritionist and mobility trainer, all in one.
          </p>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Grid: Left Static Plan Panel + Right Dynamic Slide Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[460px]">
        {/* Left Dark Forest Panel */}
        <div className="lg:col-span-5 bg-[#0B2C13] text-white rounded-[var(--radius-card)] p-8 flex flex-col justify-between shadow-xl border border-[var(--color-border-dark)] relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <span className="flex items-center gap-2 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                Your Prompt Plan
              </span>
              <span className="text-xs bg-white/20 font-bold px-3 py-1 rounded-full text-white">
                Ready
              </span>
            </div>

            <div>
              <span className="font-heading text-5xl font-normal leading-none">
                60s
              </span>
              <p className="text-sm text-[var(--color-secondary)]/80 mt-1">
                To a personalized, evidence-informed action plan
              </p>
            </div>

            {/* Micro feature pills */}
            <div className="space-y-3">
              <div className="bg-white text-[var(--color-text-primary)] rounded-xl p-3.5 flex items-center gap-3 shadow-md">
                <div className="w-9 h-9 rounded-full bg-[#DDEED0] text-[#244E16] flex items-center justify-center font-bold text-xs shrink-0">
                  AM
                </div>
                <div>
                  <h4 className="text-xs font-bold">Skin barrier routine</h4>
                  <p className="text-[11px] text-[var(--color-text-secondary)]">
                    Calibrated to your local humidity & active ingredients
                  </p>
                </div>
              </div>

              <div className="bg-white text-[var(--color-text-primary)] rounded-xl p-3.5 flex items-center gap-3 shadow-md">
                <div className="w-9 h-9 rounded-full bg-[#FCE7E1] text-[#7F2F1B] flex items-center justify-center font-bold text-xs shrink-0">
                  PM
                </div>
                <div>
                  <h4 className="text-xs font-bold">Gut & digestive check-in</h4>
                  <p className="text-[11px] text-[var(--color-text-secondary)]">
                    Identifies food fermentation triggers in minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 relative z-10">
            <Button
              href="/#pricing"
              variant="accent"
              fullWidth
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Try It Free, Risk-Free
            </Button>
          </div>
        </div>

        {/* Right Active Dynamic Slide Card */}
        <div className="lg:col-span-7 bg-[var(--color-secondary)] text-[var(--color-text-primary)] rounded-[var(--radius-card)] p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-[var(--color-border-sage)]">
          {/* Slide Text Content */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="inline-block bg-white/70 backdrop-blur-xs text-[var(--color-primary)] font-bold text-xs px-3 py-1 rounded-full mb-4">
                Slide {currentSlide + 1} of {SHOWCASE_SLIDES.length}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold leading-tight text-[var(--color-primary)]">
                {slide.title}
              </h3>
            </div>

            <ul className="space-y-3.5">
              {slide.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[var(--color-text-primary)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button href="/library" variant="primary" size="sm">
                View Sample Prompts
              </Button>
            </div>
          </div>

          {/* Slide Botanical Visual Box */}
          <div
            className="relative rounded-2xl h-64 md:h-full min-h-[280px] overflow-hidden flex flex-col justify-end p-5 shadow-inner transition-all duration-300"
            style={{
              background: `linear-gradient(155deg, ${slide.gradientA}, ${slide.gradientB})`,
            }}
          >
            <div className="absolute -right-4 -bottom-6 w-52 h-72 text-[#102B18] opacity-60">
              <BotanicalBranch />
            </div>

            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] block">
                {slide.tag}
              </span>
              <h4 className="font-heading text-base font-semibold text-[var(--color-text-primary)] mt-0.5">
                {slide.subtag}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
