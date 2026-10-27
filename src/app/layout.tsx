import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rootwell – The wellness prompt library",
  description:
    "500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.",
  keywords: [
    "wellness prompts",
    "healthcare AI",
    "skincare prompts",
    "gut health prompts",
    "nutrition AI prompts",
    "fitness prompts",
    "ChatGPT health prompts",
    "Rootwell",
  ],
  authors: [{ name: "Rootwell" }],
  openGraph: {
    title: "Rootwell – The wellness prompt library",
    description:
      "500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.",
    siteName: "Rootwell",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2C13",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--color-background)] text-[var(--color-text-primary)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
        {children}
      </body>
    </html>
  );
}
