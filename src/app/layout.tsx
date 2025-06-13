import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/web/theme-provider";
import { resume } from "@/data";
import { Analytics } from "@vercel/analytics/react";
import { geistMono, geistSans, roboto } from "@/styles/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { env } from "@/lib/env";
import Script from "next/script";

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
    <html lang="fr-FR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
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
