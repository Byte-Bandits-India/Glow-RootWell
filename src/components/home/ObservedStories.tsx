"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";

export const ObservedStories: React.FC = () => {
  return (
    <section className="relative text-[#0B2C13] bg-[#F5F3FB] bg-[linear-gradient(90deg,rgba(245,243,251,1)_0%,rgba(238,237,242,1)_49%,rgba(249,249,251,1)_74%)] flex items-center lg:min-h-[580px] xl:min-h-[640px] 2xl:min-h-[680px] border-b border-[#E1E5DA] overflow-hidden">
      {/* Desktop seamless studio background photo - matches background gradient and feathers edges */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full max-w-[1440px] xl:max-w-[1536px] 2xl:max-w-[1600px] mx-auto [mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
          <Image
            src="/girl.webp"
            alt="Clinical wellness expert"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1600px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <Container className="max-w-[1240px] xl:max-w-[1280px] w-full relative z-10">
        {/* Desktop Layout (lg screens and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-stretch min-h-[440px] xl:min-h-[480px]">
          {/* Left Column: Heading & "For coaches" */}
          <div className="col-span-4 flex flex-col justify-between py-1">
            <div>
              <h2 className="font-heading text-3xl lg:text-[40px] xl:text-[44px] font-normal tracking-tight text-[#0B2C13] leading-[1.12]">
                Two paths, one<br /> transformation.
              </h2>
            </div>

            <div className="space-y-1.5 max-w-[300px] pt-8">
              <h3 className="font-heading text-lg xl:text-xl font-medium text-[#D9532F]">
                For coaches
              </h3>
              <p className="text-sm xl:text-base text-[#526454] leading-relaxed">
                Client-ready templates and scripts, so every plan feels personal without the extra hours.
              </p>
            </div>
          </div>

          {/* Center Column: Symmetrical 4-column spacer framing the centered doctor */}
          <div className="col-span-4 pointer-events-none" aria-hidden="true" />

          {/* Right Column: "For you", Star Icon, "In about a minute" */}
          <div className="col-span-4 pl-6 xl:pl-10 flex flex-col justify-between py-1">
            {/* Top Item: For you (aligned with Two paths headline) */}
            <div className="space-y-1.5 max-w-[290px]">
              <h3 className="font-heading text-lg xl:text-xl font-medium text-[#0B2C13]">
                For you
              </h3>
              <p className="text-sm xl:text-base text-[#526454] leading-relaxed">
                Plans that fit your skin, gut and goals, not a generic chart.
              </p>
            </div>

            {/* Center 4-Point Sparkle Star SVG */}
            <div className="py-2">
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7 text-[#1E7A66] stroke-current fill-none stroke-[2] stroke-linejoin-round"
                aria-hidden="true"
              >
                <path d="M20 3c1.5 9 8 15.5 17 17-9 1.5-15.500 8-17 17-1.500-9-8-15.500-17-17 9-1.500 15.500-8 17-17z" />
              </svg>
            </div>

            {/* Bottom Item: In about a minute (aligned with For coaches) */}
            <div className="space-y-1.5 max-w-[290px]">
              <h3 className="font-heading text-lg xl:text-xl font-medium text-[#0B2C13]">
                In about a minute
              </h3>
              <p className="text-sm xl:text-base text-[#526454] leading-relaxed">
                One prompt, one tailored plan. No hours of search results.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout (< lg screens) */}
        <div className="lg:hidden flex flex-col space-y-6 px-4 sm:space-y-8">
          {/* Headline */}
          <div className="text-left">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal tracking-tight text-[#0B2C13] leading-[1.15]">
              Two paths, one transformation.
            </h2>
          </div>

          {/* Centered Doctor Portrait Card for Mobile */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] mx-auto rounded-2xl overflow-hidden shadow-sm border border-[#D5D3DC] bg-white">
            <Image
              src="/girl.webp"
              alt="Clinical wellness expert"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 340px, 420px"
            />
          </div>

          {/* Mobile Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: For you & In about a minute */}
            <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-[#D5D3DC] space-y-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-[#0B2C13]">
                    For you
                  </h3>
                  <p className="text-sm text-[#526454] leading-relaxed">
                    Plans that fit your skin, gut and goals, not a generic chart.
                  </p>
                </div>
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6 text-[#1E7A66] stroke-current fill-none stroke-[2] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M20 3c1.5 9 8 15.5 17 17-9 1.5-15.500 8-17 17-1.500-9-8-15.500-17-17 9-1.500 15.500-8 17-17z" />
                </svg>
              </div>

              <div className="pt-3 border-t border-[#E1E5DA] space-y-1">
                <h4 className="font-heading text-base font-medium text-[#0B2C13]">
                  In about a minute
                </h4>
                <p className="text-xs sm:text-sm text-[#526454] leading-relaxed">
                  One prompt, one tailored plan. No hours of search results.
                </p>
              </div>
            </div>

            {/* Card 2: For coaches */}
            <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-[#D5D3DC] flex flex-col justify-between space-y-3 shadow-sm">
              <div className="space-y-1">
                <h3 className="font-heading text-lg sm:text-xl font-medium text-[#D9532F]">
                  For coaches
                </h3>
                <p className="text-sm text-[#526454] leading-relaxed">
                  Client-ready templates and scripts, so every plan feels personal without the extra hours.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E1E5DA]">
                <span className="inline-flex items-center text-xs font-medium text-[#D9532F]">
                  Templates, scripts & client frameworks
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
