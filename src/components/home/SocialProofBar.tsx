"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ArrowRight, Sparkles } from "lucide-react";

interface CategoryTile {
  title: string;
  count: string;
  category: "skin" | "gut" | "nutrition" | "fitness";
  gradient: string;
  href: string;
}

const CATEGORY_TILES: CategoryTile[] = [
  {
    title: "Skin",
    count: "120+ prompts",
    category: "skin",
    gradient: "linear-gradient(145deg, #F2C9BC, #E8A78F)",
    href: "/library?cat=skin",
  },
  {
    title: "Gut health",
    count: "100+ prompts",
    category: "gut",
    gradient: "linear-gradient(145deg, #C5DFA9, #7FA45A)",
    href: "/library?cat=gut",
  },
  {
    title: "Nutrition",
    count: "150+ prompts",
    category: "nutrition",
    gradient: "linear-gradient(145deg, #F5E19B, #DDAE46)",
    href: "/library?cat=nutrition",
  },
  {
    title: "Fitness",
    count: "130+ prompts",
    category: "fitness",
    gradient: "linear-gradient(145deg, #A5DCCF, #4C9B8E)",
    href: "/library?cat=fitness",
  },
];

/**
 * Botanical Leaf Branch SVG component matching the legacy art illustration from home.html
 */
const LeafShape = ({ transform }: { transform: string }) => (
  <path
    d="M0 0C9-14 9-36 0-54C-9-36-9-14 0 0Z"
    transform={transform}
    fill="currentColor"
  />
);

const BranchGraphic: React.FC<{ className?: string }> = ({ className = "" }) => (
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
    <LeafShape transform="translate(64 196) rotate(-62)" />
    <LeafShape transform="translate(62 190) rotate(58)" />
    <LeafShape transform="translate(64 150) rotate(-58)" />
    <LeafShape transform="translate(66 142) rotate(60)" />
    <LeafShape transform="translate(70 104) rotate(-54)" />
    <LeafShape transform="translate(72 96) rotate(56)" />
    <LeafShape transform="translate(78 58) rotate(-46)" />
    <LeafShape transform="translate(80 50) rotate(48)" />
    <LeafShape transform="translate(86 10) rotate(0)" />
  </svg>
);

export const SocialProofBar: React.FC = () => {
  return (
    <section className="bg-[#F3F1EA] text-[#0B2C13] py-10 sm:py-14 lg:py-16 border-y border-[#DAD6C8] relative">
      <Container className="space-y-6 sm:space-y-8">
        {/* Subtle section label */}
        <div className="flex items-center justify-between text-xs font-semibold text-[#53665F]">
          <span className="uppercase tracking-wider flex items-center gap-1.5 text-[#1E7A46]">
            Explore by Clinical Category
          </span>
          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 text-xs text-[#53665F] hover:text-[#0B2C13] font-medium transition-colors group"
          >
            <span>Browse all 500+ prompts</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 4 Category Prompt Cards matching reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E7A46] rounded-xl sm:rounded-2xl transition-all"
            >
              {/* Art Tile */}
              <div
                className="w-full aspect-[16/10] sm:aspect-[16/9.5] min-h-[115px] sm:min-h-[140px] rounded-xl sm:rounded-2xl relative overflow-hidden shadow-xs transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_32px_-10px_rgba(11,44,19,0.18)] border border-black/5"
                style={{ background: tile.gradient }}
              >
                {/* Branch Vector Illustration */}
                <BranchGraphic className="absolute -right-3.5 sm:-right-4 -bottom-5 sm:-bottom-7 w-[115px] sm:w-[130px] h-auto text-white/65 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1" />
              </div>

              {/* Title & Count */}
              <div className="pt-3 px-0.5">
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#0B2C13] tracking-tight leading-snug group-hover:text-[#1E7A46] transition-colors">
                  {tile.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#53665F] font-normal mt-0.5">
                  {tile.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
