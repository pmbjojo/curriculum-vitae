"use client";

import { Button } from "@/components/ui/button";
import { fileName } from "@/lib/utils";
import { Download, Printer } from "lucide-react";
import Link from "next/link";

export function Tools() {
  return (
    <div className="fixed flex gap-3 bottom-5 right-5 print:hidden flex-col sm:flex-row">
      <Button asChild className="size-9 sm:size-auto">
        <Link href={`/${fileName}`}>
          <Printer />
          <span className="hidden sm:block">Imprimer</span>
        </Link>
      </Button>
      <Button asChild className="size-9 sm:size-auto">
        <a href={`/${fileName}`} download>
          <Download />
          <span className="hidden sm:block">Télécharger</span>
        </a>
      </Button>
    </div>
  );
}
