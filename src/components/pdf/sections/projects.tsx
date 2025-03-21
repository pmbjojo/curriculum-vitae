import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
import { meta } from "@/data";
import { Section } from "../blocks/section";

export function Projects() {
  return (
    <Section title="Projets">
      <View style={styles.column}>
        {meta.projects.map((p) => (
          <View key={p.title}>
            <Text style={styles.domain}>{p.summary}</Text>
            <Text>{p.technologies.join(", ")}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}
