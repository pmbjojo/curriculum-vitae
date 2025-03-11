"use client";

import { PDFDownloadLink } from "@/components/helpers/dynamic";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CurriculumVitae } from "../pdf/cv";

export function DownloadButton() {
  return (
    <Button variant="outline" asChild>
      <PDFDownloadLink
        document={<CurriculumVitae />}
        fileName="Curriculum Vitae Joshua JOURDAM.pdf"
        className="group"
      >
        <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-125 group-hover:rotate-12" />
        <span className="relative">Télécgarger PDF</span>
      </PDFDownloadLink>
    </Button>
  );
}
