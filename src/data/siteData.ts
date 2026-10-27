export interface ShowcaseSlide {
  title: string;
  points: string[];
  tag: string;
  subtag: string;
  gradientA: string;
  gradientB: string;
}

export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    title: "Written by experts, ready to paste",
    points: [
      "Built on real clinical & wellness frameworks",
      "Copy, paste and get clear personalized guidance",
      "Eliminates trial-and-error & conflicting internet blogs",
    ],
    tag: "Expert-crafted",
    subtag: "Skin, gut, nutrition & fitness",
    gradientA: "#BFE3CF",
    gradientB: "#8FD0B5",
  },
  {
    title: "Smarter answers from the same AI",
    points: [
      "Structured prompts interview you about your biology first",
      "Uncovers context that vague one-line questions miss",
      "Tested seamlessly across ChatGPT, Claude, Gemini & Copilot",
    ],
    tag: "Deeper answers",
    subtag: "Shaped around your personal biomarkers",
    gradientA: "#E9E2B4",
    gradientB: "#D6C77C",
  },
  {
    title: "From question to plan in 60 seconds",
    points: [
      "One tailored prompt delivers one comprehensive plan",
      "For barrier repair, bloating triggers, macros, or workouts",
      "Save ₹2,000+ per consultation and hours of research",
    ],
    tag: "Ready in 60s",
    subtag: "Actionable routines without the wait",
    gradientA: "#F2D5C9",
    gradientB: "#E5AE9B",
  },
  {
    title: "Made with your health in mind",
    points: [
      "Every prompt reviewed for physiological safety & accuracy",
      "Empowers you to prepare articulate doctor visit questions",
      "Careful lifestyle support designed to complement real care",
    ],
    tag: "Reviewed prompts",
    subtag: "Safe, responsible & evidence-based",
    gradientA: "#C4DCE6",
    gradientB: "#8FB8CB",
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  audience: string;
  priceInr: string;
  priceUsd: string;
  cadence: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Pack",
    description: "Your effortless first step. Try it risk-free and feel the difference one prompt can make.",
    audience: "For curious beginners ready to test the waters",
    priceInr: "₹199",
    priceUsd: "$2.50",
    cadence: "one-time",
    features: [
      "25 hand-picked prompts for skin & gut",
      "Personalised answers in under 60 seconds",
      "Copy-paste format, zero learning curve",
      "Quick-start prompt primer guide included",
      "Instant lifetime file access",
    ],
    ctaText: "Start for just ₹199",
  },
  {
    id: "pro",
    name: "Pro Prompt Library",
    description: "The complete transformation toolkit. 500+ proven prompts. One purchase. Unlimited results.",
    audience: "Best value, for women & coaches who want it all",
    priceInr: "₹1,999",
    priceUsd: "$24",
    cadence: "one-time",
    popular: true,
    badge: "Most popular",
    features: [
      "500+ prompts: skin, gut, nutrition & fitness",
      "Advanced clinical personalisation frameworks",
      "Coach-ready scripts & client intake templates",
      "Lifetime updates at no extra cost",
      "Searchable online dashboard + PDF/Text files",
      "Priority WhatsApp support community",
    ],
    ctaText: "Get the full library →",
  },
  {
    id: "membership",
    name: "Monthly Membership",
    description: "Stay ahead. Fresh prompts monthly, private coaching, and a community of wellness pros.",
    audience: "For coaches & power users scaling fast",
    priceInr: "₹499",
    priceUsd: "$6",
    cadence: "/month",
    features: [
      "Everything in the Pro Library",
      "30+ new prompts dropped monthly",
      "Client-ready templates & workflows",
      "Monthly 1-on-1 prompt coaching call",
      "Private community of wellness coaches",
      "Commercial use license included",
    ],
    ctaText: "Join the membership",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Which AI tools do the prompts work with?",
    answer: "All of them. The prompts are pure text frameworks, engineered to work flawlessly in ChatGPT (Free & Plus), Claude 3.5 Sonnet, Google Gemini, Microsoft Copilot, Perplexity, and open-source models like Llama 3.",
  },
  {
    question: "Do I need a paid AI subscription to use this?",
    answer: "No! All prompts work exceptionally well on free tiers of ChatGPT and Claude. Paid AI models offer slightly deeper reasoning, but free models deliver outstanding, personalized routines using our structured prompts.",
  },
  {
    question: "Is this medical advice?",
    answer: "No. Rootwell prompts are designed for lifestyle education, daily wellness organization, meal planning, and appointment preparation. They do not diagnose or treat medical conditions and do not replace a licensed physician.",
  },
  {
    question: "How does the 7-day money-back guarantee work?",
    answer: "We stand behind our library 100%. If you try the prompts and don't feel they transformed your AI responses within 7 days, email support@rootwell.ai and we will promptly refund your payment in full, no questions asked.",
  },
  {
    question: "How do I receive updates to the library?",
    answer: "Pro purchasers receive instant access to this online portal where updates are reflected live, as well as an email notification whenever fresh prompt collections are added.",
  },
  {
    question: "Can wellness coaches use these prompts for clients?",
    answer: "Yes! Both the Pro Library and Monthly Membership include coach-ready templates and commercial rights to generate plans and client intakes for your paying clients.",
  },
];

export const TRUST_MODELS = [
  "ChatGPT",
  "Claude 3.5",
  "Google Gemini",
  "Microsoft Copilot",
  "Perplexity",
  "Llama 3",
  "DeepSeek",
];
