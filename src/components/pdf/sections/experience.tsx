import { displayInterval } from "@/lib/utils";
import { data } from "@/schemas";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
import { Section } from "../blocks/section";
import { Institution } from "../blocks/institution";
import { List } from "../blocks/list";

export function Experience() {
  return (
    <Section title="Expérience">
      <View style={styles.column}>
        {data.experience.map((e) => (
          <View key={e.company} style={{ gap: 3 }}>
            <View>
              <View style={styles.row}>
                <Text style={styles.h2}>
                  {e.title} ({e.contract})
                </Text>
                <Text>{displayInterval(e.dates)}</Text>
              </View>
              <Institution institution={e.company} city={e.address.city} />
            </View>
            <List items={e.tasks} />
            <Text>Technologies : {e.technologies.join(", ")}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}
