import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/web/theme-provider";
import { resume } from "@/data";
import { env } from "@/lib/env";
import { geistMono, geistSans, roboto } from "@/styles/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: `${resume.firstName} ${resume.lastName}`,
  description: `Curriculum Vitae de ${resume.firstName} ${resume.lastName}`,
  authors: [
    {
      name: `${resume.firstName} ${resume.lastName}`,
    },
  ],
  verification: {
    google: "boQz2krzQsDPRsQAT6j0Cv1xcoa7hfKxaBijDGcBjWY",
  },
  metadataBase: new URL(env.BASE_URL),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Joshua Jourdam - Curriculum Vitae",
  url: "https://joshua-jourdam.vercel.app/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Next.js requires this for JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} flex h-dvh flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="grow">{children}</main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
