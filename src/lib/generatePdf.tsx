import puppeteer from "puppeteer";
import { fileName } from "./utils";

export const generatePdf = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/pdf", {
    waitUntil: "networkidle0",
  });
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    path: `./public/${fileName}`,
  });
  await browser.close();
  return pdf;
};

generatePdf();
