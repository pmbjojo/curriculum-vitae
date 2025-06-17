import { resume } from "@/data";
import Markdown from "react-markdown";

export function Summary() {
  return (
    <>
      <div className="text-center text-base font-bold">
        {resume.keywords.join(" - ")}
      </div>
      <div className="text-justify">
        <Markdown>
          {`${resume.summary} ${resume.highlights.localisation}.`}
        </Markdown>
      </div>
    </>
  );
}
