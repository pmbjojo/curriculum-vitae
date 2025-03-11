import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
  },
});

export function List({ items }: { items: string[] }) {
  return (
    <View style={styles.list}>
      {items.map((i) => (
        <Text key={i}>• {i}</Text>
      ))}
    </View>
  );
}
