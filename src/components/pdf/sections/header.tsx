/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { data } from "@/schemas";
import { differenceInYears } from "date-fns";

const styles = StyleSheet.create({
  header: {
    color: "white",
    padding: 20,
    backgroundColor: "#002060",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  link: {
    // inherit doesn't work
    color: "white",
    textDecoration: "none",
  },
  firstName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lastName: {
    fontSize: 20,
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    fontSize: 10,
    fontWeight: "thin",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  age: {
    fontSize: 12,
  },
});

export function Header() {
  const linkedin = data.socials.find((s) => s.name === "LinkedIn");
  return (
    <View style={styles.header}>
      {/* Personal */}
      <View>
        <Text style={styles.firstName}>{data.firstName}</Text>
        <Text style={styles.lastName}>{data.lastName}</Text>
        <Text style={styles.age}>
          {differenceInYears(new Date(), new Date(data.birthday))} ans
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>{data.title}</Text>

      {/* Info */}
      <View style={styles.infos}>
        <View style={styles.flex}>
          <Link style={styles.link} href={`mailto:${data.email}`}>
            {data.email}
          </Link>
          <Image src="/envelope-solid.png" style={styles.icon} />
        </View>
        <View style={styles.flex}>
          <Link style={styles.link} href={`tel:${data.phone}`}>
            {data.phone}
          </Link>
          <Image src="/phone-solid.png" style={styles.icon} />
        </View>
        {linkedin && (
          <View style={styles.flex}>
            <Link style={styles.link} href={linkedin.link}>
              {linkedin.name}
            </Link>
            <Image src="/linkedin-brands.png" style={styles.icon} />
          </View>
        )}
        {data.drivingLicense && (
          <View style={styles.flex}>
            <Text>Permis {data.drivingLicense}</Text>
            <Image src="/car-solid.png" style={styles.icon} />
          </View>
        )}
      </View>
    </View>
  );
}
