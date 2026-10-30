"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export interface TestimonialCardItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  date: string;
  certificateUrl?: string;
  isVideo?: boolean;
  photoUrl?: string;
  videoUrl?: string;
}

// Verified clinical and client testimonials sourced from verified records in Data.MD
const TESTIMONIAL_CARDS: TestimonialCardItem[] = [
  {
    id: "t1",
    name: "Anita R. Shah",
    role: "Blissful Blends · Chennai",
    avatar: "/testimonials/testimonial-thumb-1.png",
    photoUrl: "/testimonials/testimonial-thumb-1.png",
    videoUrl: "/testimonials/videos/testimonial-vid-1.mp4",
    isVideo: true,
    certificateUrl: "/testimonials/7.png",
    quote:
      "My family followed her detox and Gut health plan for 2 months, and very good changes were seen in our health. My thyroid reduced, my sleep improved, and my sugar cravings also reduced. For my husband, his acidity problem and excess weight gradually reduced. My son's immunity has increased. I sincerely recommend her guidelines to everyone.",
    date: "19/02/2026",
  },
  {
    id: "t2",
    name: "Dr. Raina Khatri Tandon",
    role: "CEO, Right2rise · Mumbai",
    avatar: "/doctor.jpg",
    certificateUrl: "/testimonials/2.png",
    quote:
      "Her calm, composed listening and the way she patiently understood me helped me learn how daily structured intake of nutrients in regular food—without additional supplements—is great to add in my routine. I advise and recommend her strongly to all who want a conscious healthy diet and living.",
    date: "19/08/2026",
  },
  {
    id: "t3",
    name: "Aaditya Dash",
    role: "Holistic Health Coach · Healing With Nutrition",
    avatar: "/2person.jpg",
    certificateUrl: "/testimonials/6.png",
    quote:
      "Her deep understanding of the connection between gut health, nutrition, and radiant skin is both insightful and evidence-based. What impressed me the most was her passion for educating people rather than simply offering solutions. She explains the science behind her recommendations and focuses on sustainable lifestyle changes that support long-term skin and overall health.",
    date: "04/08/2026",
  },
  {
    id: "t4",
    name: "Sachien Suresh Paliwal",
    role: "NU Skin · Mumbai",
    avatar: "/3person.jpg",
    certificateUrl: "/testimonials/4.png",
    quote:
      "An excellent nutrition consultant who takes a practical and personalized approach to health and wellness. She understands individual needs, provides clear guidance, and makes healthy living simple and sustainable. Her knowledge, professionalism, and genuine commitment to helping clients achieve their wellness goals make her highly recommended.",
    date: "10/08/2026",
  },
  {
    id: "t5",
    name: "Brig Sushil Bhasin",
    role: "Director, S B Consulting · Mumbai",
    avatar: "/doctor2.jpg",
    certificateUrl: "/testimonials/5.png",
    quote:
      "What I really like about Swathi is that she is not just a nutritionist. She has expertise in sports nutrition as well as derma nutrition, giving her a balanced perspective. She understands the connection between what happens inside the body and what shows up externally in skin and hair. Having understood her approach, I decided to take up her three-month Gut Reset Programme myself.",
    date: "09/08/2026",
  },
  {
    id: "t6",
    name: "Suresh",
    role: "Director, Swaraj Equipment · Chennai",
    avatar: "/4persons.jpg",
    certificateUrl: "/testimonials/3.png",
    quote:
      "I had been struggling with bloating and gastric issues for several years. Despite trying various treatments, I was still looking for a more personalized and sustainable approach. My association with Swathi made a positive difference. She understood my concerns carefully and provided customized nutrition solutions suited to my individual needs and lifestyle.",
    date: "19/08/2026",
  },
  {
    id: "t7",
    name: "Suresh",
    role: "Swaraj Equipment Private Limited · Chennai",
    avatar: "/1person.jpg",
    certificateUrl: "/testimonials/1.png",
    quote:
      "A heartfelt thank you to Swathi for her valuable guidance on nutrition and gut health. She took the time to understand my concerns and provided practical, customized guidance on making better food choices and maintaining a healthier lifestyle. Her approach was simple, informative, and easy to follow. I truly appreciate her knowledge, patience, and dedication.",
    date: "21/08/2026",
  },
];

// Duplicate cards for seamless 100% infinite continuous loop
const MARQUEE_CARDS = [...TESTIMONIAL_CARDS, ...TESTIMONIAL_CARDS];

// Classic Twitter bird icon matching the reference image layout
function TwitterBirdIcon({ className = "w-3.5 h-3.5 text-black" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
    </svg>
  );
}

// 5 gold rating stars
function RatingStars({ color = "text-[#EAB308]" }: { color?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${color}`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export const TestimonialsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<TestimonialCardItem | null>(null);

  // Prevent background scrolling and pause Lenis while modal is open
  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = "hidden";
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.start();
    };
  }, [activeModalItem]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Section
      id="testimonials"
      variant="sage"
      padding="default"
      className="border-t border-[#0B2C13]/10 overflow-hidden relative bg-[#F2F6ED]"
    >
      <Container>
        {/* 1. Header: Left Title + Right "Contact Us" Pill Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight leading-[1.14]">
              <span className="text-[#0B2C13] block">Chosen by 14k+ growing</span>
              <span className="text-[#71717A] block font-semibold">individuals & families worldwide!</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0B2C13] text-white text-xs sm:text-sm font-semibold hover:bg-black active:scale-95 transition-all shadow-sm shrink-0 self-start sm:self-auto"
          >
            Contact Us
          </Link>
        </div>
      </Container>

      {/* 2. Continuous Horizontal Marquee Runway with Left/Right Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Continuous Scrolling Track (Pauses on Hover for Easy Reading / Clicking) */}
        <div
          className={`flex overflow-hidden py-3 ${
            activeModalItem ? "[animation-play-state:paused]" : ""
          }`}
        >
          <div className="animate-marquee-left gap-4 sm:gap-5 items-stretch">
            {MARQUEE_CARDS.map((card, idx) => {
              // Video / Featured Photo Doctor Card (doctor.jpg / doctor2.jpg)
              if (card.isVideo && card.photoUrl) {
                return (
                  <div
                    key={`${card.id}-${idx}`}
                    onClick={() => setActiveModalItem(card)}
                    className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0 h-[310px] sm:h-[330px] relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.07)] cursor-pointer flex flex-col justify-between p-5 select-none transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:-translate-y-1"
                  >
                    {/* Doctor High-Res Photo Background */}
                    <Image
                      src={card.photoUrl}
                      alt={card.name}
                      fill
                      sizes="320px"
                      priority={idx < 4}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for Top/Bottom Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />

                    {/* Top Row: Doctor Name & Role + Twitter Bird in White Squircle */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="space-y-0.5 min-w-0 pr-1">
                        <h3 className="font-bold text-[13px] sm:text-[14px] text-white leading-tight drop-shadow-xs truncate">
                          {card.name}
                        </h3>
                        <p className="text-[11px] text-white/80 font-normal drop-shadow-xs truncate">
                          {card.role}
                        </p>
                      </div>

                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-black shadow-xs shrink-0">
                        <TwitterBirdIcon className="w-3 h-3 text-black" />
                      </div>
                    </div>

                    {/* Center Circular White Play Button */}
                    <div className="relative z-10 my-auto flex items-center justify-center py-2">
                      <div className="w-11 h-11 rounded-full bg-white text-black shadow-lg flex items-center justify-center group-hover:scale-115 active:scale-95 transition-transform duration-200">
                        <svg
                          className="w-4 h-4 fill-current text-black ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Row: 5 Gold Stars + Date */}
                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/20">
                      <RatingStars />
                      <span className="text-[11px] font-medium text-white/90">
                        {card.date}
                      </span>
                    </div>
                  </div>
                );
              }

              // Standard White Quote Card
              return (
                <div
                  key={`${card.id}-${idx}`}
                  onClick={() => setActiveModalItem(card)}
                  className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0 h-[310px] sm:h-[330px] bg-white rounded-2xl sm:rounded-3xl p-5 shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-100/90 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)] hover:-translate-y-1 select-none cursor-pointer"
                >
                  {/* Top Row: Avatar + Name & Role + Twitter Bird Icon */}
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 min-w-0 pr-1">
                        <h3 className="font-bold text-[13px] sm:text-[14px] text-gray-900 leading-tight truncate">
                          {card.name}
                        </h3>
                        <p className="text-[11px] text-gray-500 font-normal truncate">
                          {card.role}
                        </p>
                      </div>
                    </div>

                    <div className="text-gray-700 pt-0.5 shrink-0">
                      <TwitterBirdIcon className="w-3.5 h-3.5 text-black" />
                    </div>
                  </div>

                  {/* Middle: Double quoted text */}
                  <div className="my-auto py-2">
                    <p className="text-[12.5px] sm:text-[13px] font-medium text-gray-800 leading-[1.55] line-clamp-4">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Row: 5 Gold Stars + Date */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <RatingStars />
                    <span className="text-[11px] font-medium text-gray-400">
                      {card.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video & Verified Testimonial Spotlight Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            data-lenis-prevent="true"
            className="bg-[#0B2C13] border border-white/10 rounded-3xl overflow-hidden max-w-xl sm:max-w-2xl w-full shadow-2xl relative text-white max-h-[88vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video / Photo Banner for Video Cards */}
            {activeModalItem.isVideo && activeModalItem.photoUrl && (
              <div className="relative h-48 sm:h-56 md:h-64 w-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                {activeModalItem.videoUrl ? (
                  <video
                    src={activeModalItem.videoUrl}
                    poster={activeModalItem.photoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <Image
                      src={activeModalItem.photoUrl}
                      alt={activeModalItem.name}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C13] via-black/45 to-black/30" />

                    {/* Spotlight Indicator */}
                    <div className="relative z-10 text-center px-6 max-w-md">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white text-black shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 fill-current text-black ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-white mb-0.5">
                        {activeModalItem.name} &bull; Clinical Spotlight
                      </h4>
                      <p className="text-xs text-white/70">
                        {activeModalItem.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Testimonial Detailed Record Content */}
            <div
              data-lenis-prevent="true"
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white/10 shrink-0 border border-white/20">
                    <Image
                      src={activeModalItem.avatar}
                      alt={activeModalItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white leading-tight">
                      {activeModalItem.name}
                    </h3>
                    <p className="text-xs text-white/70 font-normal">
                      {activeModalItem.role}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <RatingStars />
                  <span className="text-[11px] font-medium text-white/60 block mt-1">
                    {activeModalItem.date}
                  </span>
                </div>
              </div>

              {/* Full Testimonial Quote */}
              <blockquote className="text-xs sm:text-sm md:text-[15px] text-white/90 leading-relaxed font-normal italic">
                &ldquo;{activeModalItem.quote}&rdquo;
              </blockquote>

              {/* Verified Certificate Letter Link */}
              {activeModalItem.certificateUrl && (
                <div className="pt-2">
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-3.5">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="text-xs text-white/80 font-medium">
                        Verified Member Testimonial Record
                      </span>
                    </div>
                    <a
                      href={activeModalItem.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      View Original Letter &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
