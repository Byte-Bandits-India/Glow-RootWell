import { NextResponse } from "next/server";
import { db, ensureDbInitialized } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { sendContactEmails } from "@/lib/email";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    await ensureDbInitialized();

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload. Expected JSON object." },
        { status: 400 }
      );
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const category = String(body.category || "General Support").trim();
    const aiTool = String(body.aiTool || "ChatGPT").trim();
    const message = String(body.message || "").trim();

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 5) {
      return NextResponse.json(
        { error: "Please provide a detailed message (minimum 5 characters)." },
        { status: 400 }
      );
    }

    const messageId = `msg_${crypto.randomUUID()}`;
    const now = new Date();

    // 1. Store message in SQLite / Cloudflare D1 database
    try {
      await db.insert(contactMessages).values({
        id: messageId,
        name,
        email,
        category,
        aiTool,
        message,
        status: "new",
        adminNotified: false,
        userNotified: false,
        createdAt: now,
      });
    } catch (dbError) {
      console.error("[Contact API] Failed to store message in DB:", dbError);
      // We continue to attempt sending the email even if DB insertion encountered an issue
    }

    // 2. Dispatch emails to both User and Admin
    const emailResult = await sendContactEmails({
      name,
      email,
      category,
      aiTool,
      message,
    });

    // 3. Update DB flags if insertion succeeded
    try {
      await db
        .update(contactMessages)
        .set({
          adminNotified: emailResult.adminSuccess,
          userNotified: emailResult.userSuccess,
        })
        .where(eq(contactMessages.id, messageId));
    } catch {}

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received. A confirmation email has been dispatched.",
        id: messageId,
        delivery: {
          adminNotified: emailResult.adminSuccess,
          userNotified: emailResult.userSuccess,
          provider: emailResult.provider,
          adminError: emailResult.adminError,
          userError: emailResult.userError,
        },
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message. Please try again." },
      { status: 500 }
    );
  }
}

