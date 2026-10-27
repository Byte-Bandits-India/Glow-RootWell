"use client";

import React, { useState } from "react";
import { PromptItem } from "@/data/promptsData";
import { Modal } from "../ui/Modal";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Copy,
  Check,
  Lock,
  Sparkles,
  ExternalLink,
  Clock,
  Layers,
} from "lucide-react";

export interface PromptModalProps {
  prompt: PromptItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({
  prompt,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!prompt) return null;

  const isFree = prompt.bundle === "free";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Please select and copy the text manually.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="lg">
      <div className="space-y-6">
        {/* Badges & Meta */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-2">
            <Badge variant={prompt.category} />
            <Badge variant={prompt.bundle} />
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {prompt.duration}
            </span>
            <span>·</span>
            <span>Works with all AI</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] leading-snug">
            {prompt.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
            {prompt.description}
          </p>
        </div>

        {/* Prompt Container */}
        <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#E6E2D6] border-b border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              Engineered Prompt Template
            </span>
            <span>Role: {prompt.role}</span>
          </div>

          <div
            className={`p-5 text-sm font-mono whitespace-pre-wrap leading-relaxed text-[var(--color-text-primary)] transition-all ${
              !isFree ? "max-h-60 overflow-hidden select-none filter blur-[4px]" : "max-h-[360px] overflow-y-auto"
            }`}
          >
            {prompt.promptText}
          </div>

          {/* Locked State Overlay */}
          {!isFree && (
            <div className="absolute inset-0 bg-[#0B2C13]/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="w-12 h-12 rounded-full bg-[rgba(16,185,130,0.2)] text-[var(--color-accent)] flex items-center justify-center mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-1">
                {prompt.bundle === "starter"
                  ? "Included in Starter & Pro Packs"
                  : "Exclusive to Pro Library"}
              </h3>
              <p className="text-xs text-[var(--color-secondary)] max-w-sm mb-4 leading-relaxed">
                Unlock 500+ structured prompts for skin, gut, macros, and fitness with one-time lifetime access.
              </p>
              <Button
                href="/#pricing"
                variant="accent"
                size="sm"
                onClick={onClose}
              >
                {prompt.bundle === "starter"
                  ? "Unlock with Starter (₹199)"
                  : "Unlock Full Pro Library (₹1,999)"}
              </Button>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {isFree ? (
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant={copied ? "accent" : "primary"}
                onClick={handleCopy}
                leftIcon={
                  copied ? (
                    <Check className="w-4 h-4 text-[var(--color-primary)]" />
                  ) : (
                    <Copy className="w-4 h-4 text-white" />
                  )
                }
              >
                {copied ? "Copied to Clipboard!" : "Copy Full Prompt"}
              </Button>

              <Button
                href="https://chatgpt.com"
                isExternal
                variant="outline"
                size="md"
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Open in ChatGPT
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <Layers className="w-4 h-4 text-[var(--color-accent)]" />
              <span>Includes lifetime prompt updates & WhatsApp community</span>
            </div>
          )}

          <Button variant="ghost" size="sm" onClick={onClose} className="self-end sm:self-auto">
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};
