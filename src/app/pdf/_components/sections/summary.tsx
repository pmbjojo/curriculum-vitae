import { resume } from "@/data";

export function Summary() {
  return (
    <>
      <div className="text-center font-bold text-base">
        {resume.keywords.join(" - ")}
      </div>
      <div className="text-justify">
        {resume.summary} {resume.highlights.localisation}.
      </div>
    </>
  );
}
