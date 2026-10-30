import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { AppShell } from "@/components/layout/AppShell";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Avyaya – The wellness prompt library",
  description:
    "500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "wellness prompts",
    "healthcare AI",
    "skincare prompts",
    "gut health prompts",
    "nutrition AI prompts",
    "fitness prompts",
    "ChatGPT health prompts",
    "Avyaya",
  ],
  authors: [{ name: "Avyaya" }],
  openGraph: {
    title: "Avyaya – The wellness prompt library",
    description:
      "500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.",
    siteName: "Avyaya",
    type: "website",
    images: [
      {
        url: "/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Avyaya – The wellness prompt library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyaya – The wellness prompt library",
    description:
      "500+ expert-written prompts for skin, gut, nutrition and fitness. Works with ChatGPT, Claude, Gemini and any AI.",
    images: ["/openGraph.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Serif+Display&family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--color-background)] text-[var(--color-text-primary)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
        <SmoothScrollProvider>
          <AuthProvider>
            <AppShell>{children}</AppShell>
          </AuthProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
