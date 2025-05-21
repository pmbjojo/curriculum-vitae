import { resume } from "@/data";
import { Section } from "../section";
import { displayInterval } from "@/lib/utils";
import { Institution } from "../institution";

export function Education() {
  return (
    <Section title="Formation">
      <ul className="flex flex-col gap-1">
        {resume.education.map((e) => (
          <li key={e.address.institution}>
            <div className="flex justify-between items-center">
              <div className="font-bold text-sm">
                {e.degree}
                {e.options && `, option ${e.options.join(", ")}`}
              </div>
              <div>{displayInterval(e.dates, "yyyy")}</div>
            </div>
            <Institution address={e.address} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
