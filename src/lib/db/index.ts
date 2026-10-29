import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "./schema";

let _client: Client | null = null;
let _db: LibSQLDatabase<typeof schema> | null = null;

function getClientInstance(): Client {
  if (!_client) {
    const dbUrl = process.env.DATABASE_URL || "file:rootwell.db";
    _client = createClient({
      url: dbUrl,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });
  }
  return _client;
}

export const client = new Proxy({} as Client, {
  get(_target, prop, receiver) {
    const instance = getClientInstance();
    const value = Reflect.get(instance, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export const db = new Proxy({} as LibSQLDatabase<typeof schema>, {
  get(_target, prop, receiver) {
    if (!_db) {
      _db = drizzle(getClientInstance(), { schema });
    }
    const value = Reflect.get(_db, prop, receiver);
    return typeof value === "function" ? value.bind(_db) : value;
  },
});

let isInitialized = false;

/**
 * Ensures SQLite tables and indices exist in the database without requiring manual migration scripts.
 */
export async function ensureDbInitialized() {
  if (isInitialized) return;

  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT,
        avatar_url TEXT,
        provider TEXT NOT NULL DEFAULT 'credentials',
        provider_id TEXT,
        plan TEXT NOT NULL DEFAULT 'free',
        plan_activated_at INTEGER,
        plan_expires_at INTEGER,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);

    // Safe column migrations for existing user databases
    try {
      await client.execute("ALTER TABLE users ADD COLUMN plan TEXT NOT NULL DEFAULT 'free'");
    } catch {}
    try {
      await client.execute("ALTER TABLE users ADD COLUMN plan_activated_at INTEGER");
    } catch {}
    try {
      await client.execute("ALTER TABLE users ADD COLUMN plan_expires_at INTEGER");
    } catch {}

    await client.execute(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        token TEXT UNIQUE NOT NULL,
        expires_at INTEGER NOT NULL,
        created_at INTEGER NOT NULL
      );
    `);

    await client.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plan_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        currency TEXT NOT NULL DEFAULT 'INR',
        status TEXT NOT NULL DEFAULT 'created',
        razorpay_order_id TEXT UNIQUE NOT NULL,
        razorpay_payment_id TEXT,
        razorpay_signature TEXT,
        receipt TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
    `);

    await client.execute(`
      CREATE TABLE IF NOT EXISTS prompts (
        id TEXT PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        category_label TEXT NOT NULL,
        subtopic TEXT NOT NULL,
        bundle TEXT NOT NULL DEFAULT 'pro',
        serial_no TEXT,
        prompt_text TEXT NOT NULL,
        follow_up_prompt TEXT,
        purpose TEXT,
        outcome TEXT,
        output_format TEXT,
        time_saved TEXT,
        relevance_score TEXT,
        utility_cadence TEXT,
        revenue_potential TEXT,
        notes TEXT,
        source_sheet TEXT,
        content_hash TEXT,
        sort_order INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_prompts_category ON prompts(category);
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_prompts_bundle ON prompts(bundle);
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_prompts_slug ON prompts(slug);
    `);

    isInitialized = true;
  } catch (error) {
    console.error("Failed to initialize SQLite database tables:", error);
  }
}
