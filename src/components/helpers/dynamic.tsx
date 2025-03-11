"use client";

import dynamic from "next/dynamic";

// Need to use dynamic import to avoid SSR issues

export const PDFViewer = dynamic(
  () => import("./imports").then((m) => m.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const PDFDownloadLink = dynamic(
  () => import("./imports").then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
