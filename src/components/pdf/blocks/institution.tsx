import { Text } from "@react-pdf/renderer";

export function Institution({
  institution,
  city,
}: {
  institution: string;
  city: string;
}) {
  return (
    <Text
      style={{
        fontStyle: "italic",
        fontSize: 8,
        opacity: 0.8,
      }}
    >
      {institution}, {city}
    </Text>
  );
}
