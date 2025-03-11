import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { data } from "@/schemas";

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
      {data.keywords.map((k) => (
        <Text key={k}>{k}</Text>
      ))}
    </View>
  );
}
