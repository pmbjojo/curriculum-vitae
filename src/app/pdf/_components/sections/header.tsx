/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { meta } from "@/data";
import { differenceInYears } from "date-fns";

const styles = StyleSheet.create({
  header: {
    color: "white",
    padding: 20,
    backgroundColor: "dark",
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
    // color: "black",
    textDecoration: "none",
  },
  firstName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lastName: {
    fontSize: 16,
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    fontSize: 10,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  age: {
    fontSize: 10,
  },
  profile: {
    width: 75,
    height: 75,
    borderRadius: 10,
    objectFit: "cover",
  },
  personal: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export function Header() {
  const linkedin = meta.socials.find((s) => s.name === "LinkedIn");
  return (
    <View style={styles.header}>
      <View style={styles.personal}>
        <Image src="/profile.jpg" style={styles.profile} />
        {/* Personal */}
        <View>
          <Text style={styles.firstName}>{meta.firstName}</Text>
          <Text style={styles.lastName}>{meta.lastName}</Text>
          <Text style={styles.age}>
            {differenceInYears(new Date(), new Date(meta.birthday))} ans
          </Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>{meta.title}</Text>

      {/* Info */}
      <View style={styles.infos}>
        <View style={styles.flex}>
          <Link style={styles.link} href={`mailto:${meta.email}`}>
            {meta.email}
          </Link>
          <Image src="/envelope-solid.png" style={styles.icon} />
        </View>
        <View style={styles.flex}>
          <Link style={styles.link} href={`tel:${meta.phone}`}>
            {meta.phone}
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
        {meta.drivingLicense && (
          <View style={styles.flex}>
            <Text>Permis {meta.drivingLicense}</Text>
            <Image src="/car-solid.png" style={styles.icon} />
          </View>
        )}
        {meta.website && (
          <View style={styles.flex}>
            <Link style={styles.link} href={meta.website}>
              Website
            </Link>
            <Image src="/globe-solid.png" style={styles.icon} />
          </View>
        )}
      </View>
    </View>
  );
}
