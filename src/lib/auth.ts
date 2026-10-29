import { SignJWT, jwtVerify } from "jose";
import { hash, compare } from "bcrypt-ts";

const JWT_SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "avyaya-super-secure-jwt-secret-key-32chars-min-change-in-prod"
);

export const AUTH_COOKIE_NAME = "avyaya_session";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string | null;
  provider?: string;
  plan?: string;
}

/**
 * Hashes a plaintext password using bcrypt-ts (100% Web Crypto / Edge compatible)
 */
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

/**
 * Compares a plaintext password against a stored bcrypt hash
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  return compare(password, storedHash);
}

/**
 * Creates and signs a secure JWT session token
 */
export async function createSessionToken(user: SessionUser): Promise<string> {
  return new SignJWT({
    id: user.id,
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl || null,
    provider: user.provider || "credentials",
    plan: user.plan || "free",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d") // 30 days valid
    .sign(JWT_SECRET);
}

/**
 * Verifies a JWT session token and returns the decoded payload, or null if invalid
 */
export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      id: payload.id as string,
      name: payload.name as string,
      email: payload.email as string,
      avatarUrl: (payload.avatarUrl as string) || null,
      provider: (payload.provider as string) || "credentials",
      plan: (payload.plan as string) || "free",
    };
  } catch {
    return null;
  }
}
