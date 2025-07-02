import { resume } from "@/data";
import type { TSkill } from "@/schemas/skill";
import { Section } from "../section";

const skills: TSkill[] = [
  ...resume.skills,
  { domain: "Comportementales", items: resume.softSkills.map((s) => s.name) },
];

export function Skills() {
  return (
    <Section title="Compétences">
      <ul className="pr-5">
        {skills.map((s) => (
          <li key={s.domain}>
            <h3 className="font-bold">{s.domain}</h3>
            <div>{s.items.join(", ")}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
