// Dynamic category type - backed by database rows, not hardcoded constants
export type PromptCategory = string;

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

export interface CategoryMeta {
  key: string;
  label: string;
  count: number;
  description: string;
  icon: string;
  tintBg: string;
  tintText: string;
  subtopics?: string[];
}

/**
 * Dynamic helper to generate visual styling & human label for any category
 * returned from the backend APIs, without hardcoding static data.
 */
export function getCategoryMeta(
  key: string,
  label?: string,
  count: number = 0
): CategoryMeta {
  const STYLES: Record<
    string,
    { tintBg: string; tintText: string; icon: string; desc: string }
  > = {
    fat_loss: {
      tintBg: "#FCE7E1",
      tintText: "#8A3B25",
      icon: "Activity",
      desc: "Metabolic reset, stubborn fat & personalized fat loss systems",
    },
    sales: {
      tintBg: "#F9EBBF",
      tintText: "#6E5211",
      icon: "TrendingUp",
      desc: "Client conversion scripts, soft-selling & consultations",
    },
    content: {
      tintBg: "#EAEFFD",
      tintText: "#2E3F9B",
      icon: "Sparkles",
      desc: "Authority storytelling, content hooks & personal branding",
    },
    delivery: {
      tintBg: "#DDEED0",
      tintText: "#2C541B",
      icon: "HeartHandshake",
      desc: "Client transformation, accountability & weekly check-in systems",
    },
    productivity: {
      tintBg: "#D1EBE2",
      tintText: "#15584A",
      icon: "Clock",
      desc: "Consistency systems, decision frameworks & time management",
    },
    skin: {
      tintBg: "#FCE7E1",
      tintText: "#8A3B25",
      icon: "Sparkles",
      desc: "Skin barrier repair, hormonal protocols & derma wellness",
    },
    gut: {
      tintBg: "#DDEED0",
      tintText: "#2C541B",
      icon: "HeartHandshake",
      desc: "Microbiome reset, bloating relief & digestive wellness",
    },
    nutrition: {
      tintBg: "#F9EBBF",
      tintText: "#6E5211",
      icon: "Apple",
      desc: "Nutrition systems, macro planning & metabolic health",
    },
    fitness: {
      tintBg: "#D1EBE2",
      tintText: "#15584A",
      icon: "Activity",
      desc: "Functional fitness, conditioning & mobility frameworks",
    },
  };

  const matchedStyle = STYLES[key] || {
    tintBg: "#EBF2E4",
    tintText: "#14331C",
    icon: "Sparkles",
    desc: "Evidence-based wellness and clinical prompts",
  };

  const humanLabel =
    label ||
    key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    key,
    label: humanLabel,
    count,
    description: matchedStyle.desc,
    icon: matchedStyle.icon,
    tintBg: matchedStyle.tintBg,
    tintText: matchedStyle.tintText,
  };
}

/**
 * Dynamic Proxy that provides safe fallback access for any category key.
 * Never throws TypeError or returns undefined, ensuring components never crash
 * while category data loads dynamically from the backend APIs.
 */
export const CATEGORIES: Record<string, CategoryMeta> = new Proxy(
  {} as Record<string, CategoryMeta>,
  {
    get: (_target, prop: string | symbol) => {
      if (typeof prop !== "string") return undefined;
      return getCategoryMeta(prop);
    },
    has: () => true,
  }
);

export const BUNDLES: Record<
  PromptBundle,
  { label: string; badge: string; color: string; desc: string }
> = {
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
