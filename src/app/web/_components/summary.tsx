import { meta } from "@/data";

export function Summary() {
  return (
    <>
      <div className="text-center font-bold text-base">
        {meta.keywords.join(" - ")}
      </div>
      <div className="text-justify">
        {meta.summary} {meta.highlights.localisation}.
      </div>
    </>
  );
}
