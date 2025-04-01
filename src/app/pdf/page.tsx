import { CurriculumVitae } from "./_components/curriculum-vitae";
import { Metadata } from "next";
import { meta } from "@/data";
import { Tools } from "./_components/tools";

export const metadata: Metadata = {
  title: `${meta.firstName} ${meta.lastName} - PDF`,
};

export default function PdfPage() {
  return (
    <>
      <Tools />
      <CurriculumVitae />
    </>
  );
}
