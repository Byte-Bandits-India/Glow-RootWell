"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";

export const ObservedStories: React.FC = () => {
  return (
    <section className="relative text-[#0B2C13] min-h-[85vh] lg:h-[90dvh] lg:min-h-[640px] flex items-center py-10 sm:py-12 lg:py-0 border-b border-[#E1E5DA] overflow-hidden">
      {/* Background Doctor Photo - pinned to top so head is never cut off */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/young-woman-doctor-white.jpg"
          alt="Clinical wellness expert"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "54% 0%" }}
        />
      </div>

      {/* Subtle readability wash for small mobile screens only */}
      <div className="absolute inset-0 bg-white/70 sm:bg-white/40 lg:hidden pointer-events-none z-[1]" />

      <Container className="max-w-[1240px] xl:max-w-[1280px] w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center min-h-[460px] lg:min-h-[520px]">
          {/* Left Column: Heading & "For coaches" */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-0 lg:min-h-[440px] xl:min-h-[480px] space-y-8 lg:space-y-0 py-2">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[62px] font-normal tracking-tight text-[#0B2C13] leading-[1.06]">
                Two paths, one<br className="hidden sm:inline" /> transformation.
              </h2>
            </div>

            <div className="space-y-2 max-w-sm pt-4 lg:pt-0">
              <h3 className="font-heading text-lg sm:text-xl font-medium text-[#D9532F]">
                For coaches
              </h3>
              <p className="text-sm sm:text-base text-[#526454] leading-relaxed">
                Client-ready templates and scripts, so every plan feels personal without the extra hours.
              </p>
            </div>
          </div>

          {/* Center Column: Transparent spacer allowing doctor background to show through */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-4" aria-hidden="true" />

          {/* Right Column: "For you", Star Icon, "In about a minute" */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between h-full min-h-0 lg:min-h-[440px] xl:min-h-[480px] space-y-6 lg:space-y-0 py-2 lg:ml-auto">
            {/* Top Item: For you */}
            <div className="space-y-2 max-w-xs">
              <h3 className="font-heading text-lg sm:text-xl font-medium text-[#0B2C13]">
                For you
              </h3>
              <p className="text-sm sm:text-base text-[#526454] leading-relaxed">
                Plans that fit your skin, gut and goals, not a generic chart.
              </p>
            </div>

            {/* Center 4-Point Sparkle Star SVG */}
            <div className="py-2">
              <svg
                viewBox="0 0 40 40"
                className="w-8 h-8 text-[#1E7A66] stroke-current fill-none stroke-[2] stroke-linejoin-round"
                aria-hidden="true"
              >
                <path d="M20 3c1.5 9 8 15.5 17 17-9 1.5-15.500 8-17 17-1.500-9-8-15.500-17-17 9-1.500 15.500-8 17-17z" />
              </svg>
            </div>

            {/* Bottom Item: In about a minute */}
            <div className="space-y-2 max-w-xs">
              <h3 className="font-heading text-lg sm:text-xl font-medium text-[#0B2C13]">
                In about a minute
              </h3>
              <p className="text-sm sm:text-base text-[#526454] leading-relaxed">
                One prompt, one tailored plan. No hours of search results.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
