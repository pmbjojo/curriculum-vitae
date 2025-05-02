import { A4 } from "./a4";
import { Header } from "./sections/header";
import { Summary } from "./sections/summary";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";
import { Languages } from "./sections/languages";
import { References } from "./sections/references";
import { Hobbies } from "./sections/hobbies";

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
          <References />
          <Hobbies />
        </div>
      </div>
    </A4>
  );
}
