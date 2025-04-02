import { meta } from "@/data";
import { Section } from "./section";

export function Projects({ className }: { className?: string }) {
  return (
    <Section title="Projets" className={className}>
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
