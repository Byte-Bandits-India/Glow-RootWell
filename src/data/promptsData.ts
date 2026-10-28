export type PromptCategory =
  | "fat_loss"
  | "sales"
  | "content"
  | "delivery"
  | "productivity";

export type PromptBundle = "free" | "starter" | "pro";

export interface PromptItem {
  id: string;
  slug?: string;
  title: string;
  category: PromptCategory;
  categoryLabel?: string;
  subtopic?: string;
  bundle: PromptBundle;
  serialNo?: string;
  updated: string;
  description?: string;
  purpose?: string;
  outcome?: string;
  outputFormat?: string;
  timeSaved?: string;
  relevanceScore?: string;
  utilityCadence?: string;
  revenuePotential?: string;
  notes?: string;
  role?: string;
  promptText: string;
  followUpPrompt?: string;
  tags?: string[];
  duration?: string;
  isOwned?: boolean;
}

export const CATEGORIES: Record<
  PromptCategory,
  { label: string; count: number; description: string; icon: string; tintBg: string; tintText: string }
> = {
  fat_loss: {
    label: "Fat Loss & Metabolism",
    count: 74,
    description: "Metabolic reset, stubborn fat, hormonal optimization & personalized strategies",
    icon: "Activity",
    tintBg: "#FCE7E1",
    tintText: "#8A3B25",
  },
  sales: {
    label: "Sales & Conversion",
    count: 80,
    description: "Instagram soft-selling, story selling, lead magnets & consultation scripts",
    icon: "TrendingUp",
    tintBg: "#F9EBBF",
    tintText: "#6E5211",
  },
  content: {
    label: "Content & Brand",
    count: 80,
    description: "Storytelling, authority posts, high-converting hooks & distribution",
    icon: "Sparkles",
    tintBg: "#EAEFFD",
    tintText: "#2E3F9B",
  },
  delivery: {
    label: "Client Transformation",
    count: 80,
    description: "Weekly check-ins, accountability systems, journey mapping & result tracking",
    icon: "HeartHandshake",
    tintBg: "#DDEED0",
    tintText: "#2C541B",
  },
  productivity: {
    label: "Productivity & Focus",
    count: 80,
    description: "Consistency systems, decision frameworks, time blocking & burnout prevention",
    icon: "Clock",
    tintBg: "#D1EBE2",
    tintText: "#15584A",
  },
};

export const BUNDLES: Record<PromptBundle, { label: string; badge: string; color: string; desc: string }> = {
  free: {
    label: "Free",
    badge: "Free Sample",
    color: "bg-[#E6F4EA] text-[#1E7A46] border-[#BCE4C9]",
    desc: "Immediately copyable & ready to use",
  },
  starter: {
    label: "Starter",
    badge: "Starter Pack",
    color: "bg-[#EAEFFD] text-[#3445A2] border-[#C4D2FB]",
    desc: "Included with Starter Pack (₹199)",
  },
  pro: {
    label: "Pro",
    badge: "Pro Library",
    color: "bg-[#FDF0CE] text-[#825300] border-[#F6DC95]",
    desc: "Unlocks with Full Pro Access (₹1,999)",
  },
};
