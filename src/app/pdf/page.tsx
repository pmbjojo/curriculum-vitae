import type { Metadata } from "next";
import { resume } from "@/data";
import { CurriculumVitae } from "./_components/curriculum-vitae";
import { Tools } from "./_components/tools";

export const metadata: Metadata = {
  title: `${resume.firstName} ${resume.lastName} - PDF`,
};

export default function PdfPage() {
  return (
    <div className="bg-accent flex">
      <Tools />
      <CurriculumVitae />
    </div>
  );
}
