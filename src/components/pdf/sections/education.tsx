import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
import { data } from "@/schemas";
import { displayInterval } from "@/lib/utils";
import { Section } from "../blocks/section";
import { Institution } from "../blocks/institution";

export function Education() {
  return (
    <Section title="Formation">
      <View style={styles.column}>
        {data.education.map((e) => (
          <View key={e.institution}>
            <View style={styles.row}>
              <Text style={styles.h2}>
                {e.degree}
                {e.options && `, option ${e.options.join(", ")}`}
              </Text>
              <Text>{displayInterval(e.dates, "yyyy")}</Text>
            </View>
            <Institution institution={e.institution} city={e.address.city} />
          </View>
        ))}
      </View>
    </Section>
  );
}
