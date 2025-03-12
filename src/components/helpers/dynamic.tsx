"use client";

import dynamic from "next/dynamic";
import { Loading } from "../web/loading";

// Need to use dynamic import to avoid SSR issues

export const PDFViewer = dynamic(
  () => import("./imports").then((m) => m.PDFViewer),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export const PDFDownloadLink = dynamic(
  () => import("./imports").then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
