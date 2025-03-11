import { Text } from "@react-pdf/renderer";
import { data } from "@/schemas";
import { Section } from "../blocks/section";

export function Languages() {
  return (
    <Section title="Langues">
      {data.languages.map((l) => (
        <Text key={l.name}>
          {l.name}&#9;&#9;{l.level}
        </Text>
      ))}
    </Section>
  );
}
