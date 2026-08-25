"use client";

import { Download, Printer } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn, fileName } from "@/lib/utils";

export function Tools() {
  return (
    <div className="fixed flex gap-3 bottom-5 right-5 print:hidden flex-col sm:flex-row">
      <Link
        href={`/${fileName}`}
        className={cn(buttonVariants({ className: "size-9 sm:size-auto" }))}
      >
        <Printer />
        <span className="hidden sm:block">Imprimer</span>
      </Link>
      <a
        href={`/${fileName}`}
        download
        className={cn(buttonVariants({ className: "size-9 sm:size-auto" }))}
      >
        <Download />
        <span className="hidden sm:block">Télécharger</span>
      </a>
    </div>
  );
}
