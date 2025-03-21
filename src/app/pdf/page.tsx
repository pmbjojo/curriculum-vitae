"use client";

import { PDFViewer } from "@/components/helpers/dynamic";
import { CurriculumVitae } from "@/app/pdf/_components/cv";

export default function PdfPage() {
  return (
    <PDFViewer className="w-full h-full">
      <CurriculumVitae />
    </PDFViewer>
  );
}
