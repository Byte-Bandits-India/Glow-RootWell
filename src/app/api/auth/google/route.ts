import { NextRequest, NextResponse } from "next/server";
import { ensureDbInitialized, db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { createSessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri =
      process.env.GOOGLE_REDIRECT_URI ||
      `${req.nextUrl.origin}/api/auth/callback/google`;
    const rawReturnTo = req.nextUrl.searchParams.get("redirect") || "/";
    const safeReturnTo =
      rawReturnTo.startsWith("/") &&
      !rawReturnTo.startsWith("//") &&
      !rawReturnTo.startsWith("/login") &&
      !rawReturnTo.startsWith("/signup")
        ? rawReturnTo
        : "/";

    // If real Google Client ID is configured, use standard Google OAuth 2.0
    if (clientId) {
      const state = crypto.randomUUID();
      const googleAuthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
      googleAuthUrl.searchParams.set("client_id", clientId);
      googleAuthUrl.searchParams.set("redirect_uri", redirectUri);
      googleAuthUrl.searchParams.set("response_type", "code");
      googleAuthUrl.searchParams.set("scope", "openid profile email");
      googleAuthUrl.searchParams.set("access_type", "offline");
      googleAuthUrl.searchParams.set("prompt", "select_account");
      googleAuthUrl.searchParams.set("state", state);

      const response = NextResponse.redirect(googleAuthUrl.toString());
      response.cookies.set("google_oauth_state", state, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 10 * 60, // 10 minutes
        path: "/",
      });
      if (safeReturnTo !== "/") {
        response.cookies.set("google_oauth_redirect", safeReturnTo, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 10 * 60,
          path: "/",
        });
      }
      return response;
    }

    // Seamless Sandbox/Dev Fallback:
    // If Google OAuth credentials aren't set in environment, create/use verified demo account
    await ensureDbInitialized();

    const mockEmail = "sarah.jenkins@gmail.com";
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, mockEmail))
      .limit(1);

    let userId: string;
    let userName: string;
    let userAvatar: string | null;

    if (existing.length > 0) {
      userId = existing[0].id;
      userName = existing[0].name;
      userAvatar = existing[0].avatarUrl;
    } else {
      userId = crypto.randomUUID();
      userName = "Sarah Jenkins";
      userAvatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80";
      const now = new Date();

      await db.insert(users).values({
        id: userId,
        name: userName,
        email: mockEmail,
        passwordHash: null,
        avatarUrl: userAvatar,
        provider: "google",
        providerId: "google-mock-123456",
        createdAt: now,
        updatedAt: now,
      });
    }

    const token = await createSessionToken({
      id: userId,
      name: userName,
      email: mockEmail,
      avatarUrl: userAvatar,
      provider: "google",
    });

    const response = NextResponse.redirect(new URL(safeReturnTo, req.nextUrl.origin));
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    console.error("Google OAuth error:", error);
    return NextResponse.redirect(new URL("/login?error=oauth_failed", req.nextUrl.origin));
  }
}
