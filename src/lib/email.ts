/**
 * Email Service for Avyaya
 * Handles notifications and confirmation emails for contact form inquiries,
 * purchases, and system events. Works seamlessly on both Node.js (via Nodemailer)
 * and Cloudflare Workers Edge (via native cloudflare:sockets / WorkerMailer).
 */

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface ContactPayload {
  name: string;
  email: string;
  category: string;
  aiTool: string;
  message: string;
}

export interface EmailDispatchResult {
  adminSuccess: boolean;
  userSuccess: boolean;
  provider: "smtp" | "dev_mode";
  adminError?: string;
  userError?: string;
}

const DEFAULT_ADMIN_EMAIL = "support@avyaya.com";
const DEFAULT_FROM_EMAIL = '"Avyaya Support" <support@avyaya.com>';

let cachedTransporter: Transporter | null = null;

/**
 * Universal environment variable accessor that reads from Cloudflare context
 * in edge runtime and falls back to process.env in Node.js.
 */
function getEnv(key: string): string | undefined {
  try {
    const symbol = Symbol.for("__cloudflare-context__");
    const ctx = (globalThis as any)[symbol];
    if (ctx?.env && typeof ctx.env[key] !== "undefined" && ctx.env[key] !== null) {
      return String(ctx.env[key]);
    }
  } catch {}
  return process.env[key];
}

/**
 * Detects whether the current runtime is Cloudflare Workers
 */
function isCloudflareEdge(): boolean {
  try {
    const symbol = Symbol.for("__cloudflare-context__");
    if ((globalThis as any)[symbol]) return true;
    if (typeof (globalThis as any).WebSocketPair !== "undefined") return true;
  } catch {}
  return false;
}

/**
 * Creates or retrieves the cached Nodemailer SMTP transporter (Node.js runtime).
 */
function getTransporter(): Transporter | null {
  const host = getEnv("SMTP_HOST");
  const user = getEnv("SMTP_USER");
  const rawPass = getEnv("SMTP_PASS") || getEnv("SMTP_PASSWORD");
  const pass = rawPass ? rawPass.replace(/\s+/g, "") : "";
  const service = getEnv("SMTP_SERVICE");
  const port = parseInt(getEnv("SMTP_PORT") || "587", 10);
  const secure = getEnv("SMTP_SECURE") === "true" || port === 465;

  if (!host && !user && !service) {
    return null;
  }

  if (cachedTransporter) {
    return cachedTransporter;
  }

  if (service) {
    cachedTransporter = nodemailer.createTransport({
      service,
      auth: {
        user: user || "",
        pass: pass || "",
      },
    });
    return cachedTransporter;
  }

  cachedTransporter = nodemailer.createTransport({
    host: host || "localhost",
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });

  return cachedTransporter;
}

/**
 * Escapes HTML characters to prevent XSS in email templates
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Formats multi-line text into clean HTML paragraphs/breaks
 */
function formatMessageHtml(str: string): string {
  const escaped = escapeHtml(str);
  return escaped.replace(/\n\r?/g, "<br />");
}

/**
 * Generates the HTML template for Admin Notification Email
 */
export function generateAdminEmailHtml(data: ContactPayload, receivedAt: string): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeCategory = escapeHtml(data.category);
  const safeAiTool = escapeHtml(data.aiTool);
  const formattedMessage = formatMessageHtml(data.message);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Avyaya Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #FAF8F5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);">
          
          <!-- Brand Header -->
          <tr>
            <td style="background-color: #0B2C13; padding: 28px 32px; text-align: left;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display: inline-block; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Avyaya</span>
                    <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #D7E4C9; margin-top: 4px;">Inbound Client Inquiry</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(215, 228, 201, 0.2); color: #D7E4C9; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 9999px;">
                      ${safeCategory}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Strip -->
          <tr>
            <td style="padding: 24px 32px 12px 32px;">
              <p style="margin: 0 0 16px 0; font-size: 15px; color: #374151;">
                A new inquiry was submitted via the Avyaya website contact portal:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; color: #6B7280; width: 130px; font-weight: 600;">Client Name</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 14px; color: #0B2C13; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; color: #6B7280; font-weight: 600;">Email Address</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 14px; color: #1E7A66;">
                    <a href="mailto:${safeEmail}" style="color: #1E7A66; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; color: #6B7280; font-weight: 600;">Inquiry Category</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; color: #111827; font-weight: 600;">${safeCategory}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; color: #6B7280; font-weight: 600;">Primary AI Model</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; color: #111827;">${safeAiTool}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; color: #6B7280; font-weight: 600;">Received</td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #4B5563;">${receivedAt}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Block -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <span style="display: block; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0B2C13; margin-bottom: 8px;">
                Message Content:
              </span>
              <div style="background-color: #FAF8F5; border-left: 4px solid #1E7A66; padding: 16px 20px; border-radius: 0 12px 12px 0; font-size: 14px; color: #1F2937; line-height: 1.6;">
                ${formattedMessage}
              </div>
            </td>
          </tr>

          <!-- Direct Action Button -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${safeEmail}?subject=Re:%20Avyaya%20Inquiry%20-%20${encodeURIComponent(safeCategory)}" style="display: inline-block; background-color: #0B2C13; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; padding: 12px 24px; border-radius: 9999px;">
                      Reply directly to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 16px 32px; border-top: 1px solid #E5E7EB; text-align: center; font-size: 11px; color: #9CA3AF;">
              This notification was generated automatically by the Avyaya Contact Portal.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generates the HTML template for User Confirmation Receipt
 */
export function generateUserConfirmationEmailHtml(data: ContactPayload): string {
  const safeName = escapeHtml(data.name);
  const safeCategory = escapeHtml(data.category);
  const safeAiTool = escapeHtml(data.aiTool);
  const formattedMessage = formatMessageHtml(data.message);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We've received your message - Avyaya</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #FAF8F5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);">
          
          <!-- Brand Header -->
          <tr>
            <td style="background-color: #0B2C13; padding: 32px 32px; text-align: center;">
              <span style="display: block; font-size: 26px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Avyaya</span>
              <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #D7E4C9; margin-top: 6px;">Clinical AI Prompt Architecture</span>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 32px 32px 16px 32px;">
              <h1 style="font-size: 20px; font-weight: 700; color: #0B2C13; margin: 0 0 16px 0; line-height: 1.3;">
                Thank you for reaching out, ${safeName}.
              </h1>
              <p style="font-size: 14px; color: #4B5563; margin: 0 0 16px 0; line-height: 1.6;">
                We have received your message regarding <strong>${safeCategory}</strong>. Our clinical prompt engineering team reviews every submission with care to provide clear, actionable guidance.
              </p>
              <p style="font-size: 14px; color: #4B5563; margin: 0 0 20px 0; line-height: 1.6;">
                Expected Response Time: Within 2 to 4 hours. Our team operates Monday through Saturday to ensure you receive 100% human, expert assistance.
              </p>

              <!-- Summary of Submitted Information -->
              <div style="background-color: #FAF8F5; border-radius: 14px; border: 1px solid #EFEAE4; padding: 18px 20px; margin: 24px 0;">
                <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6B7280; margin-bottom: 12px;">
                  Summary of your inquiry:
                </span>
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 13px;">
                  <tr>
                    <td style="color: #6B7280; width: 120px; padding: 4px 0; font-weight: 600;">Category:</td>
                    <td style="color: #0B2C13; padding: 4px 0; font-weight: 600;">${safeCategory}</td>
                  </tr>
                  <tr>
                    <td style="color: #6B7280; padding: 4px 0; font-weight: 600;">AI Tool:</td>
                    <td style="color: #111827; padding: 4px 0;">${safeAiTool}</td>
                  </tr>
                </table>
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed #DDD6CE; font-size: 13px; color: #374151; font-style: italic;">
                  &ldquo;${formattedMessage}&rdquo;
                </div>
              </div>

              <!-- Quick Self-Service Links -->
              <p style="font-size: 13px; color: #4B5563; margin: 24px 0 12px 0;">
                Looking for immediate resources while you wait?
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="padding: 6px 0;">
                    <a href="https://avyaya.com/library" style="font-size: 13px; color: #1E7A66; font-weight: 600; text-decoration: underline;">
                      &rarr; Explore 390+ Clinical &amp; Wellness Prompts
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0;">
                    <a href="https://avyaya.com/faq" style="font-size: 13px; color: #1E7A66; font-weight: 600; text-decoration: underline;">
                      &rarr; Read Frequently Asked Questions &amp; Setup Guides
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size: 13px; color: #4B5563; margin: 24px 0 0 0; line-height: 1.6;">
                Warm regards,<br />
                <strong>The Avyaya Support &amp; Clinical Team</strong><br />
                <a href="mailto:support@avyaya.com" style="color: #1E7A66; text-decoration: none;">support@avyaya.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 20px 32px; border-top: 1px solid #E5E7EB; text-align: center; font-size: 11px; color: #9CA3AF;">
              &copy; ${new Date().getFullYear()} Avyaya. All rights reserved. You received this email because you submitted an inquiry at avyaya.com.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Sends emails using Cloudflare Workers edge native TCP sockets (WorkerMailer).
 * Connects directly to SMTP server without relying on Node.js net proxy.
 */
async function sendViaCloudflareEdgeSocket(
  host: string,
  user: string,
  pass: string,
  data: ContactPayload,
  adminEmail: string,
  adminSubject: string,
  adminHtml: string,
  userSubject: string,
  userHtml: string
): Promise<{ adminSuccess: boolean; userSuccess: boolean; adminError?: string; userError?: string }> {
  const { WorkerMailer } = await import("worker-mailer");

  // Attempt port 587 (STARTTLS) first, then port 465 (Direct SSL)
  const configs = [
    { port: 587, secure: false, startTls: true },
    { port: 465, secure: true, startTls: false },
  ];

  let lastError: any = null;

  for (const cfg of configs) {
    try {
      const mailer = await WorkerMailer.connect({
        host,
        port: cfg.port,
        secure: cfg.secure,
        startTls: cfg.startTls,
        authType: ["plain", "login"],
        credentials: {
          username: user,
          password: pass,
        },
        socketTimeoutMs: 15000,
        responseTimeoutMs: 15000,
      });

      // 1. Send Admin Email
      await mailer.send({
        from: { name: "Avyaya Support", email: user },
        to: adminEmail,
        reply: { name: data.name, email: data.email },
        subject: adminSubject,
        html: adminHtml,
      });

      // 2. Send User Confirmation Email
      await mailer.send({
        from: { name: "Avyaya Support", email: user },
        to: { name: data.name, email: data.email },
        reply: { name: "Avyaya Support", email: adminEmail },
        subject: userSubject,
        html: userHtml,
      });

      await mailer.close().catch(() => {});

      return {
        adminSuccess: true,
        userSuccess: true,
      };
    } catch (err: any) {
      lastError = err;
      console.warn(`[WorkerMailer attempt on port ${cfg.port} failed]:`, err?.message || err);
    }
  }

  return {
    adminSuccess: false,
    userSuccess: false,
    adminError: lastError?.message || String(lastError),
    userError: lastError?.message || String(lastError),
  };
}

/**
 * Main email dispatcher function for contact submissions.
 * Automatically chooses edge-native socket delivery on Cloudflare Workers,
 * and standard Nodemailer on Node.js.
 */
export async function sendContactEmails(data: ContactPayload): Promise<EmailDispatchResult> {
  const adminEmail = getEnv("ADMIN_EMAIL") || DEFAULT_ADMIN_EMAIL;
  const user = getEnv("SMTP_USER") || "";
  const rawPass = getEnv("SMTP_PASS") || getEnv("SMTP_PASSWORD") || "";
  const pass = rawPass.replace(/\s+/g, "");
  const host = getEnv("SMTP_HOST") || (getEnv("SMTP_SERVICE") === "gmail" ? "smtp.gmail.com" : "localhost");
  const fromEmail =
    getEnv("SMTP_FROM") ||
    getEnv("EMAIL_FROM") ||
    (user ? `"Avyaya Support" <${user}>` : DEFAULT_FROM_EMAIL);

  const formattedTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const adminHtml = generateAdminEmailHtml(data, formattedTime);
  const userHtml = generateUserConfirmationEmailHtml(data);
  const adminSubject = `[Avyaya Contact] New Inquiry from ${data.name} - ${data.category}`;
  const userSubject = `We've received your message - Avyaya`;

  // 1. If in Cloudflare Workers Edge runtime, use native edge sockets
  if (isCloudflareEdge() && user && pass) {
    console.log("[Avyaya Email] Dispatching via Cloudflare Edge Sockets (WorkerMailer)...");
    const edgeResult = await sendViaCloudflareEdgeSocket(
      host,
      user,
      pass,
      data,
      adminEmail,
      adminSubject,
      adminHtml,
      userSubject,
      userHtml
    );

    if (edgeResult.adminSuccess && edgeResult.userSuccess) {
      return {
        adminSuccess: true,
        userSuccess: true,
        provider: "smtp",
      };
    }

    console.warn("[Avyaya Email] Edge socket delivery failed, attempting Nodemailer fallback...", edgeResult.adminError);
  }

  // 2. Node.js runtime or secondary fallback via Nodemailer
  const transporter = getTransporter();

  // If no SMTP configuration is present at all, log and return dev mode
  if (!transporter) {
    console.log("==========================================================");
    console.log("[Avyaya Email Dev Mode] SMTP credentials not configured.");
    console.log(`[Email 1 -> Admin]: To ${adminEmail} | From: ${fromEmail} | Reply-To: ${data.name} <${data.email}>`);
    console.log(`Subject: ${adminSubject}`);
    console.log(`[Email 2 -> User]: To ${data.name} <${data.email}> | From: ${fromEmail}`);
    console.log(`Subject: ${userSubject}`);
    console.log("==========================================================");

    return {
      adminSuccess: true,
      userSuccess: true,
      provider: "dev_mode",
    };
  }

  let adminSuccess = false;
  let userSuccess = false;
  let adminError: string | undefined;
  let userError: string | undefined;

  // Send Admin Notification Email
  try {
    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: adminSubject,
      html: adminHtml,
    });
    adminSuccess = true;
  } catch (err: any) {
    adminSuccess = false;
    adminError = err?.message || String(err);
    console.error("[Nodemailer Error - Admin]:", err);
  }

  // Send User Confirmation Email
  try {
    await transporter.sendMail({
      from: fromEmail,
      to: `"${data.name}" <${data.email}>`,
      replyTo: adminEmail,
      subject: userSubject,
      html: userHtml,
    });
    userSuccess = true;
  } catch (err: any) {
    userSuccess = false;
    userError = err?.message || String(err);
    console.error("[Nodemailer Error - User]:", err);
  }

  return {
    adminSuccess,
    userSuccess,
    adminError,
    userError,
    provider: "smtp",
  };
}
