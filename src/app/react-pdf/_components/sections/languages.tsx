import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { meta } from "@/data";
import { Section } from "../blocks/section";

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
});

export function Languages() {
  return (
    <Section title="Langues">
      <View style={styles.row}>
        <View style={styles.column}>
          {meta.languages.map((l) => (
            <Text key={l.name}>{l.name}</Text>
          ))}
        </View>
        <View style={styles.column}>
          {meta.languages.map((l) => (
            <Text key={l.name}>{l.level}</Text>
          ))}
        </View>
      </View>
    </Section>
  );
}
