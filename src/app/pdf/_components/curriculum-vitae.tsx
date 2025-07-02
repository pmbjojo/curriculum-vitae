import { A4 } from "./a4";
import { Education } from "./sections/education";
import { Experience } from "./sections/experience";
import { Header } from "./sections/header";
import { Hobbies } from "./sections/hobbies";
import { Languages } from "./sections/languages";
import { Projects } from "./sections/projects";
import { References } from "./sections/references";
import { Skills } from "./sections/skills";
import { Summary } from "./sections/summary";

export function CurriculumVitae() {
  const accentColor = "black";
  return (
    <A4>
      <Header color={accentColor} />
      <div className="flex flex-col gap-2 px-6 py-3 text-xs">
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
