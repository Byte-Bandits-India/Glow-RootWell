"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Lock,
  Mail,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
          rememberMe,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({ general: data.error || "Failed to sign in. Please check your credentials." });
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      await refreshUser();

      setTimeout(() => {
        router.push("/library");
        router.refresh();
      }, 900);
    } catch {
      setErrors({ general: "Network connection error. Please try again." });
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-[#F0EFE7] flex flex-col lg:grid lg:grid-cols-12">
      {/* LEFT COLUMN: Visual Showcase (Sticky 100vh pinned on desktop) */}
      <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen flex-col justify-between p-8 xl:p-14 text-white bg-[#0B2C13] overflow-hidden">
        {/* Background Image with rich forest green vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/woman-with-long-hair.jpg"
            alt="Avyaya member wellness journey"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center opacity-45 mix-blend-luminosity filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C13] via-[#0B2C13]/70 to-[#0B2C13]/30 pointer-events-none" />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[rgba(143,227,208,0.18)] blur-3xl pointer-events-none" />

        {/* Top Header / Brand Link */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/Avyaya_Logo.png"
              alt="Avyaya"
              width={160}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Vertically Centered Quote */}
        <div className="relative z-10 my-auto py-10 max-w-lg">
          <h2 className="font-heading text-2xl sm:text-3xl xl:text-4xl font-normal text-white leading-snug">
            &ldquo;Structured prompts turn any AI into a certified wellness specialist in seconds.&rdquo;
          </h2>
        </div>

        {/* Subtle Bottom Balancing Spacer */}
        <div className="relative z-10 h-6" aria-hidden="true" />
      </div>

      {/* RIGHT COLUMN: Interactive Login Form (Naturally scrollable with no trapped overflow) */}
      <div className="col-span-12 lg:col-span-7 xl:col-span-6 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10">
        <div className="w-full max-w-[390px] sm:max-w-[420px] my-auto space-y-3 sm:space-y-3.5">
          {/* Top Bar Navigation (Desktop & Mobile) */}
          <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-gray-200/80">
            {/* Mobile shows logo */}
            <div className="lg:hidden">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/Avyaya_Logo.png"
                  alt="Avyaya"
                  width={140}
                  height={38}
                  className="h-8 w-auto object-contain rounded-lg bg-[#0B2C13] px-2 py-1"
                />
              </Link>
            </div>

            {/* Desktop shows back to website link */}
            <div className="hidden lg:block">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#526454] hover:text-[#0B2C13] transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                <span>Back to website</span>
              </Link>
            </div>

            <Link
              href="/signup"
              className="text-xs font-semibold text-[#0B2C13] hover:underline shrink-0"
            >
              <span className="hidden sm:inline">Need an account? </span>Sign up
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-1 text-left">
            <h1 className="font-heading text-2xl sm:text-3xl font-normal text-[#0B2C13] tracking-tight">
              Welcome back
            </h1>
          </div>

          {/* Success Banner */}
          {isSuccess && (
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center gap-3 text-sm text-[#1B5E20] animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
              <div>
                <p className="font-semibold text-xs sm:text-sm">Authentication successful!</p>
                <p className="text-[11px] sm:text-xs text-[#2E7D32]/90">Redirecting to your prompt library...</p>
              </div>
            </div>
          )}

          {/* General Error Banner */}
          {errors.general && (
            <div className="p-3 sm:p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-xs sm:text-sm text-red-700">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 shrink-0" />
              <p>{errors.general}</p>
            </div>
          )}

          {/* 1. Google One-Click Sign In */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isSubmitting || isSuccess}
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-[#0B2C13] font-semibold text-xs sm:text-sm shadow-2xs transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-[#F0EFE7] px-3 text-[10px] uppercase tracking-wider text-gray-500 font-semibold absolute">
                or sign in with email
              </span>
            </div>
          </div>

          {/* 2. Email & Password Form */}
          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-[#0B2C13] mb-0.5"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@example.com"
                  className={`w-full pl-9 pr-3.5 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm text-[#0B2C13] placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                    errors.email
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                      : "border-gray-200 focus:border-[#0B2C13] focus:ring-[#0B2C13]"
                  }`}
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 mt-0.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-[#0B2C13]"
                >
                  Password
                </label>
                <Link
                  href="/contact"
                  className="text-[11px] sm:text-xs text-[#0B2C13] hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  placeholder="••••••••"
                  className={`w-full pl-9 pr-9 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm text-[#0B2C13] placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                    errors.password
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                      : "border-gray-200 focus:border-[#0B2C13] focus:ring-[#0B2C13]"
                  }`}
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-gray-400 hover:text-[#0B2C13] absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 mt-0.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#0B2C13] focus:ring-[#0B2C13] border-gray-300 accent-[#0B2C13] cursor-pointer"
                />
                <span className="text-xs text-[#526454]">Remember me for 30 days</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full flex items-center justify-center gap-2 bg-[#0B2C13] hover:bg-[#102B18] text-white font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-xl shadow-xs transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer Navigation */}
          <div className="pt-2 border-t border-gray-200/80 text-center">
            <p className="text-xs text-[#526454]">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#0B2C13] hover:underline"
              >
                Create your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
