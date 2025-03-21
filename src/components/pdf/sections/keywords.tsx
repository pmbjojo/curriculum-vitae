import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { meta } from "@/data";

const styles = StyleSheet.create({
  keywords: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    fontWeight: "semibold",
  },
});

export function Keywords() {
  return (
    <View style={styles.keywords}>
      {meta.keywords.map((k) => (
        <Text key={k}>{k}</Text>
      ))}
    </View>
  );
}
