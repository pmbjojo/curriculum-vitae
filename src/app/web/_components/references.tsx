import { meta } from "@/data";
import { Section } from "./section";
import Link from "next/link";

export function References() {
  return (
    <Section title="Références" className="grow">
      {meta.references.map((r) => (
        <div key={r.name}>
          <div className="flex justify-between">
            <h3 className="font-bold">{r.name}</h3>
            <p>
              {r.position} ({r.company})
            </p>
          </div>
          <Link href={`mailto:${r.email}`}>{r.email}</Link>
        </div>
      ))}
    </Section>
  );
}
