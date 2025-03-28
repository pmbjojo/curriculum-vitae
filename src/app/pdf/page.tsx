"use client";

import { Download, Printer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CurriculumVitae } from "./_components/curriculum-vitae";

export default function PdfPage() {
  return (
    <div>
      <div className="fixed flex gap-1 bottom-5 right-5 print:hidden">
        <Button onClick={() => window.print()}>
          <Printer />
          Imprimer
        </Button>
        <Button asChild>
          <Link href="/api/pdf">
            <Download />
            Télécharger
          </Link>
        </Button>
      </div>
      <CurriculumVitae />
    </div>
  );
}
