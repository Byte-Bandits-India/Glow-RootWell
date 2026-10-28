import { db, ensureDbInitialized } from "../src/lib/db";
import { prompts } from "../src/lib/db/schema";
import { eq, asc } from "drizzle-orm";

async function test() {
  await ensureDbInitialized();
  try {
    const allRows = await db
      .select()
      .from(prompts)
      .where(eq(prompts.isActive, true))
      .orderBy(asc(prompts.category), asc(prompts.sortOrder));
    console.log("Success! Row count:", allRows.length);
  } catch (e) {
    console.error("Drizzle query failed:", e);
  }
}
test();
