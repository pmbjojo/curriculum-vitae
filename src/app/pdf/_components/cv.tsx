import { meta } from "@/data";
import { Document, Page, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { Header } from "./sections/header";
import { Summary } from "./sections/summary";
import { Keywords } from "./sections/keywords";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";
import { Languages } from "./sections/languages";
import { References } from "./sections/references";

export function CurriculumVitae() {
  return (
    <Document
      author={meta.firstName + " " + meta.lastName}
      keywords={meta.keywords.join(", ")}
      subject="Curriculum Vitae"
      title={meta.title}
      creationDate={new Date()}
      creator={meta.firstName + " " + meta.lastName}
      producer={meta.firstName + " " + meta.lastName}
      language="fr"
    >
      <Page style={styles.page}>
        <Header />
        <View style={styles.main}>
          <View style={styles.sections}>
            <Keywords />
            <Summary />
            <Experience />
            <Education />
            <View style={styles.row}>
              <View style={styles.grow}>
                <Skills />
              </View>
              <View style={styles.grow}>
                <Projects />
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Languages />
              </View>
              <View style={styles.grow}>
                <References />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
