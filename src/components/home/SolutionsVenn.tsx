"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Droplets, Leaf } from "lucide-react";

interface SlideData {
  title: string;
  points: string[];
  cardTitle: string;
  cardSubtitle: string;
  gradient: [string, string];
}

const SLIDES: SlideData[] = [
  {
    title: "Written by experts, ready to paste",
    points: [
      "Built on real wellness frameworks",
      "Copy, paste and get clear guidance",
      "No guesswork or trial and error",
    ],
    cardTitle: "Expert-crafted",
    cardSubtitle: "Skin, gut, nutrition, fitness",
    gradient: ["#BFE3CF", "#8FD0B5"],
  },
  {
    title: "Smarter answers from the same AI",
    points: [
      "Structured prompts ask about you first",
      "Pull out detail a vague question cannot",
      "Work in ChatGPT, Claude, Gemini and more",
    ],
    cardTitle: "Deeper answers",
    cardSubtitle: "Shaped around your details",
    gradient: ["#E9E2B4", "#D6C77C"],
  },
  {
    title: "From question to plan in 60 seconds",
    points: [
      "One prompt, one tailored plan",
      "For skin, gut, diet or fitness goals",
      "Skip hours of research",
    ],
    cardTitle: "Ready in a minute",
    cardSubtitle: "No lengthy searching",
    gradient: ["#F2D5C9", "#E5AE9B"],
  },
  {
    title: "Made with your health in mind",
    points: [
      "Every prompt reviewed for accuracy",
      "Helps you prepare for doctor visits",
      "Support for you, not a replacement for care",
    ],
    cardTitle: "Reviewed prompts",
    cardSubtitle: "Safe, careful guidance",
    gradient: ["#C4DCE6", "#8FB8CB"],
  },
];

/**
 * Botanical Leaf Branch SVG matching the legacy home.html illustration
 */
const BotanicalLeafGraphic: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M60 240C58 180 66 110 86 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(64 196) rotate(-62)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(62 190) rotate(58)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(64 150) rotate(-58)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(66 142) rotate(60)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(70 104) rotate(-54)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(72 96) rotate(56)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(78 58) rotate(-46)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(80 50) rotate(48)" fill="currentColor" />
    <path d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z" transform="translate(86 10) rotate(0)" fill="currentColor" />
  </svg>
);

export const SolutionsVenn: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section className="bg-[#FAF8F5] text-[#0B2C13] py-16 sm:py-20 lg:py-28 border-b border-[#E1E5DA]">
      <Container className="max-w-[1240px] xl:max-w-[1280px]">
        {/* Header with Title, Description, and Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div className="max-w-3xl xl:max-w-4xl space-y-3">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-[#0B2C13] leading-[1.08]">
              What if AI could be your personal wellness expert?
            </h2>
            <p className="text-sm sm:text-base lg:text-[17px] text-[#526454] leading-relaxed max-w-xl">
              With the right prompts, ChatGPT becomes your skin advisor, gut coach, nutritionist and trainer, all in one.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#DAD6C8] bg-white text-[#0B2C13] hover:bg-black/5 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B2C13] text-white hover:bg-[#102B18] active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Card Layout matching home.html (.exg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left Card (.ex-l): Forest Teal Prompt Plan Summary */}
          <div className="lg:col-span-4 bg-[#1E6B52] text-[#F3F6EF] rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-sm">
            <div className="space-y-4">
              {/* Header row */}
              <div className="flex items-center justify-between font-medium text-sm">
                <span className="flex items-center gap-2 text-white">
                  <Leaf className="w-4 h-4 text-[var(--color-accent)]" />
                  Your prompt plan
                </span>
                <span className="bg-white/20 text-white rounded-full px-3 py-0.5 text-xs font-semibold">
                  Ready
                </span>
              </div>

              <hr className="border-0 border-t border-white/20" />

              {/* Big Stat */}
              <div className="pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-5xl sm:text-6xl font-medium tracking-tight text-white leading-none">
                    60
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 font-normal">
                    seconds to a tailored plan
                  </span>
                </div>
              </div>

              {/* White Pill 1: Skin routine */}
              <div className="bg-white text-[#0E2A27] rounded-xl p-3.5 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#D9E8D0] flex items-center justify-center text-[#2C541B] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-[#0E2A27] leading-snug">
                    Skin routine
                  </span>
                  <small className="text-xs text-[#526454] block mt-0.5">
                    Fits your skin and climate
                  </small>
                </div>
              </div>

              {/* White Pill 2: Gut plan */}
              <div className="bg-white text-[#0E2A27] rounded-xl p-3.5 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#D9E8D0] flex items-center justify-center text-[#2C541B] shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-[#0E2A27] leading-snug">
                    Gut plan
                  </span>
                  <small className="text-xs text-[#526454] block mt-0.5">
                    Meals matched to you
                  </small>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <Link
              href="/#pricing"
              className="bg-[#0B2C13] hover:bg-[#102B18] text-[#F3F6EF] font-semibold py-3.5 px-4 rounded-xl text-center text-sm shadow-md transition-all active:scale-[0.99] mt-2 block"
            >
              Try it free, no risk
            </Link>
          </div>

          {/* Right Card (.ex-r): Sage Green Interactive Carousel Slide */}
          <div className="lg:col-span-8 bg-[#DCE8D2] text-[#0E2A27] rounded-2xl p-6 sm:p-8 lg:p-9 shadow-sm border border-[#C8D7BC] flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch h-full">
              {/* Left Column of Slide: Content & Checkmarks */}
              <div className="flex flex-col justify-between gap-6 py-1">
                <div className="space-y-4">
                  {/* Badge */}
                  <span className="inline-block bg-white/80 text-[#0E2A27] rounded-full px-3 py-1 text-xs font-semibold shadow-2xs">
                    {currentSlide + 1} / {SLIDES.length}
                  </span>

                  {/* Slide Title with smooth key animation */}
                  <h3
                    key={`title-${currentSlide}`}
                    className="font-heading text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight text-[#0E2A27] leading-[1.12] animate-in fade-in duration-300"
                  >
                    {slide.title}
                  </h3>
                </div>

                {/* Checkmark List */}
                <ul
                  key={`list-${currentSlide}`}
                  className="list-none m-0 p-0 space-y-3.5 pt-4 animate-in fade-in duration-300"
                >
                  {slide.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs sm:text-sm md:text-[15px] font-normal text-[#0E2A27]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2C541B] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column of Slide: Pastel Gradient Box with Botanical Branch Illustration */}
              <div
                key={`art-${currentSlide}`}
                className="rounded-2xl overflow-hidden relative min-h-[260px] sm:min-h-[300px] md:min-h-[320px] shadow-xs border border-black/5 flex flex-col justify-end p-4 transition-all duration-300 animate-in fade-in"
                style={{
                  background: `linear-gradient(160deg, ${slide.gradient[0]}, ${slide.gradient[1]})`,
                }}
              >
                {/* Botanical Vector Graphic */}
                <BotanicalLeafGraphic className="absolute -left-[14%] -bottom-[8%] w-[135%] h-auto text-[#2F4A1F]/80" />

                {/* Floating Bottom Card (.exc) */}
                <div className="relative z-10 bg-white text-[#0E2A27] rounded-xl p-3.5 sm:p-4 shadow-sm border border-black/5">
                  <span className="block text-sm sm:text-base font-semibold text-[#0E2A27] leading-tight">
                    {slide.cardTitle}
                  </span>
                  <small className="text-xs sm:text-sm text-[#526454] block mt-0.5">
                    {slide.cardSubtitle}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
