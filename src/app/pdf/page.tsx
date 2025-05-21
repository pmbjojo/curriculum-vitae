import { CurriculumVitae } from "./_components/curriculum-vitae";
import { Metadata } from "next";
import { resume } from "@/data";
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
