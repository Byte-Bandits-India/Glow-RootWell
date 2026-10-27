"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PromptCard } from "@/components/shared/PromptCard";
import { PromptModal } from "@/components/shared/PromptModal";
import { EmptyState } from "@/components/shared/EmptyState";
import {
  PROMPTS,
  CATEGORIES,
  BUNDLES,
  PromptCategory,
  PromptBundle,
  PromptItem,
} from "@/data/promptsData";
import {
  Search,
  LayoutGrid,
  List,
  Sparkles,
  HeartHandshake,
  Apple,
  Activity,
  X,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

function LibraryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") as PromptCategory | null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | "all">(
    initialCategory || "all"
  );
  const [selectedBundle, setSelectedBundle] = useState<PromptBundle | "all">("all");
  const [sortBy, setSortBy] = useState<"new" | "old" | "az">("new");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalPrompt, setActiveModalPrompt] = useState<PromptItem | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROMPTS.length };
    PROMPTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Bundle counts
  const bundleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    PROMPTS.forEach((p) => {
      counts[p.bundle] = (counts[p.bundle] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered & sorted prompts
  const filteredPrompts = useMemo(() => {
    let result = PROMPTS.filter((p) => {
      const matchCat =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchBundle =
        selectedBundle === "all" || p.bundle === selectedBundle;
      const matchQuery =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCat && matchBundle && matchQuery;
    });

    result.sort((a, b) => {
      if (sortBy === "az") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "old") {
        return a.updated.localeCompare(b.updated);
      }
      return b.updated.localeCompare(a.updated);
    });

    return result;
  }, [searchQuery, selectedCategory, selectedBundle, sortBy]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedBundle !== "all";

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBundle("all");
    setSortBy("new");
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "skin":
        return <Sparkles className="w-4 h-4 text-[#8A3B25]" />;
      case "gut":
        return <HeartHandshake className="w-4 h-4 text-[#2C541B]" />;
      case "nutrition":
        return <Apple className="w-4 h-4 text-[#6E5211]" />;
      case "fitness":
        return <Activity className="w-4 h-4 text-[#15584A]" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--color-background)]">
      {/* Library Hero Banner */}
      <div className="bg-[var(--color-secondary)]/35 border-b border-[var(--color-border)] py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block">
              Searchable Knowledge Base
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text-primary)]">
              The Rootwell Prompt Library
            </h1>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Explore 500+ expert-crafted wellness prompts across skin, gut microbiome, nutrition, and fitness. Test free prompts or unlock the complete Pro vault.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Filter & Grid Workspace */}
      <Container className="py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Filter Sidebar */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            {/* Filter by Bundle Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] px-2 mb-2">
                Access Level
              </h3>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setSelectedBundle("all")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedBundle === "all"
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)]"
                  }`}
                >
                  <span>All Prompts</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      selectedBundle === "all"
                        ? "bg-white/20 text-white"
                        : "bg-[var(--color-background)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {PROMPTS.length}
                  </span>
                </button>

                {(Object.keys(BUNDLES) as PromptBundle[]).map((bundleKey) => {
                  const b = BUNDLES[bundleKey];
                  const isSelected = selectedBundle === bundleKey;
                  return (
                    <button
                      key={bundleKey}
                      type="button"
                      onClick={() =>
                        setSelectedBundle(
                          isSelected ? "all" : bundleKey
                        )
                      }
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[var(--color-primary)] text-white"
                          : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{b.label}</span>
                      </div>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-[var(--color-background)] text-[var(--color-text-secondary)]"
                        }`}
                      >
                        {bundleCounts[bundleKey] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter by Clinical Category Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] px-2 mb-2">
                Clinical Categories
              </h3>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)]"
                  }`}
                >
                  <span>All Categories</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      selectedCategory === "all"
                        ? "bg-white/20 text-white"
                        : "bg-[var(--color-background)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {PROMPTS.length}
                  </span>
                </button>

                {(Object.keys(CATEGORIES) as PromptCategory[]).map((catKey) => {
                  const cat = CATEGORIES[catKey];
                  const isSelected = selectedCategory === catKey;
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(
                          isSelected ? "all" : catKey
                        )
                      }
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[var(--color-primary)] text-white"
                          : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: cat.tintBg,
                          }}
                        >
                          {getCategoryIcon(catKey)}
                        </span>
                        <span>{cat.label}</span>
                      </div>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-[var(--color-background)] text-[var(--color-text-secondary)]"
                        }`}
                      >
                        {categoryCounts[catKey] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Pricing Upsell Card */}
            <div className="rounded-2xl bg-[var(--color-secondary)] p-5 border border-[var(--color-border-sage)] space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] block">
                Unlock Complete Access
              </span>
              <h4 className="font-heading text-lg font-semibold text-[var(--color-primary)] leading-snug">
                Get the full 500+ prompt database
              </h4>
              <p className="text-xs text-[var(--color-text-primary)] opacity-85 leading-relaxed">
                Includes coach templates, lifetime updates, and WhatsApp community.
              </p>
              <Button href="/#pricing" variant="primary" size="sm" fullWidth>
                View Plans (From ₹199)
              </Button>
            </div>
          </aside>

          {/* Right Main Search and Prompt Results */}
          <main className="lg:col-span-9 space-y-6">
            {/* Search, Sorting & View Toggle Controls Bar */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search Bar Input */}
              <div className="flex-1 relative">
                <Input
                  type="search"
                  placeholder="Search by symptom, skin concern, meal, habit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-4 h-4" />}
                  rightIcon={
                    searchQuery ? (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="p-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
                        aria-label="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    ) : null
                  }
                  className="bg-[var(--color-background)] border-transparent focus:bg-white"
                />
              </div>

              {/* Sorting & Layout Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <Select
                  options={[
                    { label: "Newest first", value: "new" },
                    { label: "Oldest first", value: "old" },
                    { label: "Alphabetical (A to Z)", value: "az" },
                  ]}
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "new" | "old" | "az")
                  }
                  className="py-2.5 text-xs font-semibold"
                />

                {/* View Switcher: Grid vs List */}
                <div className="flex items-center rounded-xl border border-[var(--color-border)] p-1 bg-[var(--color-background)]">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-white text-[var(--color-primary)] shadow-xs"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "list"
                        ? "bg-white text-[var(--color-primary)] shadow-xs"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters Summary Strip */}
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Showing {filteredPrompts.length} of {PROMPTS.length} prompts
                </span>

                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">
                    Category: {CATEGORIES[selectedCategory].label}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="cursor-pointer hover:opacity-75"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedBundle !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">
                    Tier: {BUNDLES[selectedBundle].label}
                    <button
                      onClick={() => setSelectedBundle("all")}
                      className="cursor-pointer hover:opacity-75"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {searchQuery.trim() !== "" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">
                    &quot;{searchQuery}&quot;
                    <button
                      onClick={() => setSearchQuery("")}
                      className="cursor-pointer hover:opacity-75"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-[var(--color-accent)] hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Prompt Cards Grid / List */}
            {filteredPrompts.length === 0 ? (
              <EmptyState
                title="No prompts match your filter"
                description="We couldn't find any prompts matching your exact combination. Try clearing your filters or searching for terms like 'acne', 'gut', 'macros', or 'hormones'."
                actionText="Reset All Filters"
                onAction={clearAllFilters}
              />
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-3"
                }
              >
                {filteredPrompts.map((prompt) => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    viewMode={viewMode}
                    onSelect={(p) => setActiveModalPrompt(p)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </Container>

      {/* Interactive Modal */}
      <PromptModal
        prompt={activeModalPrompt}
        isOpen={Boolean(activeModalPrompt)}
        onClose={() => setActiveModalPrompt(null)}
      />
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
          <div className="w-8 h-8 rounded-full border-2 border-[var(--color-accent)] border-t-transparent animate-spin" />
        </div>
      }
    >
      <LibraryContent />
    </Suspense>
  );
}
