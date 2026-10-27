"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { Menu, X, Sparkles } from "lucide-react";

export interface NavbarProps {
  variant?: "light" | "dark" | "transparent";
}

export const Navbar: React.FC<NavbarProps> = ({ variant = "light" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDark = variant === "dark";

  const navLinks = [
    { label: "Library", href: "/library" },
    { label: "How it works", href: "/#how" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`w-full z-40 transition-colors duration-200 ${
        isDark
          ? "bg-transparent text-[var(--color-text-inverse)]"
          : "bg-[var(--color-background)]/90 backdrop-blur-md text-[var(--color-text-primary)] border-b border-[var(--color-border)] sticky top-0"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tight text-inherit group select-none"
          >
            <span
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
                isDark ? "bg-[rgba(16,185,130,0.18)] text-[var(--color-accent)]" : "bg-[var(--color-primary)] text-[var(--color-accent)]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 22c0-6 1-10 8-16-1 7-3 11-8 16zM12 22C12 15 9 11 3 8c0 6 3 10 9 14z" />
              </svg>
            </span>
            <span className="font-heading font-bold text-2xl tracking-tight">
              Rootwell
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors relative py-1 flex items-center gap-1.5 ${
                    isDark
                      ? isActive
                        ? "text-[var(--color-accent)] font-semibold"
                        : "text-white/80 hover:text-white"
                      : isActive
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isDark
                          ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                          : "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/library"
              variant={isDark ? "outline" : "outline"}
              size="sm"
              className={
                isDark
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-white"
                  : ""
              }
              leftIcon={<Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />}
            >
              Explore Prompts
            </Button>
            <Button
              href="/#pricing"
              variant={isDark ? "accent" : "primary"}
              size="sm"
            >
              Get Instant Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg text-inherit hover:bg-black/5 cursor-pointer`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden py-5 px-4 mb-4 rounded-2xl border transition-all ${
              isDark
                ? "bg-[var(--color-surface-dark)] border-white/10 text-white"
                : "bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-primary)] shadow-lg"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-xs bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-3 border-t border-[var(--color-border)] flex flex-col gap-2 mt-2">
                <Button
                  href="/library"
                  variant="outline"
                  fullWidth
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Prompts
                </Button>
                <Button
                  href="/#pricing"
                  variant="accent"
                  fullWidth
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Instant Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
