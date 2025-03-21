import { meta } from "@/data";
import { styles } from "../styles";
import { Text, View } from "@react-pdf/renderer";

export function Summary() {
  return (
    <View style={styles.summary}>
      <Text>{meta.summary}</Text>
    </View>
  );
}
