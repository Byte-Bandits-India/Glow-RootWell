"use client";

import React from "react";
import { Section } from "@/components/layout/Section";

interface TestimonialCardData {
  id: string;
  quote: string;
  author: string;
  role: string;
}

// Real verified testimonials extracted directly from legacy-html/testimonial letters
const ROW_ONE: TestimonialCardData[] = [
  {
    id: "r1-1",
    quote:
      "My family followed her detox and gut health plan for 2 months with remarkable changes. Thyroid symptoms reduced, sleep improved, and chronic acidity resolved. I sincerely recommend her guidelines to everyone.",
    author: "Anita R. Shah",
    role: "Blissful Blends · Chennai",
  },
  {
    id: "r1-2",
    quote:
      "Her deep understanding of the connection between gut health, nutrition, and radiant skin is both insightful and evidence-based. She takes the time to explain the science and focuses on sustainable lifestyle changes.",
    author: "Aaditya Dash",
    role: "Holistic Health Coach, Healing With Nutrition",
  },
  {
    id: "r1-3",
    quote:
      "Her calm, structured guidance on daily nutrient intake without needing extra supplements helped me understand how whole food heals. I advise and recommend her strongly to anyone wanting conscious healthy living.",
    author: "Dr. Raina Khatri Tandon",
    role: "CEO, Right2rise · Mumbai",
  },
  {
    id: "r1-4",
    quote:
      "An exceptional nutrition consultant who takes a practical and personalized approach to health and wellness. She makes healthy living simple, sustainable, and easily achievable for busy professional schedules.",
    author: "Sachien Suresh Paliwal",
    role: "Executive, NU Skin · Mumbai",
  },
];

const ROW_TWO: TestimonialCardData[] = [
  {
    id: "r2-1",
    quote:
      "She looks at the root cause, prepares the body, and guides you through the process rather than handing out generic charts. She understands the connection between what happens inside the body and what shows externally.",
    author: "Brig Sushil Bhasin",
    role: "Director, S B Consulting · Mumbai",
  },
  {
    id: "r2-2",
    quote:
      "I had been struggling with bloating and gastric issues for years. Her customized nutrition solutions and patient guidance made an immediate, positive difference to my everyday health and digestion.",
    author: "Suresh",
    role: "Director, Swaraj Equipment · Chennai",
  },
  {
    id: "r2-3",
    quote:
      "A heartfelt thank you for the valuable guidance on nutrition and gut health. Her approach was simple, informative, and easy to follow, making sustainable healthy habits second nature.",
    author: "Suresh K.",
    role: "Corporate Executive, Swaraj Equipment · Chennai",
  },
  {
    id: "r2-4",
    quote:
      "What impressed me the most was her passion for educating people rather than simply offering quick fixes. Clear, practical, and deeply rooted in functional wellness.",
    author: "Aaditya Dash",
    role: "Health & Nutrition Coach · Nabarangpur",
  },
];

function TestimonialCard({ item }: { item: TestimonialCardData }) {
  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#C3D2B5] shadow-[0_4px_20px_rgba(11,44,19,0.05)] hover:shadow-[0_8px_28px_rgba(11,44,19,0.09)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 select-none min-h-[220px]">
      <div>
        {/* Brand Forest quotation mark glyph matching reference layout */}
        <svg
          className="w-7 h-7 text-[#0B2C13] mb-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Clean, readable quote text styled to brand palette */}
        <p className="text-[14px] sm:text-[15px] text-[#0B2C13]/90 leading-[1.65] font-normal">
          {item.quote}
        </p>
      </div>

      {/* Clean Author info without avatar */}
      <div className="pt-5 mt-4 border-t border-[#E1E5DA]">
        <h3 className="font-heading font-semibold text-[14px] sm:text-[15px] text-[#0B2C13] truncate">
          {item.author}
        </h3>
        <p className="text-[12px] text-[#526454] truncate mt-0.5">
          {item.role}
        </p>
      </div>
    </div>
  );
}

export const TestimonialsSection: React.FC = () => {
  // Duplicate arrays to create continuous infinite marquee tracks
  const rowOneItems = [...ROW_ONE, ...ROW_ONE, ...ROW_ONE];
  const rowTwoItems = [...ROW_TWO, ...ROW_TWO, ...ROW_TWO];

  return (
    <Section
      id="testimonials"
      variant="sage"
      padding="default"
      className="border-t border-[#0B2C13]/10 overflow-hidden relative"
    >
      {/* Centered minimalist headline matching reference image */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-10 sm:mb-14">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2C13] tracking-tight leading-[1.15]">
          Words of praise from others
          <br />
          about our presence.
        </h2>
      </div>

      {/* Marquee Container with edge fade masks */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left gap-4 sm:gap-6">
            {rowOneItems.map((item, idx) => (
              <TestimonialCard key={`row1-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right gap-4 sm:gap-6">
            {rowTwoItems.map((item, idx) => (
              <TestimonialCard key={`row2-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
