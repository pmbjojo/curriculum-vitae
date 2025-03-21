import { Text, View } from "@react-pdf/renderer";
import { meta } from "@/data";
import { Section } from "../blocks/section";
import { styles } from "../styles";

export function References() {
  return (
    <Section title="Reférences">
      <View style={styles.column}>
        {meta.references.map((r) => (
          <View key={r.name}>
            <View style={styles.row}>
              <Text style={styles.h2}>{r.name}</Text>
              <Text>
                {r.position} ({r.company})
              </Text>
            </View>
            <Text>{r.email}</Text>
            <Text>{r.phone}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}
