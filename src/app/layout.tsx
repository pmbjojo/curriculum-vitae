import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { meta } from "@/data";
import { Analytics } from "@vercel/analytics/react";
import { ParticlesProvider } from "@/components/particles-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${meta.firstName} ${meta.lastName}`,
  description: `Curriculum Vitae de ${meta.firstName} ${meta.lastName}`,
  authors: [
    {
      name: `${meta.firstName} ${meta.lastName}`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grow">{children}</div>
          <ParticlesProvider />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
