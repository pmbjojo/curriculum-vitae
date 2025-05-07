import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/web/theme-provider";
import { meta } from "@/data";
import { Analytics } from "@vercel/analytics/react";
import { ParticlesProvider } from "@/components/web/particles-provider";
import { geistMono, geistSans, roboto } from "@/styles/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: `${meta.firstName} ${meta.lastName}`,
  description: `Curriculum Vitae de ${meta.firstName} ${meta.lastName}`,
  authors: [
    {
      name: `${meta.firstName} ${meta.lastName}`,
    },
  ],
  verification: {
    google: "boQz2krzQsDPRsQAT6j0Cv1xcoa7hfKxaBijDGcBjWY",
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased h-dvh flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="grow">{children}</main>
          <ParticlesProvider />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
