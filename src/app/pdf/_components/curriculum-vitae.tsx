import { A4 } from "@/app/pdf/_components/a4";
import { Header } from "./header";
import { Summary } from "./summary";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Languages } from "./languages";
import { References } from "./references";

export function CurriculumVitae() {
  const accentColor = "black";
  return (
    <A4>
      <Header color={accentColor} />
      <div className="p-6 gap-2 flex flex-col text-xs">
        <Summary />
        <Experience />
        <Education />
        <div className="flex gap-3">
          <Skills />
          <Projects className="grow" />
        </div>
        <div className="flex gap-3">
          <Languages />
          <References className="grow" />
        </div>
      </div>
    </A4>
  );
}
