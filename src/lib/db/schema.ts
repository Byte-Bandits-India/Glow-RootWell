import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash"), // Nullable for Google OAuth users
  avatarUrl: text("avatar_url"),
  provider: text("provider").notNull().default("credentials"), // "credentials" | "google"
  providerId: text("provider_id"), // Google sub ID
  plan: text("plan").notNull().default("free"), // "free" | "starter" | "pro" | "membership"
  planActivatedAt: integer("plan_activated_at", { mode: "timestamp" }),
  planExpiresAt: integer("plan_expires_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  planId: text("plan_id").notNull(), // "starter" | "pro" | "membership"
  amount: integer("amount").notNull(), // in paise (e.g. 19900 = ₹199)
  currency: text("currency").notNull().default("INR"),
  status: text("status").notNull().default("created"), // "created" | "paid" | "failed"
  razorpayOrderId: text("razorpay_order_id").notNull().unique(),
  razorpayPaymentId: text("razorpay_payment_id"),
  razorpaySignature: text("razorpay_signature"),
  receipt: text("receipt"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const prompts = sqliteTable("prompts", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: text("category").notNull(), // "fat_loss" | "sales" | "content" | "delivery" | "productivity"
  categoryLabel: text("category_label").notNull(),
  subtopic: text("subtopic").notNull(),
  bundle: text("bundle").notNull().default("pro"), // "free" | "starter" | "pro"
  serialNo: text("serial_no"),
  promptText: text("prompt_text").notNull(),
  followUpPrompt: text("follow_up_prompt"),
  purpose: text("purpose"),
  outcome: text("outcome"),
  outputFormat: text("output_format"),
  timeSaved: text("time_saved"),
  relevanceScore: text("relevance_score"),
  utilityCadence: text("utility_cadence"),
  revenuePotential: text("revenue_potential"),
  notes: text("notes"),
  sourceSheet: text("source_sheet"),
  contentHash: text("content_hash"),
  sortOrder: integer("sort_order").default(0),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  category: text("category").notNull(),
  aiTool: text("ai_tool").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"), // "new" | "replied" | "archived"
  adminNotified: integer("admin_notified", { mode: "boolean" }).default(false),
  userNotified: integer("user_notified", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
export type Prompt = typeof prompts.$inferSelect;
export type NewPrompt = typeof prompts.$inferInsert;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;

