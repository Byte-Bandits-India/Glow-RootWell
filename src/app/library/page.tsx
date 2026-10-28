"use client";

import React, { useState, useMemo, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { PromptCard } from "@/components/shared/PromptCard";
import { PromptModal } from "@/components/shared/PromptModal";
import { EmptyState } from "@/components/shared/EmptyState";
import { useAuth } from "@/context/AuthContext";
import { hasAccessToBundle } from "@/lib/plans";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
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
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock,
} from "lucide-react";

function LibraryContent() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") as PromptCategory | null;

  const [promptsList, setPromptsList] = useState<PromptItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dbCounts, setDbCounts] = useState<{
    total: number;
    owned: number;
    categories: Record<string, number>;
    bundles: Record<string, number>;
  }>({
    total: 394,
    owned: 40,
    categories: {},
    bundles: { free: 40, starter: 16, pro: 338 },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | "all">(
    initialCategory || "all"
  );
  const [selectedBundle, setSelectedBundle] = useState<PromptBundle | "all" | "owned">("all");
  const [sortBy, setSortBy] = useState<"new" | "old" | "az">("new");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalPrompt, setActiveModalPrompt] = useState<PromptItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const fetchPrompts = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/prompts");
      if (res.ok) {
        const data = await res.json();
        if (data.prompts && data.prompts.length > 0) {
          setPromptsList(data.prompts);
        }
        if (data.counts) {
          setDbCounts(data.counts);
        }
      }
    } catch (err) {
      console.error("Failed to load prompts from API:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrompts();
  }, [fetchPrompts, user?.plan]);

  const basePrompts = promptsList;

  // Helper: check if active user owns access to this prompt
  const isPromptOwned = (p: PromptItem) => {
    if (typeof p.isOwned === "boolean") return p.isOwned;
    return p.bundle === "free" || hasAccessToBundle(user?.plan, p.bundle);
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    if (dbCounts.categories && Object.keys(dbCounts.categories).length > 0) {
      return dbCounts.categories;
    }
    const counts: Record<string, number> = { all: basePrompts.length };
    basePrompts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [dbCounts.categories, basePrompts]);

  // Bundle counts
  const bundleCounts = useMemo(() => {
    if (dbCounts.bundles && Object.keys(dbCounts.bundles).length > 0) {
      return dbCounts.bundles;
    }
    const counts: Record<string, number> = {};
    basePrompts.forEach((p) => {
      counts[p.bundle] = (counts[p.bundle] || 0) + 1;
    });
    return counts;
  }, [dbCounts.bundles, basePrompts]);

  // Total owned prompts count for current user
  const ownedCount = useMemo(() => {
    if (dbCounts.owned !== undefined) return dbCounts.owned;
    return basePrompts.filter(isPromptOwned).length;
  }, [dbCounts.owned, basePrompts, user?.plan]);

  // Filtered & sorted prompts
  const filteredPrompts = useMemo(() => {
    let result = basePrompts.filter((p) => {
      const matchCat =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchBundle =
        selectedBundle === "all"
          ? true
          : selectedBundle === "owned"
          ? isPromptOwned(p)
          : p.bundle === selectedBundle;
      const matchQuery =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.purpose && p.purpose.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.subtopic && p.subtopic.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.promptText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

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
  }, [basePrompts, searchQuery, selectedCategory, selectedBundle, sortBy, user?.plan]);

  // Reset to first page when search, category, or bundle filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBundle, sortBy]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredPrompts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPrompts = useMemo(() => {
    return filteredPrompts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPrompts, startIndex, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const container = document.getElementById("prompt-results-top");
    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedBundle !== "all";

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBundle("all");
    setSortBy("new");
    setCurrentPage(1);
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "fat_loss":
        return <Activity className="w-4 h-4 text-[#8A3B25]" />;
      case "sales":
        return <TrendingUp className="w-4 h-4 text-[#6E5211]" />;
      case "content":
        return <Sparkles className="w-4 h-4 text-[#2E3F9B]" />;
      case "delivery":
        return <HeartHandshake className="w-4 h-4 text-[#2C541B]" />;
      case "productivity":
        return <Clock className="w-4 h-4 text-[#15584A]" />;
      case "skin":
        return <Sparkles className="w-4 h-4 text-[#8A3B25]" />;
      case "gut":
        return <HeartHandshake className="w-4 h-4 text-[#2C541B]" />;
      case "nutrition":
        return <Apple className="w-4 h-4 text-[#6E5211]" />;
      case "fitness":
        return <Activity className="w-4 h-4 text-[#15584A]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#2C541B]" />;
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
              Explore {dbCounts.total || basePrompts.length}+ clinical & business transformation prompts. Test free samples or unlock the complete Pro vault.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Filter & Grid Workspace */}
      <Container className="py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Filter Sidebar */}
          <aside
            data-lenis-prevent
            className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto overscroll-contain lg:pr-2 pb-12 sidebar-scroll"
          >
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
                    {dbCounts.total || basePrompts.length}
                  </span>
                </button>

                {/* Owned Prompts Filter */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedBundle(
                      selectedBundle === "owned" ? "all" : "owned"
                    )
                  }
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedBundle === "owned"
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)]"
                  }`}
                >
                  <span>Owned</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      selectedBundle === "owned"
                        ? "bg-white/20 text-white"
                        : "bg-[var(--color-background)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {ownedCount}
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
                    {dbCounts.total || basePrompts.length}
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
              <Button href="/pricing" variant="primary" size="sm" fullWidth>
                View Plans (From ₹199)
              </Button>
            </div>
          </aside>

          {/* Right Main Search and Prompt Results */}
          <main className="lg:col-span-9 space-y-5" id="prompt-results-top">
            {/* Quick Access Filter Tabs (Accessible on Mobile & Desktop) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
              <button
                type="button"
                onClick={() => setSelectedBundle("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedBundle === "all"
                    ? "bg-[#0B2C13] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                All Prompts ({dbCounts.total || basePrompts.length})
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedBundle(
                    selectedBundle === "owned" ? "all" : "owned"
                  )
                }
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedBundle === "owned"
                    ? "bg-[#0B2C13] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Owned ({ownedCount})
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedBundle(
                    selectedBundle === "free" ? "all" : "free"
                  )
                }
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedBundle === "free"
                    ? "bg-[#0B2C13] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Free Samples ({bundleCounts.free || 0})
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedBundle(
                    selectedBundle === "starter" ? "all" : "starter"
                  )
                }
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedBundle === "starter"
                    ? "bg-[#0B2C13] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Starter ({bundleCounts.starter || 0})
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedBundle(
                    selectedBundle === "pro" ? "all" : "pro"
                  )
                }
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedBundle === "pro"
                    ? "bg-[#0B2C13] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Pro Vault ({bundleCounts.pro || 0})
              </button>
            </div>

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
                  Showing {filteredPrompts.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredPrompts.length)} of {filteredPrompts.length} prompts
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

                {selectedBundle === "owned" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">
                    Tier: Owned
                    <button
                      onClick={() => setSelectedBundle("all")}
                      className="cursor-pointer hover:opacity-75"
                      aria-label="Remove owned filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedBundle !== "all" && selectedBundle !== "owned" && (
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
                {paginatedPrompts.map((prompt) => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    viewMode={viewMode}
                    isOwned={isPromptOwned(prompt)}
                    onSelect={(p) => setActiveModalPrompt(p)}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-2">
                  <span>Show</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-2.5 py-1.5 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] font-semibold text-xs cursor-pointer focus:outline-none focus:border-[var(--color-accent)] shadow-2xs"
                  >
                    <option value={12}>12 per page</option>
                    <option value={24}>24 per page</option>
                    <option value={48}>48 per page</option>
                  </select>
                  <span className="hidden sm:inline">
                    (Page {currentPage} of {totalPages})
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap justify-center">
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-white font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background)] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">Prev</span>
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((page, idx) => {
                    if (page === "...") {
                      return (
                        <span key={`ellipsis-${idx}`} className="px-2 py-1 text-gray-400 select-none">
                          …
                        </span>
                      );
                    }
                    const isCurrent = page === currentPage;
                    return (
                      <button
                        key={`page-${page}`}
                        type="button"
                        onClick={() => handlePageChange(page as number)}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`min-w-[32px] h-8 px-2 rounded-lg font-semibold text-xs transition-all cursor-pointer ${
                          isCurrent
                            ? "bg-[#0B2C13] text-white shadow-xs"
                            : "border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-background)] shadow-2xs"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-white font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background)] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                    aria-label="Next page"
                  >
                    <span className="hidden xs:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </Container>

      {/* Library FAQ Section */}
      <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-16">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block">
              Library FAQ
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)]">
              Frequently Asked Questions About the Library
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              Quick help on searching, copying, and applying prompts in your daily routine.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[var(--color-border)]">
            <Accordion type="single" collapsible defaultValue="lib-faq-0" className="w-full">
              <AccordionItem value="lib-faq-0">
                <AccordionTrigger iconStyle="plus">
                  How do I copy and use these prompts with my AI tool?
                </AccordionTrigger>
                <AccordionContent>
                  Click &ldquo;View Prompt&rdquo; on any prompt card above, then click the copy button. Paste the entire prompt directly into ChatGPT (Free or Plus), Claude 3.5, or Google Gemini. The prompt will automatically guide the AI to interview you about your biological context first before generating your customized plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lib-faq-1">
                <AccordionTrigger iconStyle="plus">
                  Are the free sample prompts complete?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! All free sample prompts are fully complete clinical frameworks without missing sections. You can test them immediately to see how structured prompts outperform vague one-line questions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lib-faq-2">
                <AccordionTrigger iconStyle="plus">
                  How do I unlock the complete 500+ prompt database?
                </AccordionTrigger>
                <AccordionContent>
                  You can unlock permanent lifetime access to all 500+ prompts, coach intake scripts, and WhatsApp community by upgrading to the Pro Prompt Library on our pricing page for a one-time fee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lib-faq-3">
                <AccordionTrigger iconStyle="plus">
                  Can I filter by specific ingredients, conditions, or goals?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Use the search bar above to type any skin concern (e.g., &ldquo;acne&rdquo;, &ldquo;barrier repair&rdquo;), digestive trigger (e.g., &ldquo;FODMAP&rdquo;, &ldquo;bloating&rdquo;), or dietary preference to instantly filter relevant clinical prompts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </div>

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
