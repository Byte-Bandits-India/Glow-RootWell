"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";

export const ObservedStories: React.FC = () => {
  return (
    <section className="relative text-[#0B2C13] bg-[#EEEDF3] flex items-center pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14 min-h-[520px] lg:min-h-[580px] border-b border-[#E1E5DA] overflow-hidden">
      {/* Full-width seamless studio background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/doctor-seamless-bg.jpg"
          alt="Clinical wellness expert"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Subtle readability wash for small mobile screens only */}
      <div className="absolute inset-0 bg-white/75 sm:bg-white/50 lg:hidden pointer-events-none z-[1]" />

      <Container className="max-w-[1240px] xl:max-w-[1280px] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-stretch min-h-[360px] lg:min-h-[400px]">
          {/* Left Column: Heading & "For coaches" */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between py-1">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-normal tracking-tight text-[#0B2C13] leading-[1.12]">
                Two paths, one<br className="hidden sm:inline" /> transformation.
              </h2>
            </div>

            <div className="space-y-1.5 max-w-[300px] pt-6 lg:pt-8">
              <h3 className="font-heading text-lg sm:text-xl font-medium text-[#D9532F]">
                For coaches
              </h3>
              <p className="text-sm sm:text-base text-[#526454] leading-relaxed">
                Client-ready templates and scripts, so every plan feels personal without the extra hours.
              </p>
            </div>
          </div>

          {/* Center Column: Symmetrical 4-column spacer framing the centered doctor */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4 pointer-events-none" aria-hidden="true" />

          {/* Right Column: "For you", Star Icon, "In about a minute" */}
          <div className="lg:col-span-4 xl:col-span-4 lg:pl-6 xl:pl-10 flex flex-col justify-between py-1">
            {/* Top Item: For you (aligned with Two paths headline) */}
            <div className="space-y-1.5 max-w-[290px]">
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
                className="w-7 h-7 text-[#1E7A66] stroke-current fill-none stroke-[2] stroke-linejoin-round"
                aria-hidden="true"
              >
                <path d="M20 3c1.5 9 8 15.5 17 17-9 1.5-15.500 8-17 17-1.500-9-8-15.500-17-17 9-1.500 15.500-8 17-17z" />
              </svg>
            </div>

            {/* Bottom Item: In about a minute (aligned with For coaches) */}
            <div className="space-y-1.5 max-w-[290px]">
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
