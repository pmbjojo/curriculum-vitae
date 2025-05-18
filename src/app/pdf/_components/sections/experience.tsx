import { displayInterval } from "@/lib/utils";
import { meta } from "@/data";
import { Section } from "../section";
import { Institution } from "../institution";

export function Experience() {
  return (
    <Section title="Expérience">
      <div className="flex flex-col gap-1">
        {meta.experience.map((e) => (
          <div key={e.website}>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm">
                  {e.title} ({e.contract})
                </h3>
                <div>{displayInterval(e.dates)}</div>
              </div>
              <Institution address={e.address} />
            </div>
            <ul className="list-disc list-inside">
              {e.tasks.map((t) => (
                <li key={t.title}>{t.title}</li>
              ))}
            </ul>
            <div>Technologies : {e.technologies.join(", ")}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
