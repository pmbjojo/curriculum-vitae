import { meta } from "@/data";
import { generatePdf } from "@/lib/generatePdf";

// export const dynamic = "force-static";

export async function GET() {
  const pdf = await generatePdf();

  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    `attachment; filename=CV ${
      meta.firstName
    } ${meta.lastName.toUpperCase()}.pdf`
  );
  headers.append("Content-Type", "application/pdf");

  return new Response(pdf, {
    headers: {
      "Content-Disposition": `attachment; filename=CV ${meta.firstName} ${meta.lastName}.pdf`,
      "Content-Type": "application/pdf",
    },
  });
}
