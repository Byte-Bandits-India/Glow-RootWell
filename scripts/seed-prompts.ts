import path from "path";
import { importPromptsFromExcel } from "../src/lib/excel/promptImporter";
import { client, ensureDbInitialized } from "../src/lib/db";

async function main() {
  console.log("🚀 Initializing database tables...");
  await ensureDbInitialized();

  const excelPath = path.resolve(__dirname, "../legacy-html/Prompt lib nutrition.xlsx");
  console.log(`📁 Reading Excel workbook from: ${excelPath}`);

  console.log("⏳ Parsing and ingesting prompts...");
  const result = await importPromptsFromExcel(excelPath);

  console.log("\n========================================");
  console.log("🎉 PROMPT INGESTION COMPLETE!");
  console.log("========================================");
  console.log(`Total Prompts Parsed: ${result.totalParsed}`);
  console.log(`New Prompts Inserted: ${result.inserted}`);
  console.log(`Prompts Updated:      ${result.updated}`);
  console.log(`Sheets Processed:     ${result.sheetsProcessed.length}`);
  console.log("\nBreakdown by Category:");
  Object.entries(result.categories).forEach(([cat, count]) => {
    console.log(`  • ${cat}: ${count} prompts`);
  });
  console.log("\nBreakdown by Bundle Tier:");
  Object.entries(result.bundles).forEach(([tier, count]) => {
    console.log(`  • ${tier}: ${count} prompts`);
  });

  // Verify DB count
  const countRes = await client.execute("SELECT COUNT(*) as count FROM prompts");
  console.log(`\nVerified Database Total: ${countRes.rows[0].count} prompts in 'prompts' table.`);

  // Sample check
  const sampleRes = await client.execute("SELECT title, subtopic, bundle, time_saved, revenue_potential, follow_up_prompt FROM prompts LIMIT 3");
  console.log("\nSample Database Rows:");
  sampleRes.rows.forEach((r, idx) => {
    console.log(`\n[Prompt #${idx + 1}]`);
    console.log(`  Title:            ${r.title}`);
    console.log(`  Subtopic:         ${r.subtopic}`);
    console.log(`  Bundle:           ${r.bundle}`);
    console.log(`  Time Saved:       ${r.time_saved}`);
    console.log(`  Revenue:          ${r.revenue_potential}`);
    console.log(`  Follow-up Prompt: ${r.follow_up_prompt}`);
  });
}

main().catch((err) => {
  console.error("❌ Ingestion failed:", err);
  process.exit(1);
});
