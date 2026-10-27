"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import { ArrowRight } from "lucide-react";

interface CategoryTile {
  title: string;
  count: string;
  category: "skin" | "gut" | "nutrition" | "fitness";
  image: string;
  objectPosition: string;
  href: string;
}

const CATEGORY_TILES: CategoryTile[] = [
  {
    title: "Skin",
    count: "120+ prompts",
    category: "skin",
    image: "/1person.jpg",
    objectPosition: "50% 20%",
    href: "/library?cat=skin",
  },
  {
    title: "Gut health",
    count: "100+ prompts",
    category: "gut",
    image: "/2person.jpg",
    objectPosition: "50% 20%",
    href: "/library?cat=gut",
  },
  {
    title: "Nutrition",
    count: "150+ prompts",
    category: "nutrition",
    image: "/3person.jpg",
    objectPosition: "38% 15%",
    href: "/library?cat=nutrition",
  },
  {
    title: "Fitness",
    count: "130+ prompts",
    category: "fitness",
    image: "/4persons.jpg",
    objectPosition: "65% 15%",
    href: "/library?cat=fitness",
  },
];

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

        {/* 4 Category Prompt Cards with photo backgrounds */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E7A46] rounded-xl sm:rounded-2xl transition-all"
            >
              {/* Art Tile with Person Photo as Background */}
              <div className="w-full aspect-[16/11] sm:aspect-[16/10] min-h-[120px] sm:min-h-[145px] rounded-xl sm:rounded-2xl relative overflow-hidden shadow-xs transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_32px_-10px_rgba(11,44,19,0.18)] border border-black/5 bg-gray-100">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ objectPosition: tile.objectPosition }}
                />
                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
