import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Privacy Policy | Rootwell",
  description: "Privacy policy and data protection practices for Rootwell members.",
};

export default function PrivacyPage() {
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
              <Lock className="w-4 h-4" /> Your Privacy Matters
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl text-[#0B2C13]">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#526454] leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading text-lg font-semibold text-[#0B2C13]">
                1. Information We Collect
              </h2>
              <p>
                We only collect information necessary to administer your subscription and provide access to your personal prompt library, such as your name, email address, and authentication credentials.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-lg font-semibold text-[#0B2C13]">
                2. Zero Data Selling
              </h2>
              <p>
                We will never sell, rent, or trade your personal information or prompt history to third parties or advertising networks.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-lg font-semibold text-[#0B2C13]">
                3. Data Security
              </h2>
              <p>
                All account sessions and communication are encrypted with industry-standard 256-bit SSL encryption.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
