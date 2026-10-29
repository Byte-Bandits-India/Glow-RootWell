import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { hasAccessToBundle } from "@/lib/plans";
import { db, client, ensureDbInitialized } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await ensureDbInitialized();

    // 1. Look up in SQLite database
    const dbRes = await client.execute({
      sql: "SELECT * FROM prompts WHERE id = ? OR slug = ? LIMIT 1",
      args: [id, id],
    });

    if (dbRes.rows.length === 0) {
      return NextResponse.json({ error: "Prompt not found." }, { status: 404 });
    }

    const r = dbRes.rows[0];
    const prompt = {
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
      duration: (r.time_saved as string) || "5–10 mins",
      updated: r.updated_at ? new Date(Number(r.updated_at)).toISOString().split("T")[0] : "2026-10-28",
    };

    if (!prompt) {
      return NextResponse.json({ error: "Prompt not found." }, { status: 404 });
    }

    // 2. Free samples are publicly viewable
    if (prompt.bundle === "free") {
      return NextResponse.json({
        prompt,
        hasAccess: true,
      });
    }

    // 3. Paid prompts require authentication and plan verification
    const token = req.cookies?.get?.(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({
        prompt: {
          ...prompt,
          promptText: "Unlock this clinical prompt by subscribing to Avyaya.",
        },
        hasAccess: false,
        requiredPlan: prompt.bundle,
        requiresAuth: true,
      });
    }

    const sessionUser = await verifySessionToken(token);
    if (!sessionUser) {
      return NextResponse.json({
        prompt: {
          ...prompt,
          promptText: "Unlock this clinical prompt by subscribing to Avyaya.",
        },
        hasAccess: false,
        requiredPlan: prompt.bundle,
        requiresAuth: true,
      });
    }

    await ensureDbInitialized();

    // Fetch fresh plan from database
    const userRecords = await db
      .select({ plan: users.plan })
      .from(users)
      .where(eq(users.id, sessionUser.id))
      .limit(1);

    const activePlan = userRecords.length > 0 ? userRecords[0].plan : sessionUser.plan || "free";
    const canAccess = hasAccessToBundle(activePlan, prompt.bundle);

    if (!canAccess) {
      return NextResponse.json({
        prompt: {
          ...prompt,
          promptText: `This prompt is exclusive to the ${prompt.bundle.toUpperCase()} bundle. Upgrade your plan to unlock full access.`,
        },
        hasAccess: false,
        requiredPlan: prompt.bundle,
        userPlan: activePlan,
      });
    }

    // 3. User is authorized: return complete prompt template
    return NextResponse.json({
      prompt,
      hasAccess: true,
      userPlan: activePlan,
    });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Fetch prompt error:", error);
    return NextResponse.json(
      { error: "Failed to load prompt." },
      { status: 500 }
    );
  }
}
