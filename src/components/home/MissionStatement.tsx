"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface PainPoint {
  id: number;
  label: string;
  hoverTitle: {
    line1: string;
    line2: string;
  };
}

interface AiToolItem {
  name: string;
  url: string;
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

const AI_TOOLS: AiToolItem[] = [
  { name: "ChatGPT", url: "https://chatgpt.com" },
  { name: "Claude", url: "https://claude.ai" },
  { name: "Gemini", url: "https://gemini.google.com" },
  { name: "DeepSeek", url: "https://chat.deepseek.com" },
  { name: "Copilot", url: "https://copilot.microsoft.com" },
  { name: "Perplexity", url: "https://www.perplexity.ai" },
  { name: "Grok", url: "https://grok.com" },
  { name: "Mistral", url: "https://chat.mistral.ai" },
  { name: "Llama 3", url: "https://www.llama.com" },
  { name: "Meta AI", url: "https://www.meta.ai" },
  { name: "Qwen", url: "https://chat.qwen.ai" },
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
    <Section
      variant="sage"
      padding="default"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => {
        setIsSectionHovered(false);
        setHoveredItemId(null);
      }}
      className="border-t border-[#0B2C13]/10 relative overflow-hidden transition-colors duration-500"
    >
      {/* Embedded self-contained animation styles for fluid transitions */}
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
        {/* Top "Works with" strip with styled pill tags */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-10 sm:mb-16 lg:mb-20 select-none">
          <span className="text-[#526454] text-xs sm:text-base font-semibold uppercase sm:normal-case tracking-wider sm:tracking-normal shrink-0">
            Works with
          </span>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 font-medium text-xs sm:text-sm lg:text-base text-[#0B2C13]">
            {AI_TOOLS.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${tool.name} website`}
                className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 hover:bg-white text-[#0B2C13] hover:text-black border border-[#0B2C13]/12 hover:border-[#0B2C13]/35 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                <span>{tool.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#0B2C13]/40 group-hover:text-[#0B2C13] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Headline with smooth animated transition when text changes */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[90px] sm:min-h-[160px] lg:min-h-[220px]">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-[#0B2C13] leading-[1.10] sm:leading-[1.08]">
              <div key={activeKey} className="space-y-1">
                <span className="anim-line-primary text-[#0B2C13]">
                  {activeTitle.line1}
                </span>
                <span
                  className={`anim-line-secondary ${
                    isTransformed ? "text-[#0B2C13] font-bold" : "text-[#526454]"
                  }`}
                >
                  {activeTitle.line2}
                </span>
              </div>
            </h2>
          </div>

          {/* Right Column: Paragraph and Divider List */}
          <div className="lg:col-span-5 pt-1 sm:pt-2">
            <p className="text-sm sm:text-base lg:text-[17px] text-[#3B5040] leading-relaxed max-w-lg mb-6 sm:mb-10 font-normal">
              AI already knows a lot about skin, gut and nutrition. A well-built prompt is how you get that knowledge shaped around you.
            </p>

            {/* List with Dividers - Touch tap support for mobile */}
            <ul className="list-none m-0 p-0 border-b border-[#0B2C13]/15">
              {PAIN_POINTS.map((item) => {
                const isItemActive = hoveredItemId === item.id;
                return (
                  <li
                    key={item.id}
                    onClick={() => setHoveredItemId(isItemActive ? null : item.id)}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                    className={`border-t border-[#0B2C13]/15 py-3.5 sm:py-4 px-3 sm:px-2 -mx-2 transition-all duration-200 cursor-pointer flex items-center justify-between text-sm sm:text-base font-medium rounded-xl sm:rounded-lg select-none active:bg-white/80 ${
                      isItemActive
                        ? "text-[#0B2C13] font-bold bg-white/70 shadow-xs pl-4 sm:pl-3"
                        : "text-[#0B2C13]/85 hover:text-[#0B2C13] hover:bg-white/40"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        isItemActive
                          ? "opacity-100 translate-x-0 text-[#0B2C13]"
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
    </Section>
  );
};
