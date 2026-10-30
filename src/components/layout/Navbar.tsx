"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, ChevronDown, Sparkles, LogOut, LayoutDashboard } from "lucide-react";

export interface NavbarProps {
  variant?: "light" | "dark" | "transparent";
}

export const Navbar: React.FC<NavbarProps> = ({ variant = "light" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  // White / warm light theme by default as per reference image
  const isDark = variant === "dark";

  interface NavLinkItem {
    label: string;
    href: string;
  }

  const navLinks: NavLinkItem[] = [
    { label: "Prompts Library", href: "/library" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact us", href: "/contact" },
  ];

  const mobileNavLinks: NavLinkItem[] = [
    ...(user ? [{ label: "Dashboard", href: "/dashboard" }] : []),
    { label: "Prompts Library", href: "/library" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact us", href: "/contact" },
  ];

  // Prevent background scrolling and pause Lenis when mobile drawer is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
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
    <>
      <header
        className={`w-full z-40 transition-colors duration-200 sticky top-0 ${
        isDark
          ? "bg-[#0B2C13] text-[var(--color-text-inverse)] border-b border-white/10"
          : "bg-[#FAF8F5]/90 backdrop-blur-md text-[#111813] border-b border-[#E8E6DF]"
      }`}
    >
      <Container className="w-[95%] sm:w-[92%] lg:w-[90%]">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg md:text-xl lg:text-2xl tracking-tight text-inherit group select-none shrink-0"
          >
            <Image
              src="/white_logo.png"
              alt="Avyaya"
              width={160}
              height={44}
              className="h-7 sm:h-8 md:h-8 lg:h-10 xl:h-11 w-auto object-contain shrink-0"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3.5 md:gap-4 lg:gap-7 xl:gap-8 text-xs md:text-[13px] lg:text-sm font-medium shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap transition-colors relative py-1 flex items-center gap-1.5 shrink-0 ${
                    isDark
                      ? isActive
                        ? "text-[var(--color-accent)] font-semibold"
                        : "text-white/80 hover:text-white"
                      : isActive
                      ? "text-[#111813] font-semibold"
                      : "text-[#526454] hover:text-[#111813]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1C7C3B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs & Profile State */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Authenticated User Profile Pill & Dropdown */}
            {user ? (
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className={`flex items-center gap-2 py-1.5 px-2.5 md:px-3 rounded-full transition-all text-xs md:text-sm font-medium cursor-pointer shrink-0 whitespace-nowrap ${
                    isDark
                      ? "bg-white/10 hover:bg-white/15 border border-white/20 text-white"
                      : "bg-black/5 hover:bg-black/10 border border-black/10 text-[#111813]"
                  }`}
                  aria-expanded={profileDropdownOpen}
                  aria-haspopup="true"
                >
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover border border-[#139a5f] shrink-0"
                    />
                  ) : (
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#139a5f] text-white flex items-center justify-center font-bold text-[10px] md:text-[11px] uppercase shrink-0">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <span className="max-w-[90px] md:max-w-[110px] truncate">{user.name.split(" ")[0]}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      isDark ? "text-white/70" : "text-[#526454]"
                    } ${profileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white text-[#111813] rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in duration-150">
                    <div className="px-4 py-2.5 border-b border-gray-100">
                      <p className="text-xs font-semibold text-[#111813] truncate">
                        {user.name}
                      </p>
                      <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#111813] hover:bg-[#F0EFE7] transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-[#526454]" />
                        <span>My Dashboard & Plans</span>
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#111813] hover:bg-[#F0EFE7] transition-colors"
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
              /* Unauthenticated: Gradient "Log in" button matching reference image */
              <Button
                href="/login"
                variant="accent"
                size="sm"
                className="whitespace-nowrap shrink-0 bg-gradient-to-b from-[#0FB67E] via-[#129A5A] to-[#13733D] hover:brightness-110 text-white font-medium text-xs md:text-sm px-3.5 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all border border-[#0FB67E]/30 cursor-pointer"
              >
                Log in
              </Button>
            )}
          </div>

          {/* Mobile / Tablet Header Controls (< md) */}
          <div className="flex md:hidden items-center gap-2.5">
            {user ? (
              <Link
                href="/dashboard"
                className={`rounded-full ring-2 transition-all shrink-0 overflow-hidden ${
                  isDark ? "ring-white/20 hover:ring-white/40" : "ring-black/10 hover:ring-black/20"
                }`}
                aria-label="Go to My Dashboard"
              >
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#139a5f] text-white flex items-center justify-center font-bold text-xs uppercase">
                    {user.name.charAt(0)}
                  </div>
                )}
              </Link>
            ) : (
              <Link
                href="/login"
                className="text-xs font-medium text-white px-3.5 py-1.5 rounded-xl bg-gradient-to-b from-[#0FB67E] via-[#129A5A] to-[#13733D] hover:brightness-110 transition-all shadow-sm border border-[#0FB67E]/30"
              >
                Log in
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 -mr-1.5 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#139a5f] ${
                isDark
                  ? "text-inherit hover:bg-white/10 active:bg-white/15"
                  : "text-[#111813] hover:bg-black/5 active:bg-black/10"
              }`}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

    </header>

      {/* Mobile Slide-Over Backdrop & Drawer Portaled to document.body */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
              mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
            }`}
          >
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Right-to-Left Slide-Over Drawer */}
            <div
              className={`fixed top-0 bottom-0 right-0 w-[300px] sm:w-[350px] max-w-[85vw] h-full shadow-2xl flex flex-col justify-between p-5 sm:p-6 transition-transform duration-300 ease-out overflow-y-auto ${
                isDark
                  ? "bg-[#0B2C13] text-white border-l border-white/10"
                  : "bg-[#FAF8F5] text-[#111813] border-l border-[#E8E6DF]"
              } ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              data-lenis-prevent="true"
            >
              <div className="flex flex-col">
                {/* Drawer Header with Logo and Close Button */}
                <div
                  className={`flex items-center justify-between pb-4 border-b ${
                    isDark ? "border-white/10" : "border-[#E8E6DF]"
                  }`}
                >
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 group"
                  >
                    <Image
                      src="/white_logo.png"
                      alt="Avyaya"
                      width={130}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 -mr-1.5 rounded-xl transition-colors cursor-pointer ${
                      isDark
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-[#526454] hover:text-[#111813] hover:bg-black/5"
                    }`}
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* User Profile Card in Mobile Drawer */}
                {user ? (
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mt-4 p-3 rounded-xl transition-all flex items-center gap-3 border ${
                      isDark
                        ? "bg-white/5 hover:bg-white/10 active:bg-white/15 border-white/10 text-white"
                        : "bg-white hover:bg-[#F0EFE7] active:bg-[#EAE8DD] border-[#E8E6DF] text-[#111813] shadow-sm"
                    }`}
                  >
                    {user.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#139a5f] text-white flex items-center justify-center font-bold text-sm uppercase shrink-0">
                        {user.name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold truncate ${
                          isDark ? "text-white" : "text-[#111813]"
                        }`}
                      >
                        {user.name}
                      </p>
                      <p
                        className={`text-xs truncate ${
                          isDark ? "text-white/60" : "text-[#526454]"
                        }`}
                      >
                        {user.email}
                      </p>
                    </div>
                  </Link>
                ) : null}

                {/* Drawer Navigation Links */}
                <nav className="flex flex-col gap-1 pt-6">
                  {mobileNavLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-3 py-2.5 rounded-lg text-base transition-colors ${
                          isDark
                            ? isActive
                              ? "text-white font-semibold"
                              : "text-white/75 hover:text-white"
                            : isActive
                            ? "text-[#111813] font-semibold bg-black/[0.04]"
                            : "text-[#526454] hover:text-[#111813] hover:bg-black/[0.02]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Action Buttons at Bottom */}
              <div
                className={`pt-4 border-t flex flex-col gap-2.5 ${
                  isDark ? "border-white/10" : "border-[#E8E6DF]"
                }`}
              >
                {user ? (
                  <>
                    <Button
                      href="/dashboard"
                      variant="outline"
                      size="md"
                      fullWidth
                      className={`justify-center text-sm ${
                        isDark
                          ? "border-white/20 text-white hover:bg-white/10"
                          : "border-[#E8E6DF] text-[#111813] hover:bg-black/5"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Dashboard
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        logout();
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl border font-medium text-sm text-center transition-colors cursor-pointer ${
                        isDark
                          ? "border-white/15 text-white/70 hover:text-white hover:bg-white/5"
                          : "border-red-200 text-red-600 hover:bg-red-50"
                      }`}
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Button
                    href="/login"
                    variant="accent"
                    size="md"
                    fullWidth
                    className="bg-gradient-to-b from-[#0FB67E] via-[#129A5A] to-[#13733D] hover:brightness-110 text-white font-medium justify-center text-sm rounded-xl shadow-sm border border-[#0FB67E]/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
