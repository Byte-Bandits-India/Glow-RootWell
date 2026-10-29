import { NextResponse } from "next/server";
import { client, ensureDbInitialized } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await ensureDbInitialized();
    const res = await client.execute(`
      SELECT 
        category, 
        category_label, 
        COUNT(*) as count,
        GROUP_CONCAT(DISTINCT subtopic) as subtopics
      FROM prompts 
      WHERE is_active = 1 
      GROUP BY category, category_label 
      ORDER BY count DESC
    `);

    const categories = (res.rows as any[]).map((r) => ({
      key: r.category as string,
      label: (r.category_label as string) || (r.category as string),
      count: Number(r.count || 0),
      subtopics: r.subtopics ? String(r.subtopics).split(",") : [],
    }));

    return NextResponse.json({ categories });
  } catch (error: any) {
    console.error("GET /api/categories error:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}

