import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontSize: 10,
  },
  main: {
    padding: 20,
    // paddingHorizontal: 20,
    // paddingBottom: 20,
  },
  domain: {
    fontWeight: "bold",
  },
  summary: {
    textAlign: "justify",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  grow: {
    flex: 1,
  },
  h2: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  sections: {
    gap: 10,
  },
});
