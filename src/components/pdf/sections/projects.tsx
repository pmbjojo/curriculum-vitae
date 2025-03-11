import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
import { data } from "@/schemas";
import { Section } from "../blocks/section";
// import { List } from "../blocks/list";

export function Projects() {
  return (
    <Section title="Projets">
      <View style={styles.column}>
        {data.projects.map((p) => (
          <View key={p.title}>
            <Text style={styles.domain}>{p.title}</Text>
            <Text>{p.technologies.join(", ")}</Text>
            {/* <List items={p.technologies} /> */}
          </View>
        ))}
      </View>
    </Section>
  );
}
