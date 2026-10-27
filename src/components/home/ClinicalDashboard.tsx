import React from "react";
import { Container } from "../layout/Container";
import {
  Sparkles,
  HeartHandshake,
  Apple,
  Activity,
  CheckCircle,
} from "lucide-react";

export const ClinicalDashboard: React.FC = () => {
  return (
    <section className="bg-[#0B2C13] text-white py-20 md:py-28 border-b border-white/10">
      <Container>
        {/* Centered Heading from home.html */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block">
            Evidence-Based Frameworks
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
            Strengthening lives, one prompt at a time
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-secondary)]/80">
            Real clinical personalization that shapes ChatGPT, Claude, and Gemini around your unique biomarkers.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Large Vital Trends Card from home.html */}
          <div className="lg:col-span-7 bg-[#14331C] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs text-[var(--color-secondary)]/75 block">
                    Your Prompt Plan
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mt-0.5">
                    Tailored personal routine in 60s
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-[rgba(16,185,130,0.2)] text-[var(--color-accent)] border border-[rgba(16,185,130,0.35)] text-xs font-bold uppercase tracking-wider">
                  Ready to paste
                </span>
              </div>

              {/* Glowing SVG Spline Area Graph */}
              <div className="py-8 relative">
                <svg
                  viewBox="0 0 500 180"
                  className="w-full h-36 sm:h-44 overflow-visible"
                >
                  <defs>
                    <linearGradient id="vitalGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B982" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#10B982" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Area Fill */}
                  <path
                    d="M 10 140 Q 90 150 160 110 T 320 85 T 490 35 L 490 180 L 10 180 Z"
                    fill="url(#vitalGlow)"
                  />

                  {/* Glowing Stroke Curve */}
                  <path
                    d="M 10 140 Q 90 150 160 110 T 320 85 T 490 35"
                    fill="none"
                    stroke="#10B982"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Highlight Point */}
                  <circle cx="490" cy="35" r="5" fill="#10B982" className="animate-pulse" />
                  <circle cx="490" cy="35" r="9" fill="none" stroke="#10B982" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Bottom 3 Metrics Row from home.html */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/70 block">
                  Tested Prompts
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-heading text-lg sm:text-xl font-bold text-white">
                    500+
                  </span>
                  <span className="text-[10px] text-[var(--color-accent)] font-semibold">
                    Verified
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/70 block">
                  Generation Time
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-heading text-lg sm:text-xl font-bold text-white">
                    60 sec
                  </span>
                  <span className="text-[10px] text-[var(--color-accent)] font-semibold">
                    Instant
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/70 block">
                  Guarantee
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-heading text-lg sm:text-xl font-bold text-white">
                    7 Days
                  </span>
                  <span className="text-[10px] text-[var(--color-accent)] font-semibold">
                    100%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 2x2 Category Cards Grid from home.html */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Skin */}
            <div className="bg-[#14331C] rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[10px] font-bold text-white/50">120+ items</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/75 uppercase tracking-wider font-semibold block">
                  Skin Health
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">
                  Barrier Repair
                </h4>
                <p className="text-[11px] text-[var(--color-secondary)]/60 mt-0.5">
                  Fits your skin type & climate
                </p>
              </div>
            </div>

            {/* Card 2: Gut */}
            <div className="bg-[#14331C] rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <HeartHandshake className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[10px] font-bold text-white/50">100+ items</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/75 uppercase tracking-wider font-semibold block">
                  Gut Health
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">
                  Microbiome Plan
                </h4>
                <p className="text-[11px] text-[var(--color-secondary)]/60 mt-0.5">
                  Meals matched to your digestion
                </p>
              </div>
            </div>

            {/* Card 3: Nutrition */}
            <div className="bg-[#14331C] rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <Apple className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[10px] font-bold text-white/50">150+ items</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/75 uppercase tracking-wider font-semibold block">
                  Nutrition
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">
                  Balanced Thalis
                </h4>
                <p className="text-[11px] text-[var(--color-secondary)]/60 mt-0.5">
                  Macro targets & grocery lists
                </p>
              </div>
            </div>

            {/* Card 4: Fitness */}
            <div className="bg-[#14331C] rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <Activity className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[10px] font-bold text-white/50">130+ items</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--color-secondary)]/75 uppercase tracking-wider font-semibold block">
                  Fitness
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">
                  PCOD & Mobility
                </h4>
                <p className="text-[11px] text-[var(--color-secondary)]/60 mt-0.5">
                  Gentle strength & desk breaks
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
