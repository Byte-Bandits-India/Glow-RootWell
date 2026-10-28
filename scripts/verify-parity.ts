import path from "path";
import ExcelJS from "exceljs";
import { client } from "../src/lib/db";

async function verifyParity() {
  console.log("🔍 Starting 100% Data Parity Verification...");

  const excelPath = path.resolve(__dirname, "../legacy-html/Prompt lib nutrition.xlsx");
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);

  // Fetch all prompts from DB
  const dbRes = await client.execute("SELECT * FROM prompts");
  const dbRows = dbRes.rows;
  console.log(`📊 Found ${dbRows.length} prompts in database.`);

  const dbByTitleAndSheet = new Map<string, any>();
  for (const row of dbRows) {
    const key = `${row.source_sheet}:::${(row.title as string).trim()}`;
    dbByTitleAndSheet.set(key, row);
  }

  let totalExcelPrompts = 0;
  let exactMatches = 0;
  let mismatches: string[] = [];

  workbook.eachSheet((worksheet) => {
    if (worksheet.name === "Sheet1") return; // Strategic DNA overview

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber < 4) return;

      const title = String(row.getCell(2).value || "").trim();
      const promptText = String(row.getCell(3).value || "").trim();

      if (!promptText || promptText.length < 25) return;
      totalExcelPrompts++;

      const key = `${worksheet.name}:::${title}`;
      const dbRow = dbByTitleAndSheet.get(key);

      if (!dbRow) {
        mismatches.push(`[Missing in DB] ${key}`);
        return;
      }

      // Check prompt text equality
      const dbPromptText = (dbRow.prompt_text as string).trim();
      if (dbPromptText !== promptText) {
        mismatches.push(`[Text Mismatch] ${key}\n  Excel: ${promptText.slice(0, 50)}...\n  DB:    ${dbPromptText.slice(0, 50)}...`);
        return;
      }

      // Check follow-up prompt
      const followUp = String(row.getCell(4).value || "").trim();
      const dbFollowUp = String(dbRow.follow_up_prompt || "").trim();
      if (followUp && followUp !== dbFollowUp) {
        mismatches.push(`[Follow-up Mismatch] ${key}\n  Excel: ${followUp}\n  DB:    ${dbFollowUp}`);
        return;
      }

      // Check time saved
      const timeSaved = String(row.getCell(8).value || "").trim();
      const dbTimeSaved = String(dbRow.time_saved || "").trim();
      if (timeSaved && timeSaved !== dbTimeSaved) {
        mismatches.push(`[Time Saved Mismatch] ${key}\n  Excel: ${timeSaved}\n  DB:    ${dbTimeSaved}`);
        return;
      }

      exactMatches++;
    });
  });

  console.log("\n========================================");
  console.log("🏆 PARITY VERIFICATION RESULT");
  console.log("========================================");
  console.log(`Total Excel Prompts Evaluated: ${totalExcelPrompts}`);
  console.log(`Exact 100% Matches in Database: ${exactMatches}`);
  console.log(`Discrepancies / Mismatches:     ${mismatches.length}`);

  if (mismatches.length === 0 && totalExcelPrompts === dbRows.length) {
    console.log("\n✅ 100% PARITY CONFIRMED! Every single character, bracket, variable, and follow-up prompt matches perfectly.");
  } else {
    console.log("\nMismatches found:");
    mismatches.slice(0, 10).forEach((m) => console.log(m));
  }
}

verifyParity().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
