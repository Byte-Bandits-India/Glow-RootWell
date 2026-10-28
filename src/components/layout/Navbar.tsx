"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, ChevronDown, BookOpen, Sparkles, LogOut, LayoutDashboard } from "lucide-react";

export interface NavbarProps {
  variant?: "light" | "dark" | "transparent";
}

export const Navbar: React.FC<NavbarProps> = ({ variant = "dark" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const { user, logout } = useAuth();

  // Green (#0B2C13) navbar across all screens and pages
  const isDark = variant !== "light";

  interface NavLinkItem {
    label: string;
    href: string;
  }

  const navLinks: NavLinkItem[] = [
    { label: "Library", href: "/library" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
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
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setProfileDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

          {/* Action CTAs & Profile State */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/contact"
              variant="outline"
              size="sm"
              className={
                isDark
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-white font-medium text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
                  : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-black/5 font-medium text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
              }
            >
              Contact Us
            </Button>

            {!user && (
              <Button
                href="/pricing"
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
            )}

            {/* Sign in and profile button positioned last */}
            {user ? (
              /* Authenticated User Profile Pill & Dropdown (LAST) */
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-white text-xs sm:text-sm font-medium cursor-pointer"
                  aria-expanded={profileDropdownOpen}
                  aria-haspopup="true"
                >
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="w-6 h-6 rounded-full object-cover border border-[var(--color-accent)] shrink-0"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-[#0B2C13] flex items-center justify-center font-bold text-[11px] uppercase shrink-0">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <span className="max-w-[110px] truncate">{user.name.split(" ")[0]}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white/70 transition-transform ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white text-[#0B2C13] rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in duration-150">
                    <div className="px-4 py-2.5 border-b border-gray-100">
                      <p className="text-xs font-semibold text-[#0B2C13] truncate">
                        {user.name}
                      </p>
                      <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#0B2C13] hover:bg-[#F0EFE7] transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-[#526454]" />
                        <span>My Dashboard & Plans</span>
                      </Link>
                      <Link
                        href="/library"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#0B2C13] hover:bg-[#F0EFE7] transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-[#526454]" />
                        <span>My Prompt Library</span>
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#0B2C13] hover:bg-[#F0EFE7] transition-colors"
                      >
                        <Sparkles className="w-4 h-4 text-[#526454]" />
                        <span>Membership Plans</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          logout();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Unauthenticated Sign In Link (LAST) */
              <Link
                href="/login"
                className="text-xs sm:text-sm font-medium text-white/85 hover:text-white transition-colors px-2.5 py-1"
              >
                Sign In
              </Link>
            )}
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

          {/* User Profile Card in Mobile Drawer (if authenticated) */}
          {user && (
            <div className="mt-4 p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border border-[var(--color-accent)] shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[#0B2C13] flex items-center justify-center font-bold text-sm uppercase shrink-0">
                  {user.name.charAt(0)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                <p className="text-xs text-white/70 truncate">{user.email}</p>
              </div>
            </div>
          )}

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
            href="/contact"
            variant="outline"
            size="md"
            fullWidth
            className="border-white/20 text-white hover:bg-white/10 justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Button>

          {user ? (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                logout();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-red-400/30 text-red-300 hover:bg-red-500/10 font-medium text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          ) : (
            <>
              <Button
                href="/pricing"
                variant="accent"
                size="md"
                fullWidth
                className="bg-[var(--color-accent)] !text-white font-semibold justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Instant Access
              </Button>
              <Button
                href="/login"
                variant="outline"
                size="md"
                fullWidth
                className="border-white/20 text-white hover:bg-white/10 justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
