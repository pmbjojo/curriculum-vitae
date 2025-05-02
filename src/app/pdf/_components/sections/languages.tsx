import { meta } from "@/data";
import { Section } from "../section";

export function Languages() {
  return (
    <Section title="Langues">
      <table>
        <tbody>
          {meta.languages.map((l) => (
            <tr key={l.name}>
              <td className="font-bold pr-3">{l.name}</td>
              <td>{l.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
