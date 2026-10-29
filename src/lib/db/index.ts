import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzleLibsql } from "drizzle-orm/libsql";
import { createClient, type Client } from "@libsql/client";
import * as schema from "./schema";

function getCloudflareEnv(): any {
  try {
    const symbol = Symbol.for("__cloudflare-context__");
    const ctx = (globalThis as any)[symbol];
    if (ctx?.env?.DB) {
      return ctx.env;
    }
  } catch {}
  return null;
}

let _cachedD1Db: any = null;
let _cachedLibsqlDb: any = null;
let _cachedLibsqlClient: Client | null = null;

export function getDb(): any {
  const env = getCloudflareEnv();
  if (env?.DB) {
    if (!_cachedD1Db) {
      _cachedD1Db = drizzleD1(env.DB, { schema });
    }
    return _cachedD1Db;
  }

  if (!_cachedLibsqlDb) {
    if (!_cachedLibsqlClient) {
      const dbUrl = process.env.DATABASE_URL || "file:avyaya.db";
      _cachedLibsqlClient = createClient({
        url: dbUrl,
        authToken: process.env.DATABASE_AUTH_TOKEN,
      });
    }
    _cachedLibsqlDb = drizzleLibsql(_cachedLibsqlClient, { schema });
  }
  return _cachedLibsqlDb;
}

export function getClient(): any {
  const env = getCloudflareEnv();
  if (env?.DB) {
    return {
      execute: async (statement: string | { sql: string; args?: any[] }) => {
        const sql = typeof statement === "string" ? statement : statement.sql;
        const args = typeof statement === "string" ? [] : (statement.args || []);
        const stmt = args.length > 0 ? env.DB.prepare(sql).bind(...args) : env.DB.prepare(sql);
        const res = await stmt.all();
        return {
          rows: res.results || [],
          columns: [],
          rowsAffected: res.meta?.changes || 0,
          lastInsertRowid: res.meta?.last_row_id ? BigInt(res.meta.last_row_id) : undefined,
        };
      },
      batch: async (statements: any[]) => {
        const d1Statements = statements.map((st) => {
          const sql = typeof st === "string" ? st : st.sql;
          const args = typeof st === "string" ? [] : (st.args || []);
          return args.length > 0 ? env.DB.prepare(sql).bind(...args) : env.DB.prepare(sql);
        });
        const results = await env.DB.batch(d1Statements);
        return results.map((r: any) => ({
          rows: r.results || [],
          columns: [],
          rowsAffected: r.meta?.changes || 0,
        }));
      },
    };
  }

  if (!_cachedLibsqlClient) {
    const dbUrl = process.env.DATABASE_URL || "file:avyaya.db";
    _cachedLibsqlClient = createClient({
      url: dbUrl,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });
  }
  return _cachedLibsqlClient;
}

export const db: ReturnType<typeof drizzleLibsql<typeof schema>> = new Proxy({} as any, {
  get(_target, prop, receiver) {
    const instance = getDb();
    const value = Reflect.get(instance, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export const client: Client = new Proxy({} as any, {
  get(_target, prop, receiver) {
    const instance = getClient();
    const value = Reflect.get(instance, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
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

    await client.execute(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        category TEXT NOT NULL,
        ai_tool TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        admin_notified INTEGER DEFAULT 0,
        user_notified INTEGER DEFAULT 0,
        created_at INTEGER NOT NULL
      );
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
    `);

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at);
    `);

    // In local development, if prompts table is empty, auto-seed from d1/prompts.sql
    try {
      const env = getCloudflareEnv();
      if (!env?.DB) {
        const check = await client.execute("SELECT count(*) as c FROM prompts");
        const count = Number((check.rows[0] as any)?.c || 0);
        if (count === 0) {
          const fs = await import("fs");
          const path = await import("path");
          const sqlFile = path.resolve(process.cwd(), "d1/prompts.sql");
          if (fs.existsSync(sqlFile)) {
            const sql = fs.readFileSync(sqlFile, "utf-8");
            const stmts = sql.split(";\n").map((s) => s.trim()).filter(Boolean);
            for (let i = 0; i < stmts.length; i += 50) {
              const batch = stmts.slice(i, i + 50);
              await Promise.all(batch.map((s) => client.execute(s)));
            }
          }
        }
      }
    } catch {}

    isInitialized = true;
  } catch (error) {
    console.error("Failed to initialize SQLite database tables:", error);
  }
}
