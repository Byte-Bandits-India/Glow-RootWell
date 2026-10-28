"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-[var(--color-border)] last:border-b-0", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    iconStyle?: "chevron" | "plus";
  }
>(({ className, children, iconStyle = "plus", ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 font-heading text-lg sm:text-xl font-medium text-[var(--color-text-primary)] transition-all hover:text-[var(--color-accent)] text-left cursor-pointer group",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {iconStyle === "plus" ? (
        <span className="w-8 h-8 rounded-full bg-[var(--color-background)] text-[var(--color-text-primary)] flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[var(--color-secondary)]">
          <Plus className="w-4 h-4 transition-transform duration-300" />
        </span>
      ) : (
        <ChevronDown className="h-5 w-5 shrink-0 text-[var(--color-text-secondary)] transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm sm:text-base text-[var(--color-text-secondary)] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down leading-relaxed"
    {...props}
  >
    <div className={cn("pb-5 pt-1 pr-6", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
