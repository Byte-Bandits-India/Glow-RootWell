import path from "path";
import fs from "fs";
import crypto from "crypto";
import { parseExcelWorkbook } from "../src/lib/excel/promptImporter";

function escapeSql(val: any): string {
  if (val === null || val === undefined) return "NULL";
  if (typeof val === "number") return String(val);
  const s = String(val).replace(/'/g, "''");
  return `'${s}'`;
}

async function main() {
  const excelPath = path.resolve(__dirname, "../legacy-html/Prompt lib nutrition.xlsx");
  console.log(`Reading prompts from ${excelPath}...`);
  const prompts = await parseExcelWorkbook(excelPath);
  console.log(`Parsed ${prompts.length} prompts.`);

  const now = Date.now();
  const sqlStatements: string[] = [];

  for (const p of prompts) {
    const id = `pr_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;
    const contentHash = crypto
      .createHash("sha256")
      .update(p.title + p.promptText + (p.followUpPrompt || "") + p.subtopic)
      .digest("hex");

    sqlStatements.push(`
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  ${escapeSql(id)}, ${escapeSql(p.slug)}, ${escapeSql(p.title)}, ${escapeSql(p.category)}, ${escapeSql(p.categoryLabel)}, ${escapeSql(p.subtopic)}, ${escapeSql(p.bundle)},
  ${escapeSql(p.serialNo)}, ${escapeSql(p.promptText)}, ${escapeSql(p.followUpPrompt)}, ${escapeSql(p.purpose)}, ${escapeSql(p.outcome)},
  ${escapeSql(p.outputFormat)}, ${escapeSql(p.timeSaved)}, ${escapeSql(p.relevanceScore)}, ${escapeSql(p.utilityCadence)},
  ${escapeSql(p.revenuePotential)}, ${escapeSql(p.notes)}, ${escapeSql(p.sourceSheet)}, ${escapeSql(contentHash)},
  ${p.sortOrder || 0}, 1, ${now}, ${now}
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = ${now};
    `.trim());
  }

  const outPath = path.resolve(__dirname, "../d1/prompts.sql");
  fs.writeFileSync(outPath, sqlStatements.join("\n"), "utf-8");
  console.log(`Wrote ${prompts.length} insert statements to ${outPath}`);
}

main().catch(console.error);
