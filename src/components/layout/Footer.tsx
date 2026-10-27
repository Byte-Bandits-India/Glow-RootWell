import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] pt-16 pb-12 border-t border-[var(--color-border-dark)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[rgba(215,228,201,0.15)]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-white group"
            >
              <span className="w-8 h-8 rounded-full bg-[rgba(16,185,130,0.2)] text-[var(--color-accent)] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 22c0-6 1-10 8-16-1 7-3 11-8 16zM12 22C12 15 9 11 3 8c0 6 3 10 9 14z" />
                </svg>
              </span>
              <span className="font-heading text-2xl">Rootwell</span>
            </Link>
            <p className="text-[var(--color-secondary)]/80 text-sm max-w-sm leading-relaxed">
              500+ tested prompts for skin, gut, nutrition and fitness. Make any AI answer like a certified wellness and lifestyle expert in under 60 seconds.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-medium pt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>7-Day Money-Back Guarantee · Verified Evidence Frameworks</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-4">
              Explore Library
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/library" className="hover:text-[var(--color-accent)] transition-colors">
                  All 500+ Prompts
                </Link>
              </li>
              <li>
                <Link href="/library?cat=skin" className="hover:text-[var(--color-accent)] transition-colors">
                  Skin Health Prompts
                </Link>
              </li>
              <li>
                <Link href="/library?cat=gut" className="hover:text-[var(--color-accent)] transition-colors">
                  Gut Microbiome Prompts
                </Link>
              </li>
              <li>
                <Link href="/library?cat=nutrition" className="hover:text-[var(--color-accent)] transition-colors">
                  Nutrition & Macros
                </Link>
              </li>
              <li>
                <Link href="/library?cat=fitness" className="hover:text-[var(--color-accent)] transition-colors">
                  Fitness & Mobility
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/#how" className="hover:text-[var(--color-accent)] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[var(--color-accent)] transition-colors">
                  Pricing & Bundles
                </Link>
              </li>
              <li>
                <Link href="/#coaches" className="hover:text-[var(--color-accent)] transition-colors">
                  For Wellness Coaches
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[var(--color-accent)] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-4">
              Prompt Updates
            </h3>
            <p className="text-xs text-white/70 mb-3">
              Get new expert prompts and wellness AI workflows directly in your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to Rootwell Prompt Updates!");
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.18)] rounded-[var(--radius-input)] py-2 px-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-accent)]"
              />
              <button
                type="submit"
                className="bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold text-xs py-2 px-3 rounded-[var(--radius-button)] flex items-center justify-center gap-1.5 hover:bg-[var(--color-accent-hover)] transition-colors cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer & Copyright matching home.html */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-[var(--color-secondary)]/80 border-t border-[rgba(215,228,201,0.1)] mt-8">
          <p className="max-w-3xl leading-relaxed">
            Rootwell prompts are for general wellness and education only. They are not medical advice, diagnosis or treatment. Talk to a qualified professional about any health concern.
          </p>
          <div className="shrink-0 font-medium">
            <p>© 2026 Rootwell</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
