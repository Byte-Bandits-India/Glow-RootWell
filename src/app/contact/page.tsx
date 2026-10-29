"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  ShieldCheck,
  Send,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Briefcase,
  Headphones,
  Check,
  AlertCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FormState {
  name: string;
  email: string;
  category: string;
  aiTool: string;
  message: string;
}

const INQUIRY_CATEGORIES = [
  "General Support",
  "Prompt Recommendation",
  "Coach / Clinic License",
  "Billing & Orders",
];

const AI_TOOLS = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Copilot", "Other"];

const CONTACT_FAQS = [
  {
    question: "How quickly will I receive my prompts after purchasing?",
    answer:
      "Instantly. The moment your payment completes, you are redirected to a secure access portal, and a backup link containing the PDF guide and plain-text files is emailed to you within 30 seconds.",
  },
  {
    question: "I haven't received my confirmation or download email. What should I do?",
    answer:
      "First, check your spam or promotions folder for an email from support@avyaya.com. If you still don't see it within 5 minutes, email us directly with your order reference or payment email, and we will reissue your download link immediately.",
  },
  {
    question: "Can I use Avyaya prompts with my coaching clients?",
    answer:
      "Yes! Our All-Access and Coach bundles explicitly include commercial client rights. You can use our intake frameworks and protocol templates to generate personalized routines for your clients without extra royalty fees.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We provide an unconditional 7-day money-back guarantee. If you test our prompts in your favorite AI and don't feel they gave you clinical-grade, personalized advice, just email support@avyaya.com within 7 days for a full refund.",
  },
  {
    question: "Do you offer custom prompt packages for clinics or enterprise gyms?",
    answer:
      "Yes. We collaborate directly with functional medicine practitioners, aesthetic clinics, and boutique fitness studios to build proprietary AI intake workflows. Contact partners@avyaya.com to discuss your practice's needs.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    category: "General Support",
    aiTool: "ChatGPT",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.error || "We could not deliver your message right now. Please try again."
        );
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "An unexpected error occurred while sending your message. Please try again or reach out to support@avyaya.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      category: "General Support",
      aiTool: "ChatGPT",
      message: "",
    });
    setErrorMessage(null);
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* 1. Hero Banner */}
      <div className="bg-[#0B2C13] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[rgba(16,185,130,0.12)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[rgba(215,228,201,0.06)] blur-2xl pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-5">

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.08] tracking-tight">
              Let&apos;s talk about your wellness AI journey.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-secondary)]/90 leading-relaxed max-w-2xl">
              Have a question about prompt compatibility, clinic licenses, or need guidance on a protocol? Our clinical and AI engineering team is here to help.
            </p>

            {/* Response metric strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Average reply: <strong>&lt; 4 hours</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[var(--color-accent)]" />
                <span>100% human responses</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                <span>7-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Direct Channels Grid */}
      <Section variant="ivory" padding="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Support */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F5E9] text-[#1E7A66] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#0B2C13]">
                  Customer Support
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Questions regarding prompt delivery, downloads, or payment receipts.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-gray-100">
                <a
                  href="mailto:support@avyaya.com"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-accent-hover)] hover:underline"
                >
                  support@avyaya.com
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Partnerships */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#DDF4C8] text-[#14532D] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#0B2C13]">
                  Clinic &amp; Coach Licensing
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Custom licensing for functional clinics, fitness gyms, and wellness brands.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-gray-100">
                <a
                  href="mailto:partners@avyaya.com"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-accent-hover)] hover:underline"
                >
                  partners@avyaya.com
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Clinical Feedback */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FDE2D9] text-[#D9532F] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#0B2C13]">
                  Prompt Requests
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Suggest a health condition, routine, or specialty you want added to our library.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-gray-100">
                <a
                  href="mailto:prompts@avyaya.com"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D9532F] hover:underline"
                >
                  prompts@avyaya.com
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 4: Instant Help Center */}
            <div className="bg-gradient-to-tr from-[#163A20] to-[#244E2C] text-white rounded-3xl p-6 sm:p-7 shadow-xs border border-white/10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-white/15 text-[var(--color-accent)] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-white">
                  Instant FAQ Center
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-secondary)]/90 leading-relaxed">
                  Browse immediate answers on model compatibility, refunds, and device setup.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-white/15">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-accent)] hover:underline"
                >
                  Explore FAQ questions
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Interactive Contact Form & Studio Details */}
      <Section variant="white" padding="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Context & Guidelines */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-hover)] block">
                  Send A Message
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#0B2C13] tracking-tight leading-tight">
                  How can we support your practice or daily routine?
                </h2>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  Fill out the form and our clinical prompt engineering team will review your inquiry. We provide individualized responses rather than automated copy-paste replies.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4 pt-2">
                <div className="bg-[#FAF8F5] rounded-2xl p-4.5 border border-gray-100 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] text-[#1E7A66] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-[#0B2C13]">
                      Prompt Formulation Guidance
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                      Need help optimizing prompts for Claude Opus, GPT-4o, or Gemini 1.5 Pro? Tell us which model you use.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl p-4.5 border border-gray-100 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] text-[#1E7A66] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-[#0B2C13]">
                      Secure &amp; Confidential
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                      We never share your contact details or email. Your data is used exclusively to assist your inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-md border border-gray-100">
                {isSubmitted ? (
                  <div className="py-10 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#1E7A66] flex items-center justify-center mx-auto shadow-xs">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B2C13]">
                        Message Received!
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{form.name}</strong>. We&apos;ve logged your inquiry under <em>{form.category}</em>. A confirmation receipt has been emailed to <strong>{form.email}</strong>, and our administration team has been notified.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-gray-100 max-w-md mx-auto text-xs text-[#0B2C13] flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-[#1E7A66]" />
                      <span>Expected reply within 2 to 4 hours</span>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="button"
                        onClick={handleReset}
                        variant="primary"
                        size="md"
                        className="rounded-full text-white bg-[#0B2C13] hover:bg-[#102B18] shadow-sm px-6"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Category Pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2C13] mb-2.5">
                        Inquiry Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_CATEGORIES.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setForm({ ...form, category: cat })}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                              form.category === cat
                                ? "bg-[#0B2C13] text-white shadow-xs"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold text-[#0B2C13] mb-1.5"
                        >
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Dr. Maya Patel"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0B2C13] placeholder:text-gray-400 focus:outline-none focus:border-[#0B2C13] focus:ring-1 focus:ring-[#0B2C13] transition-all bg-white"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-[#0B2C13] mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="maya@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0B2C13] placeholder:text-gray-400 focus:outline-none focus:border-[#0B2C13] focus:ring-1 focus:ring-[#0B2C13] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* AI Tool Dropdown / Selection */}
                    <div>
                      <label
                        htmlFor="aiTool"
                        className="block text-xs font-semibold text-[#0B2C13] mb-1.5"
                      >
                        Which AI model do you primarily use?
                      </label>
                      <select
                        id="aiTool"
                        value={form.aiTool}
                        onChange={(e) => setForm({ ...form, aiTool: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0B2C13] focus:outline-none focus:border-[#0B2C13] focus:ring-1 focus:ring-[#0B2C13] transition-all bg-white cursor-pointer"
                      >
                        {AI_TOOLS.map((tool) => (
                          <option key={tool} value={tool}>
                            {tool}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-[#0B2C13] mb-1.5"
                      >
                        How can we help? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Provide details about your query, protocol goal, or clinic requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0B2C13] placeholder:text-gray-400 focus:outline-none focus:border-[#0B2C13] focus:ring-1 focus:ring-[#0B2C13] transition-all bg-white resize-y"
                      />
                      <div className="flex justify-between items-center text-[11px] text-gray-400 mt-1">
                        <span>Be as specific as you like</span>
                        <span>{form.message.length} characters</span>
                      </div>
                    </div>

                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full justify-center bg-[var(--color-accent)] !text-white font-semibold py-3.5 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all shadow-sm cursor-pointer disabled:opacity-70"
                        rightIcon={
                          isSubmitting ? (
                            <Clock className="w-4 h-4 animate-spin text-white" />
                          ) : (
                            <Send className="w-4 h-4 text-white" />
                          )
                        }
                      >
                        <span className="text-white">
                          {isSubmitting ? "Dispatching Message..." : "Send Message"}
                        </span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Pre-Contact FAQ Accordion */}
      <Section variant="ivory" padding="default">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Common Questions Before Reaching Out"
            subtitle="Find rapid solutions for instant prompt access, billing, and clinical coaching rights."
          />

          <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-xs border border-gray-100">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {CONTACT_FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-gray-200/80 px-5 transition-colors data-[state=open]:border-[#0B2C13]/30 data-[state=open]:bg-[#FAF8F5]/50"
                >
                  <AccordionTrigger className="text-left font-heading text-base sm:text-lg font-medium text-[#0B2C13] py-4.5 hover:no-underline cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed pb-4 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-[var(--color-text-secondary)]">
                Have a different question not covered here?{" "}
                <Link
                  href="/faq"
                  className="font-semibold text-[#0B2C13] hover:underline inline-flex items-center gap-1"
                >
                  View Full FAQ Center <ArrowRight className="w-3 h-3" />
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Final Banner */}
      <Section variant="sage" padding="default">
        <Container size="narrow">
          <div className="text-center space-y-6">

            <h2 className="font-heading text-4xl sm:text-5xl font-normal text-[#0B2C13] leading-tight tracking-tight">
              Ready to elevate your wellness guidance?
            </h2>

            <p className="text-xs sm:text-sm text-[#526454] max-w-xl mx-auto leading-relaxed">
              500+ structured prompts for skin, gut, nutrition and fitness. Instant delivery, zero subscription lock-in.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/pricing"
                variant="primary"
                size="lg"
                className="bg-[#0B2C13] text-white hover:bg-[#0B2C13]/90 font-semibold shadow-sm px-8"
              >
                View Plans &amp; Pricing
              </Button>
              <Button
                href="/library"
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white text-[#0B2C13] border-[#0B2C13]/25 hover:border-[#0B2C13] font-semibold px-8 transition-all"
              >
                Browse Prompt Library
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
