"use client";

import { Download, Printer } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { Experience } from "./_components/experience";
import { Button } from "@/components/ui/button";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { Languages } from "./_components/languages";
import { References } from "./_components/references";
import { Header } from "./_components/header";
import { Education } from "./_components/education";
import { Summary } from "./_components/summary";

export default function WebPage() {
  const accentColor = "black";
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={contentRef}
      className="font-cv w-[210mm] h-[297mm] bg-white overflow-hidden mx-auto flex flex-col text-black shadow-2xl m-8 rounded-xs print:m-0 print:w-screen print:rounded-none print:shadow-none"
    >
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
      <Header color={accentColor} />
      <div className="p-6 gap-2 flex flex-col text-xs">
        <Summary />
        <Experience />
        <Education />
        <div className="flex gap-3">
          <Skills />
          <Projects />
        </div>
        <div className="flex gap-3">
          <Languages />
          <References />
        </div>
      </div>
    </div>
  );
}
