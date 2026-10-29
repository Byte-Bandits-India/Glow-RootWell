# Avyaya – Architecture, Deployment & Maintenance Guide

This document contains the complete operational documentation for the **Avyaya** clinical and wellness prompt library platform, including architecture, deployment workflows, database maintenance, and prompt updates.

---

## 1. System Architecture Overview

* **Frontend & Backend:** Next.js 16 (App Router), React 19, Tailwind CSS v4.
* **Edge Runtime / Hosting:** Cloudflare Workers running the OpenNext adapter (`@opennextjs/cloudflare`).
* **Cloud Database:** Cloudflare Native D1 (`avyaya-db`).
* **Local Database:** SQLite / libSQL (`avyaya.db`) via `@libsql/client`.
* **Authentication:** Jose JWT with HTTP-only cookies + Google OAuth 2.0.
* **Payments:** Razorpay Payment Gateway integration.
* **Live Production URL:** `https://avyaya.abrahambillclinton.workers.dev`
* **GitHub Repository:** `Byte-Bandits-India/Glow-RootWell` (`main` branch)

```
┌─────────────────────────────────────────────────────────────────┐
│                    User Browser / Client                        │
└────────────────────────────────┬────────────────────────────────┘
                                 │ HTTPS
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│               Cloudflare Edge Network (Anycast)                 │
├─────────────────────────────────────────────────────────────────┤
│ Cloudflare Worker: avyaya                                       │
│ ├─ Static Assets (Cache / CDN)                                  │
│ └─ Next.js Serverless Function (.open-next/worker.js)           │
│     ├─ Server Components & Pages                                │
│     ├─ REST API Routes (/api/auth, /api/prompts, /api/payments) │
│     └─ Drizzle ORM (drizzle-orm/d1)                             │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│           Cloudflare Native D1 Database (avyaya-db)             │
│  Tables: users, sessions, orders, prompts                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Cloudflare Deployment Architecture

### Automated Git CI/CD
Deployments are fully automated via GitHub integration in Cloudflare Workers.
Whenever code is pushed to the `main` branch of `Byte-Bandits-India/Glow-RootWell`, Cloudflare triggers an automated build:

* **Build command:** `npm run build`
* **Deploy command:** `npx wrangler deploy`
* **Root directory:** `/`
* **Worker Name:** `avyaya`

### Build Configuration Files
1. **`open-next.config.ts`**:
   Configures OpenNext for Cloudflare:
   ```ts
   import { defineCloudflareConfig } from "@opennextjs/cloudflare";

   export default {
     ...defineCloudflareConfig(),
     buildCommand: "npx next build",
   };
   ```
2. **`wrangler.jsonc`**:
   Worker metadata, compatibility flags, assets, and D1 database binding:
   ```jsonc
   {
     "$schema": "node_modules/wrangler/config-schema.json",
     "name": "avyaya",
     "main": ".open-next/worker.js",
     "compatibility_date": "2026-10-23",
     "compatibility_flags": ["nodejs_compat"],
     "assets": {
       "directory": ".open-next/assets",
       "binding": "ASSETS"
     },
     "d1_databases": [
       {
         "binding": "DB",
         "database_name": "avyaya-db",
         "database_id": "2a23192a-bb66-46bb-8dc2-4698cf8b2f30"
       }
     ],
     "observability": {
       "enabled": true
     }
   }
   ```

3. **`next.config.ts` Rules for Cloudflare**:
   > [!IMPORTANT]
   > Do **NOT** enable `cacheComponents: true` or `partialPrefetching: true` in `next.config.ts`. Next.js 16 Cache Components requires a full Node.js process; on Cloudflare Workers' `workerd` V8 isolates, it causes unhandled `setTimeout` timer deadlocks that result in **Error 1101: Worker threw exception**.

---

## 3. How to Push Code & Deploy Updates

### Standard Development Workflow

1. **Make changes & test locally**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to verify your changes.

2. **Verify TypeScript & build clean**:
   ```bash
   npx tsc --noEmit
   npx next build
   ```

3. **Stage and commit your changes**:
   ```bash
   git add .
   git commit -m "feat(ui): your descriptive update message"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin main
   ```

5. **Track Deployment in Cloudflare**:
   * Open **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
   * Go to **Workers & Pages** → **`avyaya`** → **Deployments**.
   * Cloudflare will automatically clone, install dependencies, run `npm run build`, and deploy the new build in ~2 to 3 minutes.

---

## 4. Environment Variables & Secrets Management

Environment variables in Cloudflare are stored in **Workers & Pages** → **`avyaya`** → **Settings** → **Variables and Secrets**.

### Production Variables Checklist

| Variable Name | Type | Purpose | Example Value |
| :--- | :--- | :--- | :--- |
| `AUTH_SECRET` | Secret (Encrypted) | 32+ character key for JWT cookie signing | `avyaya_super_secret_jwt_key_...` |
| `GOOGLE_CLIENT_ID` | Plain text | Google Cloud OAuth Client ID | `435076...apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Secret (Encrypted) | Google Cloud OAuth Client Secret | `GOCSPX-...` |
| `GOOGLE_REDIRECT_URI` | Plain text | Google OAuth callback endpoint | `https://avyaya.abrahambillclinton.workers.dev/api/auth/callback/google` |
| `RAZORPAY_KEY_ID` | Plain text | Razorpay Key ID | `rzp_test_...` / `rzp_live_...` |
| `RAZORPAY_KEY_SECRET` | Secret (Encrypted) | Razorpay Secret Key | `LyyI22...` |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Plain text | Public Razorpay key for checkout modal | `rzp_test_...` / `rzp_live_...` |

### Setting Secrets via Wrangler CLI
You can also set or update secrets from your terminal at any time:
```bash
npx wrangler secret put AUTH_SECRET
npx wrangler secret put GOOGLE_CLIENT_SECRET
npx wrangler secret put RAZORPAY_KEY_SECRET
```

---

## 5. Cloudflare D1 Database Maintenance

### Database Details
* **Database Name:** `avyaya-db`
* **Database ID:** `2a23192a-bb66-46bb-8dc2-4698cf8b2f30`
* **Region:** APAC (Singapore)
* **Binding Name in Worker:** `DB`

### Tables Schema (`d1/schema.sql`)
1. **`users`**: User profiles, encrypted passwords, Google provider IDs, subscription plan tiers (`free`, `starter`, `pro`).
2. **`sessions`**: Active authentication sessions linked to users.
3. **`orders`**: Razorpay orders, transaction receipts, payment statuses (`created`, `paid`, `failed`).
4. **`prompts`**: Master prompt catalog (titles, full prompts, follow-ups, categories, bundle tiers, time saved, etc.).

### Running Queries on the Live Database

You can query your live Cloudflare D1 database anytime using Wrangler:

* **Count Total Prompts:**
  ```bash
  npx wrangler d1 execute avyaya-db --remote --command="SELECT count(*) as total, count(DISTINCT category) as categories FROM prompts;"
  ```

* **Inspect Registered Users:**
  ```bash
  npx wrangler d1 execute avyaya-db --remote --command="SELECT id, name, email, plan, created_at FROM users LIMIT 10;"
  ```

* **Inspect Orders / Payments:**
  ```bash
  npx wrangler d1 execute avyaya-db --remote --command="SELECT id, plan_id, amount, status, razorpay_order_id FROM orders ORDER BY created_at DESC LIMIT 5;"
  ```

* **Execute an SQL File on Remote DB:**
  ```bash
  npx wrangler d1 execute avyaya-db --remote --file=path/to/script.sql -y
  ```

---

## 6. How to Update & Ingest Prompts

The entire prompt catalog originates from the master Excel spreadsheet:
📁 `legacy-html/Prompt lib nutrition.xlsx`

### Step-by-Step Prompt Update Procedure

#### Step 1: Update the Excel Spreadsheet
Edit `legacy-html/Prompt lib nutrition.xlsx` with your new prompts, categories, or tier adjustments.
* Ensure worksheet columns remain consistent:
  * `S.no`, `Title`, `Prompt`, `Follow up Prompt`, `Purpose`, `Outcome / Result`, `Output Format`, `Time Saved`, `Relevance Score`, `Utility Cadence`, `Revenue Potential`, `Notes`.

#### Step 2: Push the Prompts to Cloudflare D1
Run the automated seed command:
```bash
npm run d1:seed
```
This single command automatically:
1. Parses every worksheet in `legacy-html/Prompt lib nutrition.xlsx`.
2. Generates deterministic slugs, categories, and content hashes.
3. Produces `d1/prompts.sql`.
4. Executes the batch `UPSERT` onto your remote Cloudflare D1 database (`avyaya-db`).

#### Step 3: Verify on Remote Database
Run:
```bash
npx wrangler d1 execute avyaya-db --remote --command="SELECT count(*) as total FROM prompts;"
```
Your live website will instantly reflect the updated prompts catalog without requiring a code redeploy.

#### Optional: Updating Local SQLite Database
If you also want your local offline development database (`avyaya.db`) synced with the Excel file, run:
```bash
npm run db:seed-prompts
```

---

## 7. Troubleshooting & Operational Commands

### Real-Time Live Logs
To see live server requests, errors, and console outputs from Cloudflare Workers:
```bash
npx wrangler tail avyaya
```
Keep this terminal open, visit `https://avyaya.abrahambillclinton.workers.dev`, and watch incoming requests in real time.

### Resolving Error 1101 ("Worker threw exception")
If Error 1101 ever returns:
1. Run `npx wrangler tail avyaya` to capture the stack trace.
2. Verify `next.config.ts` does not contain `cacheComponents: true`.
3. Check that `wrangler.jsonc` has the `"d1_databases"` block with binding `"DB"`.
4. Ensure all environment secrets (`AUTH_SECRET`, etc.) are configured.

### Adding a Custom Domain
When you are ready to point your custom domain (e.g., `avyaya.com`):
1. In Cloudflare Dashboard, go to **Workers & Pages** → **`avyaya`** → **Settings** → **Domains & Routes**.
2. Click **Add Custom Domain** and enter your domain name.
3. Update `GOOGLE_REDIRECT_URI` under **Variables and Secrets** to match your new domain:
   `https://yourdomain.com/api/auth/callback/google`
4. Add the same URI to your **Google Cloud Console** OAuth Authorized Redirect URIs list.

