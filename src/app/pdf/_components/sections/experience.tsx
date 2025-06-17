import { displayInterval } from "@/lib/utils";
import { resume } from "@/data";
import { Section } from "../section";
import { Institution, Description } from "../institution";

export function Experience() {
  return (
    <Section title="Expérience">
      <ul className="flex flex-col gap-1">
        {resume.experience.map((e) => (
          <li key={e.website}>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold">
                  {e.title} ({e.contract})
                </h3>
                <div>{displayInterval(e.dates)}</div>
              </div>
              <Description>
                <Institution address={e.address} url={e.website} />,{" "}
                {e.department}
              </Description>
            </div>
            <ul className="list-inside list-disc">
              {e.tasks.map((t) => (
                <li key={t.title}>{t.title}</li>
              ))}
            </ul>
            <div>Technologies : {e.technologies.join(", ")}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
