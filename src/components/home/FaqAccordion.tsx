"use client";

import React from "react";
import { FAQS } from "@/data/siteData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const FaqAccordion: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto border-t border-[var(--color-border)]">
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {FAQS.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger iconStyle="plus">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
