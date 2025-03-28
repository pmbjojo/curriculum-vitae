import puppeteer from "puppeteer";

export const dynamic = "force-static";

export async function GET() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/web", {
    waitUntil: "networkidle0",
  });
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  const headers = new Headers();
  // remember to change the filename here
  headers.append("Content-Disposition", 'attachment; filename="test.pdf"');
  headers.append("Content-Type", "application/pdf");

  await browser.close();
  return new Response(pdf, {
    headers,
  });
}
