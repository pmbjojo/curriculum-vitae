import { resume } from "@/data";
import { Section } from "../section";

export function Hobbies() {
  return (
    <Section title="Centres d'intérêt" className="grow">
      <ul className="list-disc list-inside">
        {resume.hobbies.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </Section>
  );
}
