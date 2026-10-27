"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export const HeroReference: React.FC = () => {
  return (
    <div className="bg-[#0B2C13] text-white pt-1.5 sm:pt-3 pb-2 sm:pb-3 relative min-h-[100dvh] 4xl:min-h-0 4xl:h-auto 4xl:py-24 flex flex-col justify-between overflow-x-clip">
      {/* Top Navigation Bar matching home.html content */}
      <Container className="shrink-0">
        <nav className="flex items-center justify-between py-1.5 sm:py-2.5 border-b border-white/10 text-sm">
          {/* Logo with teal leaf circle */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-accent)] text-[#0B2C13] flex items-center justify-center font-bold shadow-sm">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 22c0-6 1-10 8-16-1 7-3 11-8 16zM12 22C12 15 9 11 3 8c0 6 3 10 9 14z" />
              </svg>
            </span>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white">
              Rootwell
            </span>
          </Link>

          {/* Desktop Links from home.html */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-xs lg:text-sm font-medium text-white/85">
            <Link href="/library" className="hover:text-white transition-colors">
              Library
            </Link>
            <Link href="/#how" className="hover:text-white transition-colors">
              How it works
            </Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/library"
              className="hidden sm:inline-flex text-xs sm:text-sm font-semibold text-white/80 hover:text-white px-2 py-1.5 transition-colors"
            >
              See the library
            </Link>
            <Button
              href="/#pricing"
              variant="outline"
              size="sm"
              className="bg-white text-[#0B2C13] border-white hover:bg-white/90 font-semibold text-xs py-1.5 px-3 sm:py-2 sm:px-4"
            >
              Get instant access
            </Button>
          </div>
        </nav>
      </Container>

      {/* Main Hero Split Content - Bold and prominent on 100% desktop screens */}
      <Container className="my-auto flex-1 flex items-center py-4 sm:py-6 lg:py-8 max-w-[1240px] xl:max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Text & CTAs & Stats */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-left w-full">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] xl:text-[68px] font-medium tracking-tight text-white leading-[1.04]">
              Make any AI answer like a wellness expert.
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-secondary)]/90 max-w-xl leading-relaxed">
              500+ prompts for skin, gut, nutrition and fitness. Paste one into ChatGPT, Claude or Gemini and get advice shaped around you in under a minute.
            </p>

            {/* Pill Buttons Row - Side-by-side on single line without wrapping */}
            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Button
                href="/#pricing"
                variant="accent"
                size="md"
                className="bg-[var(--color-accent)] text-[#0B2C13] font-semibold text-sm sm:text-base py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:brightness-105 active:scale-[0.98] transition-all shrink-0 border-0"
                rightIcon={<ArrowRight className="w-4 h-4 text-[#0B2C13]" />}
              >
                Get instant access
              </Button>

              <Button
                href="/library"
                variant="outline"
                size="md"
                className="bg-white/5 hover:bg-white/15 text-white border-white/25 font-medium text-sm sm:text-base py-3.5 px-6 sm:py-4 sm:px-8 rounded-full active:scale-[0.98] transition-all shrink-0"
              >
                See the library
              </Button>
            </div>

            {/* Verified Stats Strip - 3 columns aligned cleanly */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  500+
                </span>
                <span className="text-white/75 text-xs sm:text-sm lg:text-base mt-1 block">
                  Tested prompts
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  60s
                </span>
                <span className="text-white/75 text-xs sm:text-sm lg:text-base mt-1 block">
                  To a personal plan
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  7 days
                </span>
                <span className="text-white/75 text-xs sm:text-sm lg:text-base mt-1 block">
                  Money-back promise
                </span>
              </div>
            </div>
          </div>

          {/* Right Circular Orb UI with Image & Floating Chips */}
          <div className="lg:col-span-5 flex items-center justify-center py-4 w-full">
            {/* Circular Orb Container - full generous 460-500px width on desktop */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-[510px] aspect-square mx-auto">
              {/* Conic Gradient Rim Orb */}
              <div className="absolute inset-[6%_3%_3%_8%] rounded-full bg-[conic-gradient(from_210deg,#8FE3D0,#C7D98A,#E9C86A,#8FE3D0)] p-[4px] sm:p-[5.5px] lg:p-[7px] shadow-[0_24px_65px_-15px_rgba(0,0,0,0.65)]">
                {/* Inner Circular Image Frame with subtle white border */}
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white/70 bg-[#14331C]">
                  <Image
                    src="/woman-with-long-hair.jpg"
                    alt="Rootwell wellness member"
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 510px"
                    className="object-cover object-center"
                  />
                  {/* Subtle warm tint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2C13]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Chip 1: Gut-friendly meal plan (Top-Right) */}
              <div className="absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 top-[3%] sm:top-[5%] z-20 bg-white text-[#0E2A27] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 lg:p-4 shadow-[0_18px_40px_-12px_rgba(14,42,39,0.38)] border border-gray-100 flex items-center gap-2.5 sm:gap-3.5 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-[#C9E6B4] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 stroke-[#0E2A27] fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
                    <path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs sm:text-sm lg:text-base font-bold text-[#0E2A27] block leading-tight">
                    Gut-friendly meal plan
                  </span>
                  <small className="text-[10px] sm:text-xs lg:text-[13px] text-[#5B6C66] block mt-0.5">
                    Ready in 40 seconds
                  </small>
                </div>
              </div>

              {/* Chip 2: Skin barrier routine (Middle-Left) */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-8 top-[28%] sm:top-[30%] z-20 bg-white text-[#0E2A27] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 lg:p-4 shadow-[0_18px_40px_-12px_rgba(14,42,39,0.38)] border border-gray-100 flex items-center gap-2.5 sm:gap-3.5 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-[#F3D3CA] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 stroke-[#0E2A27] fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs sm:text-sm lg:text-base font-bold text-[#0E2A27] block leading-tight">
                    Skin barrier routine
                  </span>
                  <small className="text-[10px] sm:text-xs lg:text-[13px] text-[#5B6C66] block mt-0.5">
                    Fits your climate
                  </small>
                </div>
              </div>

              {/* Foreground Dark Prompt Card (Bottom-Left) */}
              <div className="absolute left-[0%] sm:left-[2%] bottom-[0%] sm:bottom-[1%] z-30 max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] bg-[#0E2A27]/95 backdrop-blur-md text-[#EAF3EC] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 lg:p-4.5 text-xs sm:text-sm lg:text-[15px] leading-snug shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] border border-white/15">
                <p className="text-white/95">
                  <span className="text-[var(--color-accent)] font-bold mr-1.5">Prompt</span>
                  Act as a skincare coach. Build a gentle 4-week routine…
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
