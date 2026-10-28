import ExcelJS from "exceljs";
import { client, ensureDbInitialized } from "../db";
import crypto from "crypto";

export interface ParsedPromptRow {
  serialNo: string;
  title: string;
  promptText: string;
  followUpPrompt: string;
  purpose: string;
  outcome: string;
  outputFormat: string;
  timeSaved: string;
  relevanceScore: string;
  utilityCadence: string;
  revenuePotential: string;
  notes: string;
  sourceSheet: string;
  subtopic: string;
  category: string;
  categoryLabel: string;
  bundle: "free" | "starter" | "pro";
  slug: string;
  sortOrder: number;
}

export interface ImportResult {
  totalParsed: number;
  inserted: number;
  updated: number;
  sheetsProcessed: string[];
  categories: Record<string, number>;
  bundles: Record<string, number>;
}

// Map each worksheet name to its core domain and human-friendly label
const SHEET_DOMAIN_MAP: Record<string, { category: string; categoryLabel: string; defaultSubtopic?: string }> = {
  // Domain 1: Fat Loss & Metabolic Transformation
  "Fat Loss & Metabolic Transforma": { category: "fat_loss", categoryLabel: "Fat Loss & Metabolic Transformation", defaultSubtopic: "Busy Lifestyle Fat Loss Systems" },
  "Sheet2": { category: "fat_loss", categoryLabel: "Fat Loss & Metabolic Transformation", defaultSubtopic: "Stubborn Fat & Plateau Breakers" },
  "Sheet3": { category: "fat_loss", categoryLabel: "Fat Loss & Metabolic Transformation", defaultSubtopic: "Hormonal Fat Loss Optimization" },
  "Sheet4": { category: "fat_loss", categoryLabel: "Fat Loss & Metabolic Transformation", defaultSubtopic: "Personalized Fat Loss Strategy Builder" },

  // Domain 2: Client Conversion & Sales Engine
  "Client Conversion & Sales Engin": { category: "sales", categoryLabel: "Client Conversion & Sales Engine", defaultSubtopic: "Instagram DM Conversion (Soft Selling)" },
  "Sheet5": { category: "sales", categoryLabel: "Client Conversion & Sales Engine", defaultSubtopic: "Story-Based Selling Frameworks" },
  "Sheet6": { category: "sales", categoryLabel: "Client Conversion & Sales Engine", defaultSubtopic: "Lead Magnet Creation (Guides + Trackers)" },
  "Sheet7": { category: "sales", categoryLabel: "Client Conversion & Sales Engine", defaultSubtopic: "Consultation Closing Scripts" },

  // Domain 3: Content Engine & Personal Brand
  "Content Engine & Personal Brand": { category: "content", categoryLabel: "Content Engine & Personal Brand", defaultSubtopic: "Emotional Storytelling Content" },
  "Sheet8": { category: "content", categoryLabel: "Content Engine & Personal Brand", defaultSubtopic: "Educational Content (Authority + Value)" },
  "Sheet9": { category: "content", categoryLabel: "Content Engine & Personal Brand", defaultSubtopic: "Content → Lead Conversion (Hooks & CTAs)" },
  "Sheet10": { category: "content", categoryLabel: "Content Engine & Personal Brand", defaultSubtopic: "Content Repurposing & Distribution Systems" },

  // Domain 4: Client Delivery & Transformation
  "Client Delivery & Transformatio": { category: "delivery", categoryLabel: "Client Delivery & Transformation", defaultSubtopic: "Weekly Check-in Optimization" },
  "Sheet11": { category: "delivery", categoryLabel: "Client Delivery & Transformation", defaultSubtopic: "Daily Accountability Systems" },
  "Sheet12": { category: "delivery", categoryLabel: "Client Delivery & Transformation", defaultSubtopic: "End-to-End Client Journey Mapping" },
  "Sheet13": { category: "delivery", categoryLabel: "Client Delivery & Transformation", defaultSubtopic: "Result Tracking & Transformation Proof" },

  // Domain 5: Productivity & Personal Excellence
  "Productivity & Personal Excelle": { category: "productivity", categoryLabel: "Productivity & Personal Excellence", defaultSubtopic: "Content Consistency Systems" },
  "Sheet14": { category: "productivity", categoryLabel: "Productivity & Personal Excellence", defaultSubtopic: "Decision-Making Frameworks" },
  "Sheet15": { category: "productivity", categoryLabel: "Productivity & Personal Excellence", defaultSubtopic: "Time Optimization & Focus Systems" },
  "Sheet16": { category: "productivity", categoryLabel: "Productivity & Personal Excellence", defaultSubtopic: "Workflow Simplification & Burnout Prevention" },
};

function cleanCellText(val: ExcelJS.CellValue): string {
  if (val === null || val === undefined) return "";
  if (typeof val === "object") {
    // Rich text or formula
    if ("richText" in val && Array.isArray(val.richText)) {
      return val.richText.map((r) => r.text || "").join("").trim();
    }
    if ("text" in val && typeof val.text === "string") {
      return val.text.trim();
    }
    if ("result" in val) {
      return String(val.result ?? "").trim();
    }
  }
  return String(val).trim();
}

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export async function parseExcelWorkbook(filePathOrBuffer: string | Buffer): Promise<ParsedPromptRow[]> {
  const workbook = new ExcelJS.Workbook();
  if (typeof filePathOrBuffer === "string") {
    await workbook.xlsx.readFile(filePathOrBuffer);
  } else {
    await workbook.xlsx.load(filePathOrBuffer as any);
  }

  const allPrompts: ParsedPromptRow[] = [];

  workbook.eachSheet((worksheet) => {
    const sheetName = worksheet.name;
    const domainConfig = SHEET_DOMAIN_MAP[sheetName];
    if (!domainConfig) {
      // Sheet 1 is Strategic DNA overview, ignore for prompt items
      return;
    }

    // Try to get subtopic from Row 1 Column A, fallback to domain default
    let subtopic = cleanCellText(worksheet.getRow(1).getCell(1).value);
    if (!subtopic || subtopic.length < 3) {
      subtopic = domainConfig.defaultSubtopic || sheetName;
    }

    let subtopicIndex = 0;

    worksheet.eachRow((row, rowNumber) => {
      // Row 1 is header/subtopic, Row 2 is blank, Row 3 is column labels
      if (rowNumber < 4) return;

      const serialNo = cleanCellText(row.getCell(1).value);
      const title = cleanCellText(row.getCell(2).value);
      const promptText = cleanCellText(row.getCell(3).value);

      // Must have prompt text of reasonable length
      if (!promptText || promptText.length < 25) return;

      const followUpPrompt = cleanCellText(row.getCell(4).value);
      const purpose = cleanCellText(row.getCell(5).value);
      const outcome = cleanCellText(row.getCell(6).value);
      const outputFormat = cleanCellText(row.getCell(7).value);
      const timeSaved = cleanCellText(row.getCell(8).value);
      const relevanceScore = cleanCellText(row.getCell(9).value);
      const utilityCadence = cleanCellText(row.getCell(10).value);
      const revenuePotential = cleanCellText(row.getCell(11).value);
      const notes = cleanCellText(row.getCell(12).value);
      const tierCol = cleanCellText(row.getCell(13).value); // Optional Col M for explicit "Free", "Starter", "Pro"

      // Check if user explicitly specified the tier in Col M (Tier) or Col L (Notes)
      let bundle: "free" | "starter" | "pro" = "pro";
      const tierText = (tierCol || notes).toLowerCase();

      if (tierText.includes("free")) {
        bundle = "free";
      } else if (tierText.includes("starter")) {
        bundle = "starter";
      } else if (tierText.includes("pro") || tierText.includes("membership")) {
        bundle = "pro";
      } else {
        // Default rule when no explicit tier column is provided:
        // • First 2 prompts of each subtopic -> free sample
        // • Next 2 prompts in core transformation topics -> starter pack
        // • All remaining prompts -> pro vault
        if (subtopicIndex < 2) {
          bundle = "free";
        } else if (subtopicIndex < 4 && (domainConfig.category === "fat_loss" || domainConfig.category === "delivery")) {
          bundle = "starter";
        }
      }

      const slugBase = `${domainConfig.category}-${createSlug(subtopic)}-${createSlug(title || `item-${subtopicIndex + 1}`)}`;
      const slug = slugBase.length > 80 ? slugBase.slice(0, 80) : slugBase;

      allPrompts.push({
        serialNo,
        title: title || `Prompt ${serialNo || subtopicIndex + 1}`,
        promptText,
        followUpPrompt,
        purpose,
        outcome,
        outputFormat,
        timeSaved,
        relevanceScore,
        utilityCadence,
        revenuePotential,
        notes,
        sourceSheet: sheetName,
        subtopic,
        category: domainConfig.category,
        categoryLabel: domainConfig.categoryLabel,
        bundle,
        slug,
        sortOrder: subtopicIndex + 1,
      });

      subtopicIndex++;
    });
  });

  return allPrompts;
}

export async function importPromptsFromExcel(filePathOrBuffer: string | Buffer): Promise<ImportResult> {
  await ensureDbInitialized();

  const parsedPrompts = await parseExcelWorkbook(filePathOrBuffer);

  let inserted = 0;
  let updated = 0;
  const categories: Record<string, number> = {};
  const bundles: Record<string, number> = {};
  const sheetsSeen = new Set<string>();

  const now = new Date();

  for (const p of parsedPrompts) {
    sheetsSeen.add(p.sourceSheet);
    categories[p.category] = (categories[p.category] || 0) + 1;
    bundles[p.bundle] = (bundles[p.bundle] || 0) + 1;

    const contentHash = crypto
      .createHash("sha256")
      .update(p.title + p.promptText + (p.followUpPrompt || "") + p.subtopic)
      .digest("hex");

    const id = `pr_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;

    // Upsert by slug
    const existing = await client.execute({
      sql: "SELECT id, content_hash FROM prompts WHERE slug = ? LIMIT 1",
      args: [p.slug],
    });

    if (existing.rows.length > 0) {
      const existingRow = existing.rows[0];
      // If content changed, update it
      if (existingRow.content_hash !== contentHash) {
        await client.execute({
          sql: `
            UPDATE prompts SET
              title = ?,
              category = ?,
              category_label = ?,
              subtopic = ?,
              bundle = ?,
              serial_no = ?,
              prompt_text = ?,
              follow_up_prompt = ?,
              purpose = ?,
              outcome = ?,
              output_format = ?,
              time_saved = ?,
              relevance_score = ?,
              utility_cadence = ?,
              revenue_potential = ?,
              notes = ?,
              source_sheet = ?,
              content_hash = ?,
              sort_order = ?,
              updated_at = ?
            WHERE id = ?
          `,
          args: [
            p.title,
            p.category,
            p.categoryLabel,
            p.subtopic,
            p.bundle,
            p.serialNo,
            p.promptText,
            p.followUpPrompt,
            p.purpose,
            p.outcome,
            p.outputFormat,
            p.timeSaved,
            p.relevanceScore,
            p.utilityCadence,
            p.revenuePotential,
            p.notes,
            p.sourceSheet,
            contentHash,
            p.sortOrder,
            now.getTime(),
            existingRow.id,
          ],
        });
        updated++;
      }
    } else {
      await client.execute({
        sql: `
          INSERT INTO prompts (
            id, slug, title, category, category_label, subtopic, bundle,
            serial_no, prompt_text, follow_up_prompt, purpose, outcome,
            output_format, time_saved, relevance_score, utility_cadence,
            revenue_potential, notes, source_sheet, content_hash,
            sort_order, is_active, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
        `,
        args: [
          id,
          p.slug,
          p.title,
          p.category,
          p.categoryLabel,
          p.subtopic,
          p.bundle,
          p.serialNo,
          p.promptText,
          p.followUpPrompt,
          p.purpose,
          p.outcome,
          p.outputFormat,
          p.timeSaved,
          p.relevanceScore,
          p.utilityCadence,
          p.revenuePotential,
          p.notes,
          p.sourceSheet,
          contentHash,
          p.sortOrder,
          now.getTime(),
          now.getTime(),
        ],
      });
      inserted++;
    }
  }

  return {
    totalParsed: parsedPrompts.length,
    inserted,
    updated,
    sheetsProcessed: Array.from(sheetsSeen),
    categories,
    bundles,
  };
}
