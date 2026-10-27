"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

export interface NavbarProps {
  variant?: "light" | "dark" | "transparent";
}

export const Navbar: React.FC<NavbarProps> = ({ variant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // If variant is not explicitly provided, adapt by pathname (dark on homepage '/', light elsewhere)
  const isDark = variant ? variant === "dark" : pathname === "/";

  interface NavLinkItem {
    label: string;
    href: string;
  }

  const navLinks: NavLinkItem[] = [
    { label: "Library", href: "/library" },
    { label: "How it works", href: "/#how" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`w-full z-40 transition-colors duration-200 sticky top-0 ${
        isDark
          ? "bg-[#0B2C13] text-[var(--color-text-inverse)] border-b border-white/10"
          : "bg-[var(--color-background)]/90 backdrop-blur-md text-[var(--color-text-primary)] border-b border-[var(--color-border)]"
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
                isDark
                  ? "bg-[rgba(16,185,130,0.18)] text-[var(--color-accent)]"
                  : "bg-[var(--color-primary)] text-[var(--color-accent)]"
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
              href="/#footer"
              variant="outline"
              size="sm"
              className={
                isDark
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-white font-medium"
                  : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-black/5 font-medium"
              }
            >
              Contact Us
            </Button>
            <Button
              href="/#pricing"
              variant={isDark ? "outline" : "primary"}
              size="sm"
              className={
                isDark
                  ? "bg-white text-[#0B2C13] border-white hover:bg-white/90 font-semibold text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
                  : ""
              }
            >
              Get Instant Access
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-xl text-inherit hover:bg-black/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]`}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Slide-Over Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Right-to-Left Slide-Over Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-[300px] sm:w-[340px] max-w-[85vw] bg-[#0B2C13] text-white z-50 shadow-2xl flex flex-col justify-between p-6 border-l border-white/10 transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div>
          {/* Drawer Header with Logo and Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-[#0B2C13] flex items-center justify-center font-bold">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 22c0-6 1-10 8-16-1 7-3 11-8 16zM12 22C12 15 9 11 3 8c0 6 3 10 9 14z" />
                </svg>
              </span>
              <span className="font-heading font-bold text-xl text-white">Rootwell</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex flex-col gap-1.5 pt-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[rgba(16,185,130,0.15)] text-[var(--color-accent)] font-semibold"
                      : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Action Buttons at Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Button
            href="/#footer"
            variant="outline"
            size="md"
            fullWidth
            className="border-white/20 text-white hover:bg-white/10 justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Button>
          <Button
            href="/#pricing"
            variant="accent"
            size="md"
            fullWidth
            className="bg-[var(--color-accent)] text-[#0B2C13] font-semibold justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Instant Access
          </Button>
        </div>
      </div>
    </header>
  );
};
