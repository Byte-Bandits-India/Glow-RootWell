import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Terms of Service | Rootwell",
  description: "Terms and conditions for Rootwell AI Prompt Library membership and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F0EFE7] py-16">
      <Container className="max-w-4xl">
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2C13] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sign Up
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0B2C13]/10 shadow-xs space-y-8">
          <div className="space-y-3 border-b border-gray-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2C13]/5 text-xs font-semibold text-[#0B2C13]">
              <ShieldCheck className="w-4 h-4" /> Legal &amp; Policies
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl text-[#0B2C13]">
              Terms of Service
            </h1>
            <p className="text-xs text-gray-500">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#526454] leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading text-lg font-semibold text-[#0B2C13]">
                1. Acceptance of Terms
              </h2>
              <p>
                By creating an account or accessing Rootwell&apos;s prompt library, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-lg font-semibold text-[#0B2C13]">
                2. Educational &amp; Information Use Only
              </h2>
              <p>
                Rootwell provides structured AI prompting frameworks for wellness research, education, and lifestyle optimization. Rootwell does not provide formal medical diagnoses or clinical prescription services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-lg font-semibold text-[#0B2C13]">
                3. Membership &amp; Access
              </h2>
              <p>
                Access to the prompt library is personal to the registered subscriber. Sharing account credentials across multiple individuals is prohibited.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
