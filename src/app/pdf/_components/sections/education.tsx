import { resume } from "@/data";
import { Section } from "../section";
import { displayInterval } from "@/lib/utils";
import { Institution, Description } from "../institution";

export function Education() {
  return (
    <Section title="Formation">
      <ul className="flex flex-col gap-1">
        {resume.education
          .filter((e) => e.pdf)
          .map((e) => (
            <li key={e.address.institution}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold">
                  {e.degree}
                  {e.options && `, option ${e.options.join(", ")}`}
                </div>
                <div>{displayInterval(e.dates, "yyyy")}</div>
              </div>
              <Description>
                <Institution address={e.address} url={e.website} />
              </Description>
            </li>
          ))}
      </ul>
    </Section>
  );
}
