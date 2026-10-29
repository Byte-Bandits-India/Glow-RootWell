/**
 * Email Service for Avyaya
 * Handles notifications and confirmation emails for contact form inquiries,
 * purchases, and system events using standard Nodemailer over SMTP.
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
 * Creates or retrieves the cached Nodemailer SMTP transporter.
 * Supports standard SMTP (host/port/user/pass) or named services (e.g. "gmail").
 */
function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const rawPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const pass = rawPass ? rawPass.replace(/\s+/g, "") : "";
  const service = process.env.SMTP_SERVICE;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  // If no SMTP configuration is present in environment, return null for safe dev fallback
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
 * Main email dispatcher function for contact submissions using standard Nodemailer SMTP.
 * Sends emails to both:
 * 1. The Admin (full user details, category, message, and direct reply-to)
 * 2. The User (branded confirmation and receipt)
 */
export async function sendContactEmails(data: ContactPayload): Promise<EmailDispatchResult> {
  const adminEmail = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
  const fromEmail =
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    (process.env.SMTP_USER ? `"Avyaya" <${process.env.SMTP_USER}>` : DEFAULT_FROM_EMAIL);

  const formattedTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const adminHtml = generateAdminEmailHtml(data, formattedTime);
  const userHtml = generateUserConfirmationEmailHtml(data);

  const transporter = getTransporter();

  // If no SMTP configuration is set in local environment, log details and return success for dev mode
  if (!transporter) {
    console.log("==========================================================");
    console.log("[Avyaya Nodemailer Dev Mode] SMTP credentials not configured.");
    console.log(`[Email 1 -> Admin]: To ${adminEmail} | From: ${fromEmail} | Reply-To: ${data.name} <${data.email}>`);
    console.log(`Subject: [Avyaya Contact] New Inquiry from ${data.name} - ${data.category}`);
    console.log(`[Email 2 -> User]: To ${data.name} <${data.email}> | From: ${fromEmail}`);
    console.log(`Subject: We've received your message - Avyaya`);
    console.log("Tip: Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to .env.local to send live emails via Nodemailer.");
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

  // 1. Send Admin Notification Email
  const adminSubject = `[Avyaya Contact] New Inquiry from ${data.name} - ${data.category}`;
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

  // 2. Send User Confirmation Email
  const userSubject = `We've received your message - Avyaya`;
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
