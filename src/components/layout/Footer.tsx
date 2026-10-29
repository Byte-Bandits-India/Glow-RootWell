"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { ShieldCheck } from "lucide-react";

interface CategoryLinkItem {
  key: string;
  label: string;
  count?: number;
}

export const Footer: React.FC = () => {
  const [categories, setCategories] = useState<CategoryLinkItem[]>([]);

  // Fetch dynamic categories from the backend API
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.categories && Array.isArray(data.categories) && data.categories.length > 0) {
          setCategories(data.categories);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer
      id="footer"
      className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] pt-16 pb-12 border-t border-[var(--color-border-dark)]"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[rgba(215,228,201,0.15)]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-white group"
            >
              <Image
                src="/Avyaya_Logo.png"
                alt="Avyaya"
                width={160}
                height={44}
                className="h-9 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--color-secondary)]/80 text-sm max-w-sm leading-relaxed">
              500+ tested prompts for skin, gut, nutrition and fitness. Make any AI answer like a certified wellness and lifestyle expert in under 60 seconds.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-medium pt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>7-Day Money-Back Guarantee · Verified Evidence Frameworks</span>
            </div>
          </div>

          {/* Quick Links: Explore Library (Dynamic from Backend API) */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-4">
              Explore Library
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link
                  href="/library"
                  className="hover:text-[var(--color-accent)] transition-colors font-medium text-white"
                >
                  All 500+ Prompts
                </Link>
              </li>
              {categories.length > 0 ? (
                categories.slice(0, 5).map((cat) => (
                  <li key={cat.key}>
                    <Link
                      href={`/library?cat=${cat.key}`}
                      className="hover:text-[var(--color-accent)] transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">{cat.label}</span>
                      {typeof cat.count === "number" && cat.count > 0 && (
                        <span className="text-[11px] text-[var(--color-secondary)]/60 group-hover:text-[var(--color-accent)] ml-1 shrink-0">
                          {cat.count}
                        </span>
                      )}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <Link
                      href="/library?cat=fat_loss"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      Fat Loss & Metabolism
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/library?cat=delivery"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      Client Transformation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/library?cat=content"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      Content & Brand
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/library?cat=sales"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      Sales & Conversion
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/library?cat=productivity"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      Productivity & Focus
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/how-it-works" className="hover:text-[var(--color-accent)] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[var(--color-accent)] transition-colors">
                  Pricing & Bundles
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-[var(--color-accent)] transition-colors">
                  Prompt Library
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[var(--color-accent)] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-4">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq#guarantee" className="hover:text-[var(--color-accent)] transition-colors">
                  Refund & Guarantee Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-[var(--color-secondary)]/80">
          <p className="max-w-3xl leading-relaxed">
            Avyaya prompts are for general wellness and lifestyle education only. They are not medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for specific medical concerns.
          </p>
          <div className="shrink-0 font-medium">
            <p>© 2026 Avyaya. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
