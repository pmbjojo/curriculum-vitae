import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { meta } from "@/data";
import { Analytics } from "@vercel/analytics/react";
import { ParticlesProvider } from "@/components/particles-provider";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
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
