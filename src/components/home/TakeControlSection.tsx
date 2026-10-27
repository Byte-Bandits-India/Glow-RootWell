import React from "react";
import { Container } from "../layout/Container";
import { Download, ClipboardPaste, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export const TakeControlSection: React.FC = () => {
  return (
    <section className="bg-[#0B2C13] text-white py-20 md:py-28 border-b border-white/10" id="how">
      <Container>
        {/* Top Header Row from home.html */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block">
              How It Works
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.06]">
              Three steps. About a minute.
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-[var(--color-secondary)]/80 max-w-sm">
            <p>
              Works with ChatGPT, Claude, Gemini, Copilot, Perplexity and Llama. Free or paid plans.
            </p>
          </div>
        </div>

        {/* 3 Steps Cards Grid from home.html */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Step 1: Download */}
          <div className="bg-white text-[#0B2C13] rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-[#EBF2E4] text-[#14331C] flex items-center justify-center font-bold">
                  <Download className="w-5 h-5 text-[var(--color-accent)]" />
                </span>
                <span className="font-heading text-2xl font-bold text-gray-300">
                  01
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B2C13] mb-2">
                Download
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Get the library as a PDF and a plain-text file, ready to copy on any phone, tablet, or laptop.
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 mt-6">
              <span className="text-[11px] font-semibold text-[var(--color-accent)]">
                Instant lifetime delivery
              </span>
            </div>
          </div>

          {/* Step 2: Paste */}
          <div className="bg-[#FAF8F5] text-[#0B2C13] rounded-3xl p-7 shadow-sm border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-[#DDEED0] text-[#2C541B] flex items-center justify-center font-bold">
                  <ClipboardPaste className="w-5 h-5" />
                </span>
                <span className="font-heading text-2xl font-bold text-gray-300">
                  02
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0B2C13] mb-2">
                Paste
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Pick a prompt, paste it into the AI you already use and answer its questions about you.
              </p>
            </div>
            <div className="pt-6 border-t border-gray-200 mt-6">
              <span className="text-[11px] font-semibold text-[var(--color-primary)]">
                Zero learning curve
              </span>
            </div>
          </div>

          {/* Step 3: Apply */}
          <div className="bg-gradient-to-tr from-[#163A20] to-[#244E2C] rounded-3xl p-7 shadow-sm border border-white/15 flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-white/15 text-[var(--color-accent)] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <span className="font-heading text-2xl font-bold text-white/40">
                  03
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-white mb-2">
                Apply
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-secondary)]/90 leading-relaxed">
                Receive a routine, meal plan or client template written specifically for your situation.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[var(--color-accent)]">
                Ready in under 60 seconds
              </span>
              <Button
                href="/library"
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs py-1.5 px-3"
              >
                Browse prompts →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
