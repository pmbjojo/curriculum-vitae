import { resume } from "@/data";
import { Section } from "../section";

export function Projects({ className }: { className?: string }) {
  return (
    <Section title="Projets" className={className}>
      <ul>
        {resume.projects.map((p) => (
          <li key={p.name}>
            <h3 className="font-bold">{p.name}</h3>
            <div className="text-gray-800 italic text-[0.7rem]">
              {p.summary}
            </div>
            <div>{p.technologies.slice(0, 5).join(", ")}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
