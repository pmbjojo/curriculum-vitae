import { data } from "@/schemas";
import {
  // StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Section } from "../blocks/section";
import { styles } from "../styles";
// import { List } from "../blocks/list";

// const skillStyles = StyleSheet.create({
//   skills: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//   },
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   item: {
//     flexBasis: "50%",
//     paddingBottom: 5,
//   },
// });

export function Skills() {
  return (
    <Section title="Compétences">
      <View style={styles.column}>
        {data.skills.map((s) => (
          <View key={s.domain}>
            <Text style={styles.domain}>{s.domain}</Text>
            <Text>{s.items.join(", ")}</Text>

            {/* <List items={s.items} /> */}
          </View>
        ))}
      </View>
    </Section>
  );
}
