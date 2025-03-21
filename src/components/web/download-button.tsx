"use client";

import { PDFDownloadLink } from "@/components/helpers/dynamic";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CurriculumVitae } from "../pdf/cv";
import { IconSpan } from "./icon-span";

export function DownloadButton() {
  return (
    <Button variant="outline" asChild>
      <PDFDownloadLink
        document={<CurriculumVitae />}
        fileName="Curriculum Vitae Joshua JOURDAM.pdf"
        className="group"
      >
        <IconSpan Icon={Download}>Télécharger PDF</IconSpan>
      </PDFDownloadLink>
    </Button>
  );
}
