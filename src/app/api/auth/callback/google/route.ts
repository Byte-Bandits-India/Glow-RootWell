import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db, ensureDbInitialized } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { createSessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { connection } from "next/server";

export async function GET(req: NextRequest) {
  await connection();
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  const storedState = req.cookies.get("google_oauth_state")?.value;

  if (error || !code || (storedState && state !== storedState)) {
    return NextResponse.redirect(
      new URL("/login?error=oauth_cancelled", req.url)
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri =
    process.env.GOOGLE_REDIRECT_URI ||
    `${req.nextUrl.origin}/api/auth/callback/google`;

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(
      new URL("/login?error=missing_credentials", req.url)
    );
  }

  try {
    // 1. Exchange authorization code for Google access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.error("Google token exchange error:", errText);
      return NextResponse.redirect(new URL("/login?error=token_failed", req.url));
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // 2. Fetch user profile from Google UserInfo endpoint
    const profileRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!profileRes.ok) {
      return NextResponse.redirect(new URL("/login?error=profile_failed", req.url));
    }

    const profile = await profileRes.json();
    const { id: googleId, email, name, picture } = profile;

    if (!email) {
      return NextResponse.redirect(new URL("/login?error=email_missing", req.url));
    }

    await ensureDbInitialized();

    const cleanEmail = email.toLowerCase().trim();

    // 3. Look up existing user in SQLite
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, cleanEmail))
      .limit(1);

    let userId: string;
    let finalName: string;
    let finalAvatar: string | null = picture || null;
    const now = new Date();

    if (existing.length > 0) {
      const existingUser = existing[0];
      userId = existingUser.id;
      finalName = existingUser.name || name;
      finalAvatar = picture || existingUser.avatarUrl;

      // Update provider ID & avatar if needed
      await db
        .update(users)
        .set({
          avatarUrl: finalAvatar,
          providerId: googleId,
          updatedAt: now,
        })
        .where(eq(users.id, userId));
    } else {
      userId = crypto.randomUUID();
      finalName = name || "Rootwell Member";

      // Insert new Google user into SQLite
      await db.insert(users).values({
        id: userId,
        name: finalName,
        email: cleanEmail,
        passwordHash: null,
        avatarUrl: finalAvatar,
        provider: "google",
        providerId: googleId,
        createdAt: now,
        updatedAt: now,
      });
    }

    // 4. Create session token
    const sessionToken = await createSessionToken({
      id: userId,
      name: finalName,
      email: cleanEmail,
      avatarUrl: finalAvatar,
      provider: "google",
    });

    // 5. Set session cookie and redirect to prompt library
    const response = NextResponse.redirect(new URL("/library", req.url));

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    // Clean up temporary OAuth state cookie
    response.cookies.delete("google_oauth_state");

    return response;
  } catch (error) {
    console.error("Google OAuth callback exception:", error);
    return NextResponse.redirect(new URL("/login?error=oauth_exception", req.url));
  }
}
