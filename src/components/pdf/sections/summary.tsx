import { data } from "@/schemas";
import { styles } from "../styles";
import { Text, View } from "@react-pdf/renderer";

export function Summary() {
  return (
    <View style={styles.summary}>
      <Text>{data.summary}</Text>
    </View>
  );
}
