"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { ArrowRight } from "lucide-react";

interface PainPoint {
  id: number;
  label: string;
  hoverTitle: {
    line1: string;
    line2: string;
  };
}

const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    label: "Conflicting advice online",
    hoverTitle: {
      line1: "Cut through conflicting",
      line2: "advice online.",
    },
  },
  {
    id: 2,
    label: "₹2,000+ for a single consultation",
    hoverTitle: {
      line1: "Save ₹2,000+ on every",
      line2: "consultation.",
    },
  },
  {
    id: 3,
    label: "No time to research",
    hoverTitle: {
      line1: "Personal wellness plans",
      line2: "in 60 seconds.",
    },
  },
];

const AI_TOOLS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "DeepSeek",
  "Copilot",
  "Perplexity",
  "Grok",
  "Mistral",
  "Llama 3",
  "Meta AI",
  "Qwen",
];

const DEFAULT_TITLE = {
  line1: "Vague questions get",
  line2: "vague answers.",
};

const SECTION_HOVER_TITLE = {
  line1: "Structured prompts get",
  line2: "expert answers.",
};

export const MissionStatement: React.FC = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  // Determine active title based on hover state
  let activeTitle = DEFAULT_TITLE;
  let isTransformed = false;

  if (hoveredItemId !== null) {
    const point = PAIN_POINTS.find((p) => p.id === hoveredItemId);
    if (point) {
      activeTitle = point.hoverTitle;
      isTransformed = true;
    }
  } else if (isSectionHovered) {
    activeTitle = SECTION_HOVER_TITLE;
    isTransformed = true;
  }

  const activeKey = `${activeTitle.line1}-${activeTitle.line2}`;

  return (
    <section
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => {
        setIsSectionHovered(false);
        setHoveredItemId(null);
      }}
      className="bg-[#0B2C13] text-white py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t border-white/10 transition-colors duration-500"
    >
      {/* Embedded self-contained animation styles for guaranteed fluid transitions */}
      <style>{`
        @keyframes textSlideReveal {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.97);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        .anim-line-primary {
          display: block;
          animation: textSlideReveal 0.44s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-line-secondary {
          display: block;
          animation: textSlideReveal 0.44s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
        }
      `}</style>

      <Container>
        {/* Top "Works with" strip with expanded AI models */}
        <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-7 lg:gap-x-8 gap-y-2.5 text-sm sm:text-base mb-12 sm:mb-16 lg:mb-20 select-none">
          <span className="text-white/55 font-normal shrink-0">Works with</span>
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 lg:gap-x-7 gap-y-2 font-semibold text-white/90">
            {AI_TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded-md hover:bg-white/10 hover:text-[var(--color-accent)] transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Headline with smooth animated transition when text changes */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[140px] sm:min-h-[180px] lg:min-h-[220px]">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-white leading-[1.08]">
              <div key={activeKey} className="space-y-1">
                <span className="anim-line-primary">
                  {activeTitle.line1}
                </span>
                <span
                  className={`anim-line-secondary ${
                    isTransformed ? "text-[var(--color-accent)] font-medium" : "text-white"
                  }`}
                >
                  {activeTitle.line2}
                </span>
              </div>
            </h2>
          </div>

          {/* Right Column: Paragraph and Divider List */}
          <div className="lg:col-span-5 pt-2">
            <p className="text-sm sm:text-base lg:text-[17px] text-[#A3B8B0] leading-relaxed max-w-lg mb-8 sm:mb-10">
              AI already knows a lot about skin, gut and nutrition. A well-built prompt is how you get that knowledge shaped around you.
            </p>

            {/* List with Dividers */}
            <ul className="list-none m-0 p-0 border-b border-white/15">
              {PAIN_POINTS.map((item) => {
                const isItemActive = hoveredItemId === item.id;
                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                    className={`border-t border-white/15 py-4 px-2 -mx-2 transition-all duration-200 cursor-pointer flex items-center justify-between text-sm sm:text-base font-medium rounded-lg ${
                      isItemActive
                        ? "text-[var(--color-accent)] bg-white/5 pl-3"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        isItemActive
                          ? "opacity-100 translate-x-0 text-[var(--color-accent)]"
                          : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
