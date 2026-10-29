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
  User,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agreeTerms?: string;
    general?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: "", color: "" };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 1) return { score: 1, label: "Weak", color: "bg-red-500" };
    if (score === 2) return { score: 2, label: "Fair", color: "bg-amber-500" };
    if (score === 3) return { score: 3, label: "Good", color: "bg-emerald-500" };
    return { score: 4, label: "Strong", color: "bg-emerald-600" };
  };

  const strength = getPasswordStrength(password);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the Terms of Service and Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { refreshUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({ general: data.error || "Failed to create account. Please try again." });
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

  const handleGoogleSignUp = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-[#F0EFE7] flex flex-col lg:grid lg:grid-cols-12">
      {/* LEFT COLUMN: Visual Showcase (Sticky 100vh pinned on desktop) */}
      <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen flex-col justify-between p-8 xl:p-14 text-white bg-[#0B2C13] overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/young-woman-doctor-white.jpg"
            alt="Avyaya clinical wellness specialist"
            fill
            priority
            sizes="50vw"
            className="object-cover object-top opacity-35 mix-blend-luminosity filter brightness-80 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C13] via-[#0B2C13]/75 to-[#0B2C13]/35 pointer-events-none" />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[rgba(143,227,208,0.2)] blur-3xl pointer-events-none" />

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

        {/* Vertically Centered Headline */}
        <div className="relative z-10 my-auto py-10 max-w-lg">
          <h2 className="font-heading text-2xl sm:text-3xl xl:text-4xl font-normal text-white leading-snug">
            Join 10,000+ members getting expert-level wellness answers from any AI.
          </h2>
        </div>

        {/* Subtle Bottom Balancing Spacer */}
        <div className="relative z-10 h-6" aria-hidden="true" />
      </div>

      {/* RIGHT COLUMN: Interactive Sign Up Form (Naturally scrollable with no trapped overflow) */}
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
              href="/login"
              className="text-xs font-semibold text-[#0B2C13] hover:underline shrink-0"
            >
              <span className="hidden sm:inline">Already registered? </span>Log in
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-1 text-left">
            <h1 className="font-heading text-2xl sm:text-3xl font-normal text-[#0B2C13] tracking-tight">
              Create your account
            </h1>
          </div>

          {/* Success Banner */}
          {isSuccess && (
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center gap-3 text-sm text-[#1B5E20] animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
              <div>
                <p className="font-semibold text-xs sm:text-sm">Welcome to Avyaya!</p>
                <p className="text-[11px] sm:text-xs text-[#2E7D32]/90">Setting up your personal prompt workspace...</p>
              </div>
            </div>
          )}

          {/* 1. Google One-Click Sign Up */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={handleGoogleSignUp}
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
              <span>Sign up with Google</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-[#F0EFE7] px-3 text-[10px] uppercase tracking-wider text-gray-500 font-semibold absolute">
                or register with email
              </span>
            </div>
          </div>

          {/* 2. Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-[#0B2C13] mb-0.5"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Sarah Jenkins"
                  className={`w-full pl-9 pr-3.5 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm text-[#0B2C13] placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                    errors.name
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                      : "border-gray-200 focus:border-[#0B2C13] focus:ring-[#0B2C13]"
                  }`}
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.name && (
                <p className="text-xs text-red-600 mt-0.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Address */}
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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-[#0B2C13] mb-0.5"
              >
                Create Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  placeholder="At least 8 characters"
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

              {/* Password Strength Meter */}
              {password && (
                <div className="mt-1 space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all ${
                          level <= strength.score ? strength.color : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-medium">
                    <span>Password strength: <strong>{strength.label}</strong></span>
                    <span>Min 8 characters</span>
                  </div>
                </div>
              )}

              {errors.password && (
                <p className="text-xs text-red-600 mt-0.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-semibold text-[#0B2C13] mb-0.5"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
                  }}
                  placeholder="Re-enter your password"
                  className={`w-full pl-9 pr-3.5 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm text-[#0B2C13] placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                    errors.confirmPassword
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                      : "border-gray-200 focus:border-[#0B2C13] focus:ring-[#0B2C13]"
                  }`}
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-600 mt-0.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="pt-0.5">
              <label className="flex items-start gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: undefined });
                  }}
                  className="w-3.5 h-3.5 rounded text-[#0B2C13] focus:ring-[#0B2C13] border-gray-300 accent-[#0B2C13] cursor-pointer mt-0.5"
                />
                <span className="text-[11px] sm:text-xs text-[#526454] leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#0B2C13] font-semibold underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#0B2C13] font-semibold underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="text-xs text-red-600 mt-0.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.agreeTerms}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full flex items-center justify-center gap-2 bg-[#0B2C13] hover:bg-[#102B18] text-white font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-xl shadow-xs transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Creating your workspace...</span>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer Navigation */}
          <div className="pt-2 border-t border-gray-200/80 text-center">
            <p className="text-xs text-[#526454]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#0B2C13] hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
