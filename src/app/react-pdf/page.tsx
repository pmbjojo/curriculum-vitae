"use client";

import { PDFViewer } from "@/components/helpers/dynamic";
import { CurriculumVitae } from "@/app/react-pdf/_components/cv";

export default function ReactPdfPage() {
  return (
    <PDFViewer className="w-full h-full">
      <CurriculumVitae />
    </PDFViewer>
  );
}
