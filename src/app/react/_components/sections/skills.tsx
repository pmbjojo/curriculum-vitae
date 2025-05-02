import { meta } from "@/data";
import { Section } from "../section";

export function Skills() {
  return (
    <Section title="Compétences">
      {meta.skills.map((s) => (
        <div key={s.domain} className="pr-5">
          <h3 className="font-bold">{s.domain}</h3>
          <ul className="list-disc list-inside">{s.items.join(", ")}</ul>
        </div>
      ))}
    </Section>
  );
}
