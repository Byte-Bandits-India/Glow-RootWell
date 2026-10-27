"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/siteData";
import { Plus } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div key={idx} className="py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left gap-4 font-heading text-lg sm:text-xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
            >
              <span>{faq.question}</span>
              <span
                className={`w-8 h-8 rounded-full bg-[var(--color-background)] text-[var(--color-text-primary)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-45 bg-[var(--color-secondary)]" : ""
                }`}
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="pt-3 pr-8 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
