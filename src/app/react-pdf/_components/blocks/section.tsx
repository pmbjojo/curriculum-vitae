import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  heading: {
    borderBottom: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}
