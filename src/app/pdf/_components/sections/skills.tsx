import { meta } from "@/data";
import { Section } from "../section";

export function Skills() {
  return (
    <Section title="Compétences">
      <ul className="pr-5">
        {meta.skills.map((s) => (
          <li key={s.domain}>
            <h3 className="font-bold">{s.domain}</h3>
            <div>{s.items.join(", ")}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
