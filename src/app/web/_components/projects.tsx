import { meta } from "@/data";
import { Section } from "./section";

export function Projects() {
  return (
    <Section title="Projets">
      {meta.projects.map((p) => (
        <div key={p.name}>
          <h3 className="font-bold">{p.name}</h3>
          <div className="text-gray-800 italic text-[0.7rem]">{p.summary}</div>
          <div>{p.technologies.join(", ")}</div>
        </div>
      ))}
    </Section>
  );
}
