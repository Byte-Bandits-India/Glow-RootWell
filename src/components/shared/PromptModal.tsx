"use client";

import React, { useState, useEffect } from "react";
import { PromptItem } from "@/data/promptsData";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "../ui/drawer";
import {
  Copy,
  Check,
  Lock,
  Sparkles,
  ExternalLink,
  Clock,
  Layers,
  Loader2,
  X,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { hasAccessToBundle } from "@/lib/plans";
import { initiateCheckout } from "@/lib/checkout";

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
  const [copiedFollowUp, setCopiedFollowUp] = useState(false);
  const [unlockedText, setUnlockedText] = useState<string | null>(null);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const { user, refreshUser } = useAuth();

  const handleCopyFollowUp = () => {
    if (!prompt?.followUpPrompt) return;
    navigator.clipboard.writeText(prompt.followUpPrompt);
    setCopiedFollowUp(true);
    setTimeout(() => setCopiedFollowUp(false), 2000);
  };

  // Determine initial access based on active plan
  const canAccessLocal = prompt
    ? prompt.bundle === "free" || hasAccessToBundle(user?.plan, prompt.bundle)
    : false;

  // Securely verify access with backend when opening a paid prompt
  useEffect(() => {
    if (!isOpen || !prompt) {
      setUnlockedText(null);
      return;
    }

    if (prompt.bundle === "free") {
      setUnlockedText(prompt.promptText);
      return;
    }

    let isMounted = true;
    setIsAuthorizing(true);

    fetch(`/api/prompts/${prompt.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          if (data.hasAccess && data.prompt?.promptText) {
            setUnlockedText(data.prompt.promptText);
          } else {
            setUnlockedText(null);
          }
        }
      })
      .catch(() => {
        if (isMounted) setUnlockedText(null);
      })
      .finally(() => {
        if (isMounted) setIsAuthorizing(false);
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, prompt, user?.plan]);

  // Lock background body scroll and stop Lenis while drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!prompt) return null;

  const isUnlocked = canAccessLocal && unlockedText !== null;

  const handleCopy = async () => {
    const textToCopy = unlockedText || prompt.promptText;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Please select and copy the text manually.");
    }
  };

  const handleDirectUnlock = async () => {
    const targetPlan = prompt.bundle === "starter" ? "starter" : "pro";
    setIsCheckingOut(true);

    await initiateCheckout({
      planId: targetPlan,
      onSuccess: async () => {
        setIsCheckingOut(false);
        await refreshUser();
      },
      onError: (err) => {
        setIsCheckingOut(false);
        alert(err);
      },
      onCancel: () => {
        setIsCheckingOut(false);
      },
    });
  };

  return (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DrawerContent className="fixed inset-x-0 bottom-0 z-50 flex flex-col bg-[#FFFDF9] h-[94dvh] max-h-[94dvh] sm:h-auto sm:max-h-[88vh] sm:max-w-2xl sm:mx-auto rounded-t-[28px] sm:rounded-t-[32px] border-t sm:border-x border-gray-200 shadow-2xl focus:outline-none overflow-hidden">
        {/* Hidden screen reader labels for accessibility */}
        <DrawerTitle className="sr-only">{prompt.title}</DrawerTitle>
        <DrawerDescription className="sr-only">
          {prompt.description}
        </DrawerDescription>

        {/* Clean, airy top header with Badges and Circular Close button */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-gray-100 shrink-0 bg-[#FFFDF9]">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={prompt.category} />
            <Badge variant={prompt.bundle} />
            {isUnlocked && prompt.bundle !== "free" && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Unlocked
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Drawer Body */}
        <div
          data-lenis-prevent="true"
          data-vaul-no-drag="true"
          className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-7 py-4 sm:py-5 space-y-4 sm:space-y-5"
        >
          {/* Title & Purpose */}
          <div className="space-y-1">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#0B2C13] leading-snug">
              {prompt.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {prompt.purpose || prompt.description}
            </p>
          </div>

          {/* Clean Non-wrapping Metadata Strip */}
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium flex-wrap">
            {prompt.subtopic && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100/90 text-gray-700 text-[11px] font-medium">
                {prompt.subtopic}
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100/90 text-gray-700 text-[11px] font-medium whitespace-nowrap">
              <Clock className="w-3 h-3 text-gray-500 shrink-0" />
              {prompt.timeSaved ? `${prompt.timeSaved} saved` : prompt.duration || "5–10 mins"}
            </span>
            {prompt.revenuePotential && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold whitespace-nowrap">
                {prompt.revenuePotential} potential
              </span>
            )}
            {prompt.outputFormat && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100/90 text-gray-600 text-[11px] font-medium whitespace-nowrap">
                Format: {prompt.outputFormat}
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100/90 text-gray-700 text-[11px] font-medium whitespace-nowrap">
              Works with ChatGPT, Claude & Gemini
            </span>
          </div>

          {/* Modern Minimalist Prompt Code Container */}
          <div className="relative rounded-2xl border border-gray-200/90 bg-[#FAF9F5] overflow-hidden shadow-xs">
            {/* Template Header with Role */}
            <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-[#F2EFE9] border-b border-gray-200/80 text-[11px] font-medium">
              <span className="flex items-center gap-1.5 font-semibold text-[#0B2C13] uppercase tracking-wider text-[10px] sm:text-[11px]">
                <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
                Prompt Template
              </span>
              <span className="text-gray-500 text-[11px] font-normal truncate max-w-[170px] sm:max-w-xs">
                {prompt.role || prompt.subtopic}
              </span>
            </div>

            {/* Prompt Code Body */}
            <div
              data-lenis-prevent="true"
              data-vaul-no-drag="true"
              className={`p-3.5 sm:p-5 text-[12.5px] sm:text-[13.5px] font-mono whitespace-pre-wrap leading-relaxed text-gray-800 transition-all ${
                !isUnlocked
                  ? "max-h-56 sm:max-h-64 overflow-hidden select-none filter blur-[4px]"
                  : "min-h-[140px]"
              }`}
            >
              {isUnlocked ? unlockedText : prompt.promptText}
            </div>

            {/* Locked State Overlay */}
            {!isUnlocked && (
              <div className="absolute inset-0 bg-[#0B2C13]/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-5 text-center text-white">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-2.5">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                  {prompt.bundle === "starter"
                    ? "Included in Starter & Pro Packs"
                    : "Exclusive to Pro Library"}
                </h3>
                <p className="text-xs text-emerald-100/80 max-w-xs mb-3.5 leading-relaxed">
                  Unlock 394+ clinical and business transformation prompts.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="accent"
                    size="sm"
                    disabled={isCheckingOut}
                    onClick={handleDirectUnlock}
                    className="cursor-pointer w-full sm:w-auto justify-center bg-emerald-400 text-[#0B2C13] font-semibold hover:bg-emerald-300 py-2.5"
                  >
                    {isCheckingOut ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                        Opening Checkout...
                      </>
                    ) : prompt.bundle === "starter" ? (
                      "Unlock with Starter (₹199)"
                    ) : (
                      "Unlock Pro Library (₹1,999)"
                    )}
                  </Button>
                  <Button
                    href="/pricing"
                    variant="outline"
                    size="sm"
                    onClick={onClose}
                    className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto justify-center py-2.5"
                  >
                    View All Plans
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Follow-up Prompt Box (Interactive Next Step) */}
          {isUnlocked && prompt.followUpPrompt && (
            <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/60 p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Follow-up Prompt (Next Step)
                </span>
                <button
                  type="button"
                  onClick={handleCopyFollowUp}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 bg-white/90 hover:bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs transition-all cursor-pointer"
                >
                  {copiedFollowUp ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Follow-up</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs sm:text-[13px] text-emerald-950 font-mono bg-white/80 p-3 rounded-xl border border-emerald-100/90 leading-relaxed">
                {prompt.followUpPrompt}
              </p>
            </div>
          )}
        </div>

        {/* Clean Sticky Bottom Action Bar */}
        <div className="p-4 sm:px-7 sm:py-4 bg-[#FFFDF9] border-t border-gray-100 shrink-0">
          {isUnlocked ? (
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
              {/* Primary Copy Action */}
              <Button
                variant={copied ? "accent" : "primary"}
                onClick={handleCopy}
                fullWidth
                size="md"
                className="py-3 rounded-2xl bg-[#0B2C13] hover:bg-[#1E7A46] text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2 flex-1"
                leftIcon={
                  copied ? (
                    <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-white shrink-0" />
                  )
                }
              >
                {copied ? "Copied to Clipboard!" : "Copy Full Prompt"}
              </Button>

              {/* Secondary ChatGPT Action */}
              <Button
                href="https://chatgpt.com"
                isExternal
                variant="outline"
                size="sm"
                fullWidth
                className="py-2.5 sm:py-3 rounded-2xl border-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-50 flex items-center justify-center gap-1.5 sm:w-auto shrink-0"
                rightIcon={<ExternalLink className="w-3.5 h-3.5 text-gray-400" />}
              >
                Open in ChatGPT
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 py-1">
              <Layers className="w-4 h-4 text-[#1E7A46]" />
              <span>Includes lifetime prompt updates & WhatsApp community</span>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
