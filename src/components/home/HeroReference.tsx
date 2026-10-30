"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

/* ------------------------------------------------------------------ */
/*  Category Card Data                                                */
/* ------------------------------------------------------------------ */

const categories = [
  {
    slug: "skin",
    label: "Skin",
    question: "How can I reduce acne and get clearer, healthier skin?",
    lines: [
      "How can I reduce acne",
      "and get clearer, healthier",
      "skin?",
    ],
    icon: "/icons/icons/skin.png",
    illustration: "/icons/images/Green_Serum.png",
    bg: "bg-[#f8edeb]",
    borderColor: "border-black/[0.05]",
  },
  {
    slug: "gut",
    label: "Gut",
    question: "What foods help with bloating and better digestion?",
    lines: [
      "What foods help with",
      "bloating and better",
      "digestion?",
    ],
    icon: "/icons/icons/gut.png",
    illustration: "/icons/images/gut_illustration.png",
    bg: "bg-[#EAF7EE]",
    borderColor: "border-[#D2EDDA]",
  },
  {
    slug: "nutrition",
    label: "Nutrition",
    question: "Create a balanced meal plan for more energy and focus.",
    lines: [
      "Create a balanced meal",
      "plan for more energy and",
      "focus.",
    ],
    icon: "/icons/icons/nutrition.png",
    illustration: "/icons/images/nutrition_bowl.png",
    bg: "bg-[#FFF9E6]",
    borderColor: "border-[#F7EAC4]",
  },
  {
    slug: "fitness",
    label: "Fitness",
    question:
      "Design a home workout plan to build strength and stay consistent.",
    lines: [
      "Design a home workout",
      "plan to build strength and",
      "stay consistent.",
    ],
    icon: "/icons/icons/fitness.png",
    illustration: "/icons/images/Lavender_Fitness.png",
    bg: "bg-[#F3EFFC]",
    borderColor: "border-[#E5DAF6]",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Decorative SVG Components                                          */
/* ------------------------------------------------------------------ */

// Green sparkle after headline
const SparkBurst = () => (
  <span className="absolute -top-2.5 sm:-top-3.5 md:-top-4 lg:-top-5 xl:-top-6 -right-5 sm:-right-7 md:-right-8 lg:-right-10 xl:-right-12 pointer-events-none select-none">
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-11 xl:h-11 text-[#1C7C3B]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="6" y1="18" x2="2" y2="7" />
      <line x1="12" y1="17" x2="12" y2="3" />
      <line x1="18" y1="18" x2="22" y2="7" />
    </svg>
  </span>
);

// Mouse pointer
const PointerCursor = () => (
  <div className="absolute -bottom-3.5 -left-3 sm:-bottom-8 sm:-left-4 md:-bottom-9 md:-left-5 lg:-bottom-10 lg:-left-6 z-30 pointer-events-none select-none drop-shadow-md">
    <svg
      className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-18 lg:h-18 text-[#1A1A1A] fill-[#1A1A1A]"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth="1.75"
      strokeLinejoin="round"
    >
      <path d="M4 2L11 21L14 13.5L21.5 11L4 2Z" />
    </svg>
  </div>
);

// Golden rays around Gut illustration
const GutAccentRays = () => (
  <div className="absolute -inset-2 pointer-events-none select-none z-0">
    <img src="/icons/icons/gut.png" className="w-full h-full" alt="gut" />
  </div>
);

// Nutrition rays
const NutritionAccentRays = () => (
  <div className="absolute -top-3 sm:-top-4 -right-1 sm:right-0 pointer-events-none select-none z-10">
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5A83B]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="5" y1="18" x2="1" y2="7" />
      <line x1="12" y1="17" x2="12" y2="3" />
      <line x1="19" y1="18" x2="23" y2="7" />
    </svg>
  </div>
);

// Fitness rays
const FitnessAccentRays = () => (
  <div className="absolute top-2 -right-3 sm:-right-4 pointer-events-none select-none z-10">
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E79C9]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="4" y1="12" x2="14" y2="4" />
      <line x1="8" y1="16" x2="18" y2="10" />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Curved Text Component                                             */
/* ------------------------------------------------------------------ */

interface CurvedLineProps {
  segments: { text: string; color?: string }[];
  isSecondLine?: boolean;
}

const CurvedTextLine: React.FC<CurvedLineProps> = ({
  segments,
  isSecondLine,
}) => {
  const chars: { char: string; color?: string; isLast: boolean }[] = [];
  const fullText = segments.map((s) => s.text).join("");
  const total = fullText.length;

  segments.forEach((seg, sIdx) => {
    for (let i = 0; i < seg.text.length; i++) {
      const isLast = sIdx === segments.length - 1 && i === seg.text.length - 1;
      chars.push({ char: seg.text[i], color: seg.color, isLast });
    }
  });

  return (
    <span className="inline-flex justify-center items-baseline whitespace-nowrap">
      {chars.map((item, idx) => {
        // Normalized position from -1 (left) to 0 (center) to +1 (right)
        const t = total > 1 ? (idx - (total - 1) / 2) / ((total - 1) / 2) : 0;
        // Parabolic drop: center = 0, ends drop down
        const t2 = Math.round(t * t * 1000) / 1000;
        // Tangent rotation: left tilts counter-clockwise, right tilts clockwise
        const t1 = Math.round(t * 1000) / 1000;

        if (item.char === " ") {
          return (
            <span
              key={idx}
              className="inline-block select-none"
              style={{
                width: "0.26em",
                transform: `translateY(calc(var(--curve-drop) * ${t2})) rotate(calc(var(--curve-rot) * ${t1}))`,
              }}
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={idx}
            className="inline-block relative"
            style={{
              color: item.color,
              transform: `translateY(calc(var(--curve-drop) * ${t2})) rotate(calc(var(--curve-rot) * ${t1}))`,
              transformOrigin: "center bottom",
            }}
          >
            {item.char}
            {item.isLast && isSecondLine && <SparkBurst />}
          </span>
        );
      })}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/*  Prompt Category Card                                               */
/* ------------------------------------------------------------------ */

interface PromptCardProps {
  slug: string;
  label: string;
  question: string;
  lines?: readonly string[];
  icon: string;
  bg: string;
  borderColor: string;
}

const PromptCategoryCard: React.FC<PromptCardProps> = ({
  slug,
  label,
  question,
  lines,
  icon,
  bg,
  borderColor,
}) => (
  <Link
    href={`/library?cat=${slug}`}
    className={`${bg} ${borderColor} border-2 border-white rounded-2xl p-2.5 sm:p-3 md:p-3.5 lg:p-4 w-[145px] sm:w-[155px] md:w-[170px] lg:w-[180px] xl:w-[220px] shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group block text-left relative z-10`}
  >
    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
      <img
        src={icon}
        alt=""
        className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 object-contain shrink-0"
        aria-hidden="true"
      />

      <span className="text-xs sm:text-[13px] md:text-sm lg:text-[14px] font-bold text-[#111813]">
        {label}
      </span>
    </div>

    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-[12px] text-gray-700 leading-snug font-normal">
      {lines ? (
        lines.map((line, idx) => (
          <span key={idx} className="block whitespace-nowrap">
            {line}
          </span>
        ))
      ) : (
        question
      )}
    </p>
  </Link>
);

/* ------------------------------------------------------------------ */
/*  Hero Reference Component                                           */
/* ------------------------------------------------------------------ */

export const HeroReference: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] text-[#111813] relative overflow-hidden flex flex-col justify-start sm:min-h-[calc(100vh-80px)] 4xl:min-h-[70%] py-6 sm:py-8 lg:py-6">
      {/* Background Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] sm:w-[1000px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(250,248,245,0) 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col flex-1 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center w-full my-auto">
          {/* ------------------------------------------------ */}
          {/* Main Headline with Subtle Reference Curve        */}
          {/* ------------------------------------------------ */}

          <div className="max-w-4xl mx-auto mt-8 px-2">
            <h1
              aria-label="Make any AI answer like a wellness expert."
              className="text-[1.95rem] xs:text-[2.25rem] sm:text-5xl md:text-[54px] lg:text-[60px] xl:text-[90px] font-normal tracking-tight text-[#111813] leading-[1.05] sm:leading-[1.03] [--curve-drop:4px] [--curve-rot:2deg] sm:[--curve-drop:8px] sm:[--curve-rot:3.5deg] lg:[--curve-drop:9px] lg:[--curve-rot:3deg]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              <span className="sr-only">
                Make any AI answer like a wellness expert.
              </span>

              <span aria-hidden="true" className="flex flex-col items-center">
                {/* Line 1 — Curved */}
                <span className="block">
                  <CurvedTextLine
                    segments={[
                      { text: "Make any AI answer", color: "#111813" },
                    ]}
                  />
                </span>

                {/* Line 2 — Curved */}
                <span className="block mt-0.5 sm:mt-1">
                  <CurvedTextLine
                    segments={[
                      { text: "like a ", color: "#111813" },
                      { text: "wellness expert.", color: "#1C7C3B" },
                    ]}
                    isSecondLine
                  />
                </span>
              </span>
            </h1>
          </div>

          {/* ------------------------------------------------ */}
          {/* Mobile 2x2 Category Cards with Images & Icons    */}
          {/* ------------------------------------------------ */}
          <div className="sm:hidden grid grid-cols-2 gap-2.5 xs:gap-3 w-full max-w-sm xs:max-w-md mx-auto px-1 my-10 text-left">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/library?cat=${cat.slug}`}
                className={`p-3 xs:p-3.5 rounded-2xl ${cat.bg} ${cat.borderColor} border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.05)] flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-transform min-h-[96px] xs:min-h-[104px]`}
              >
                {/* Desktop Illustration Image */}
                <div className="absolute -right-2 -top-1.5 w-13 h-15 xs:w-15 xs:h-17 pointer-events-none select-none opacity-85 z-0">
                  <img
                    src={cat.illustration}
                    alt=""
                    className="w-full h-full object-contain drop-shadow-sm"
                    aria-hidden="true"
                  />
                </div>

                {/* Header: Icon + Label */}
                <div className="relative z-10 flex items-center gap-1.5 mb-1.5">
                  <img
                    src={cat.icon}
                    alt=""
                    className="w-4 h-4 xs:w-[18px] xs:h-[18px] object-contain shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs xs:text-[13px] font-bold text-[#111813] block">
                    {cat.label}
                  </span>
                </div>

                {/* Query Lines */}
                <p className="relative z-10 text-[10.5px] xs:text-[11.5px] text-gray-700 leading-snug font-normal">
                  {cat.lines ? (
                    cat.lines.map((line, idx) => (
                      <span key={idx} className="block truncate xs:whitespace-normal">
                        {line}
                      </span>
                    ))
                  ) : (
                    cat.question
                  )}
                </p>
              </Link>
            ))}
          </div>

          {/* ------------------------------------------------ */}
          {/* Desktop / Tablet Category Cards                  */}
          {/* ------------------------------------------------ */}

          <div className="relative w-full max-w-[1000px] xl:max-w-[1060px] mx-auto hidden sm:block">
            <div className="relative mx-auto w-full h-[210px] sm:h-[220px] md:h-[230px] lg:h-[240px]">
              {/* Skin Card */}
              <div className="absolute left-[3%] sm:left-[4%] md:left-[5%] lg:left-[8%] xl:-left-[2%] -top-[6%] -rotate-[7deg] z-10 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <div className="relative">
                  {/* Serum Bottle + Leaves */}
                  <div className="absolute -top-8 -left-3 sm:-top-10 sm:-left-4 md:-top-28 md:-left-5 lg:-top-28 lg:-left-20 w-20 h-24 sm:w-24 sm:h-28 md:w-38 md:h-48 lg:w-60 lg:h-38 rotate-[4deg] select-none pointer-events-none z-0">
                    <img
                      src="/icons/images/Green_Serum.png"
                      alt=""
                      className="w-full h-full object-contain drop-shadow-md"
                      aria-hidden="true"
                    />
                  </div>

                  <PromptCategoryCard {...categories[0]} />
                </div>
              </div>

              {/* Gut Card */}
              <div className="absolute left-[26%] sm:left-[27%] md:left-[28%] xl:left-[22%] top-[10%] rotate-[6deg] z-20 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <div className="relative">
                  <PromptCategoryCard {...categories[1]} />

                  <PointerCursor />

                  {/* Gut Illustration */}
                  <div className="absolute -right-7 sm:-right-8 md:-right-9 lg:-right-14 top-1/2 rotate-[4deg] -translate-y-1/2 w-12 sm:w-14 md:w-15 lg:w-20 select-none pointer-events-none z-0">
                    <div className="relative w-full h-full">
                      <img
                        src="/icons/images/gut_illustration.png"
                        alt=""
                        className="w-full h-full object-contain drop-shadow-md relative z-10"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Nutrition Card */}
              <div className="absolute left-[49%] sm:left-[50%] md:left-[54%] xl:left-[51%] top-[10%] -rotate-[6deg] z-20 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <div className="relative">
                  <PromptCategoryCard {...categories[2]} />

                  {/* Nutrition Bowl */}
                  <div className="absolute -right-7 sm:-right-8 md:-right-9 lg:-right-10 -bottom-4 sm:-bottom-6 md:-bottom-7 lg:-bottom-8 w-15 sm:w-17 md:w-19 lg:w-26 select-none pointer-events-none z-20">
                    <div className="relative w-full h-full">
                      <NutritionAccentRays />

                      <img
                        src="/icons/images/nutrition_bowl.png"
                        alt=""
                        className="w-full h-full object-contain drop-shadow-md"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fitness Card */}
              <div className="absolute right-[3%] sm:right-[4%] md:right-[5%] xl:-right-[1%] top-[8%] rotate-[7deg] z-10 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <div className="relative">
                  <PromptCategoryCard {...categories[3]} />

                  {/* Water Bottle + Yoga Mat + Dumbbell */}
                  <div className="absolute -right-3 sm:-right-4 md:-right-5 lg:-right-10 -top-3 sm:-top-4 md:-top-5 lg:-top-14 w-20 sm:w-22 md:w-24 lg:w-44 select-none pointer-events-none z-20">
                    <div className="relative w-full h-full">
                      <img
                        src="/icons/images/Lavender_Fitness.png"
                        alt=""
                        className="w-full h-full object-contain drop-shadow-md"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------ */}
          {/* Subtitle & CTA                                   */}
          {/* ------------------------------------------------ */}

          <div className="max-w-xl sm:max-w-2xl mx-auto space-y-3 sm:space-y-3.5 relative sm:-top-5 md:-top-7 lg:-top-9 mt-4 sm:mt-0">
            <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#4B5563] leading-relaxed font-normal">
              <span>
                500+ prompts for skin, gut, nutrition and fitness.{" "}
              </span>

              <br className="hidden sm:inline" />

              <span>
                Paste one into ChatGPT, Claude or Gemini and get advice{" "}
              </span>

              <br className="hidden sm:inline" />

              <span>shaped around you in </span>

              <span className="text-[#1C7C3B] font-bold">
                under a minute.
              </span>
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                href="/pricing"
                variant="accent"
                size="lg"
                className="inline-flex items-center justify-center px-8 sm:px-11 py-3 rounded-full bg-gradient-to-r from-[#133814] via-[#1e4e23] to-[#307c40] hover:brightness-110 text-white font-medium sm:font-semibold text-sm sm:text-base border border-[#b6b8b6] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
