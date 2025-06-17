import { resume } from "@/data";
import { Section } from "../section";
import { Description } from "../institution";

export function Projects({ className }: { className?: string }) {
  return (
    <Section title="Projets" className={className}>
      <ul>
        {resume.projects
          .filter((p) => p.pdf)
          .toSorted((a, b) => b.year - a.year)
          .map((p) => (
            <li key={p.name}>
              <h3 className="font-bold">{p.name}</h3>
              <Description>{p.summary}</Description>
              <div>{p.technologies.slice(0, 5).join(", ")}</div>
            </li>
          ))}
      </ul>
    </Section>
  );
}
