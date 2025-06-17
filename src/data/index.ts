import { SResume, TResume } from "@/schemas";
import { projects } from "./projects";
import { experience } from "./experience";
import { education } from "./education";
import { languages } from "./languages";
import { socials } from "./socials";
import { skills, softSkills } from "./skills";
import { references } from "./references";
import { intervalToDuration } from "date-fns";

const yearsOfExperience = intervalToDuration({
  start: experience[0].dates.start,
  end: new Date(),
}).years;

const data: TResume = {
  title: "Développeur Full Stack",
  birthday: new Date("2001-04-20"),
  firstName: "Joshua",
  lastName: "Jourdam",
  email: "jourdamj@gmail.com",
  phone: "+33 6 67 18 13 24",
  socials,
  website: "https://joshua-jourdam.vercel.app/",
  highlights: {
    experience: `+${yearsOfExperience} ans d'expérience en développement logiciel`,
    education: "Diplôme d'Ingénieur en Informatique et Systèmes d'Information",
    localisation: "Disponible sur la région Grand Ouest",
  },
  address: {
    institution: "Home",
    street: "32 route tourtique",
    city: "Bretteville",
    state: "Manche",
    zip: "50110",
    country: "France",
  },
  drivingLicense: "B",
  keywords: ["TypeScript", "React", ".NET", "Linux"],
  skills,
  softSkills,
  projects,
  experience,
  education,
  languages,
  summary:
    "Ingénieur logiciel avec 3 ans d'expérience, j'ai conçu et fait évoluer des outils embarqués en C++ et React dédiés à la supervision et à la configuration d'automates déployés dans les postes électriques français. J'ai également créé et modernisé des applications métiers en .NET et Blazor, dans un environnement international et agile.",
  hobbies: [
    "Curiosité technologique",
    "Sports loisirs",
    "Stratégie et réflexion",
    "Culture geek",
  ],
  references,
};

const result = SResume.safeParse(data);
if (!result.success) {
  console.error(result.error);
}
export const resume = result.data ?? data;
