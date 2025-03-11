"use client";

import { PDFViewer } from "@/components/helpers/dynamic";
import { CurriculumVitae } from "@/components/pdf/cv";

export default function PdfPage() {
  return (
    <PDFViewer className="w-full h-full">
      <CurriculumVitae />
    </PDFViewer>
  );
}
