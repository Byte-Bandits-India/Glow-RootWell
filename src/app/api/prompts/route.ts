import { NextRequest, NextResponse } from "next/server";
import { db, client, ensureDbInitialized } from "@/lib/db";
import { prompts, users } from "@/lib/db/schema";
import { eq, desc, asc, and, like, or } from "drizzle-orm";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { hasAccessToBundle } from "@/lib/plans";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    await ensureDbInitialized();

    const { searchParams } = new URL(req.url);
    const categoryParam = searchParams.get("category") || "all";
    const bundleParam = searchParams.get("bundle") || "all";
    const subtopicParam = searchParams.get("subtopic") || "all";
    const searchParam = (searchParams.get("search") || searchParams.get("q") || "").trim();
    const sortBy = searchParams.get("sortBy") || "sort"; // "sort" | "az" | "new"

    // 1. Resolve user plan for ownership
    let userPlan = "free";
    try {
      const token = req.cookies?.get?.(AUTH_COOKIE_NAME)?.value;
      if (token) {
        const payload = await verifySessionToken(token);
        if (payload?.id) {
          const u = await db
            .select({ plan: users.plan })
            .from(users)
            .where(eq(users.id, payload.id))
            .limit(1);
          if (u.length > 0 && u[0].plan) {
            userPlan = u[0].plan;
          }
        }
      }
    } catch {
      // Gracefully fallback to free plan
    }

    // 2. Fetch all active prompts from database
    const dbRes = await client.execute("SELECT * FROM prompts WHERE is_active = 1 ORDER BY category, sort_order");
    const allRows = dbRes.rows as any[];

    // 3. Compute dynamic categories and counts across the entire catalog
    const categoryMap: Record<string, { key: string; label: string; count: number; subtopics: Set<string> }> = {};
    const categoryCounts: Record<string, number> = { all: allRows.length };
    const bundleCounts: Record<string, number> = { free: 0, starter: 0, pro: 0 };
    let ownedCount = 0;

    for (const r of allRows) {
      const catKey = (r.category as string) || "uncategorized";
      const catLabel = (r.category_label as string) || catKey;
      const sub = r.subtopic as string;
      const bnd = r.bundle as string;

      categoryCounts[catKey] = (categoryCounts[catKey] || 0) + 1;
      if (bnd in bundleCounts) {
        bundleCounts[bnd] = (bundleCounts[bnd] || 0) + 1;
      }

      if (!categoryMap[catKey]) {
        categoryMap[catKey] = {
          key: catKey,
          label: catLabel,
          count: 0,
          subtopics: new Set(),
        };
      }
      categoryMap[catKey].count++;
      if (sub) {
        categoryMap[catKey].subtopics.add(sub);
      }

      const isOwned = bnd === "free" || hasAccessToBundle(userPlan, bnd as any);
      if (isOwned) {
        ownedCount++;
      }
    }

    const categories = Object.values(categoryMap).map((c) => ({
      key: c.key,
      label: c.label,
      count: c.count,
      subtopics: Array.from(c.subtopics),
    }));

    // 4. Apply filters
    let filtered = allRows.map((r) => {
      const isOwned = r.bundle === "free" || hasAccessToBundle(userPlan, r.bundle as any);
      return {
        id: r.id as string,
        slug: r.slug as string,
        title: r.title as string,
        category: r.category as string,
        categoryLabel: r.category_label as string,
        subtopic: r.subtopic as string,
        bundle: r.bundle as "free" | "starter" | "pro",
        serialNo: r.serial_no as string,
        promptText: r.prompt_text as string,
        followUpPrompt: (r.follow_up_prompt as string) || "",
        purpose: (r.purpose as string) || "",
        outcome: (r.outcome as string) || "",
        outputFormat: (r.output_format as string) || "",
        timeSaved: (r.time_saved as string) || "",
        relevanceScore: (r.relevance_score as string) || "",
        utilityCadence: (r.utility_cadence as string) || "",
        revenuePotential: (r.revenue_potential as string) || "",
        notes: (r.notes as string) || "",
        sourceSheet: r.source_sheet as string,
        sortOrder: Number(r.sort_order || 0),
        isOwned,
        updated: r.updated_at ? new Date(Number(r.updated_at)).toISOString().split("T")[0] : "2026-10-28",
      };
    });

    if (categoryParam !== "all") {
      filtered = filtered.filter((p) => p.category === categoryParam);
    }

    if (subtopicParam !== "all") {
      filtered = filtered.filter((p) => p.subtopic === subtopicParam);
    }

    if (bundleParam === "owned") {
      filtered = filtered.filter((p) => p.isOwned);
    } else if (bundleParam !== "all") {
      filtered = filtered.filter((p) => p.bundle === bundleParam);
    }

    if (searchParam) {
      const q = searchParam.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.promptText.toLowerCase().includes(q) ||
          (p.purpose && p.purpose.toLowerCase().includes(q)) ||
          p.subtopic.toLowerCase().includes(q) ||
          (p.notes && p.notes.toLowerCase().includes(q))
      );
    }

    // 5. Apply sorting
    if (sortBy === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "new") {
      filtered.sort((a, b) => b.updated.localeCompare(a.updated));
    }

    return NextResponse.json({
      prompts: filtered,
      categories,
      counts: {
        total: allRows.length,
        filtered: filtered.length,
        owned: ownedCount,
        categories: categoryCounts,
        bundles: bundleCounts,
      },
      userPlan,
    });
  } catch (error: any) {
    console.error("GET /api/prompts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch prompts from database", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}

// Prompt catalog seeding is managed via D1 CLI scripts (npm run d1:seed)
export async function POST() {
  return NextResponse.json(
    { message: "Prompt seeding is performed via local D1 scripts (npm run d1:seed)." },
    { status: 200 }
  );
}
