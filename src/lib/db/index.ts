import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import * as schema from "./schema";

export interface DbClient {
  execute: (statement: string | { sql: string; args?: any[] }) => Promise<{
    rows: any[];
    columns: string[];
    rowsAffected: number;
    lastInsertRowid?: bigint;
  }>;
  batch: (statements: any[]) => Promise<Array<{
    rows: any[];
    columns: string[];
    rowsAffected: number;
  }>>;
}

export type AppDb = ReturnType<typeof drizzleD1<typeof schema>>;

function getCloudflareEnv(): any {
  try {
    const symbol = Symbol.for("__cloudflare-context__");
    const ctx = (globalThis as any)[symbol];
    if (ctx?.env) {
      return ctx.env;
    }
  } catch {}
  return null;
}

export function getD1Database(): any {
  const env = getCloudflareEnv();
  return env?.DB || env?.avyaya_db || null;
}

let _cachedD1Db: any = null;
let _cachedLibsqlDb: any = null;
let _cachedLibsqlClient: any = null;

function getLocalLibsqlModules() {
  try {
    // Dynamic require to prevent Cloudflare Worker bundlers from treating @libsql/client as external
    const req = (globalThis as any).__non_webpack_require__ || eval("require");
    const { drizzle } = req("drizzle-orm/libsql");
    const { createClient } = req("@libsql/client");
    return { drizzleLibsql: drizzle, createClient };
  } catch (err: any) {
    throw new Error(
      "D1 database binding not found, and local @libsql/client could not be loaded: " +
        (err?.message || String(err))
    );
  }
}

export function getDb(): AppDb {
  const d1 = getD1Database();
  if (d1) {
    if (!_cachedD1Db) {
      _cachedD1Db = drizzleD1(d1, { schema });
    }
    return _cachedD1Db;
  }

  if (!_cachedLibsqlDb) {
    const { drizzleLibsql, createClient } = getLocalLibsqlModules();
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

export function getClient(): DbClient {
  const d1 = getD1Database();
  if (d1) {
    return {
      execute: async (statement: string | { sql: string; args?: any[] }) => {
        const sql = typeof statement === "string" ? statement : statement.sql;
        const args = typeof statement === "string" ? [] : (statement.args || []);
        const stmt = args.length > 0 ? d1.prepare(sql).bind(...args) : d1.prepare(sql);
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
          return args.length > 0 ? d1.prepare(sql).bind(...args) : d1.prepare(sql);
        });
        const results = await d1.batch(d1Statements);
        return results.map((r: any) => ({
          rows: r.results || [],
          columns: [],
          rowsAffected: r.meta?.changes || 0,
        }));
      },
    };
  }

  if (!_cachedLibsqlClient) {
    const { createClient } = getLocalLibsqlModules();
    const dbUrl = process.env.DATABASE_URL || "file:avyaya.db";
    _cachedLibsqlClient = createClient({
      url: dbUrl,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });
  }
  return _cachedLibsqlClient;
}

export const db: AppDb = new Proxy({} as any, {
  get(_target, prop, receiver) {
    const instance = getDb();
    const value = Reflect.get(instance, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export const client: DbClient = new Proxy({} as any, {
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
      const d1 = getD1Database();
      if (!d1) {
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
