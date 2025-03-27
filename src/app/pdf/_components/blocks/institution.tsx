import { Text } from "@react-pdf/renderer";
import { styles } from "../styles";

export function Institution({
  institution,
  city,
}: {
  institution: string;
  city: string;
}) {
  return (
    <Text style={styles.fade}>
      {institution}, {city}
    </Text>
  );
}
