import { SCV, TCV } from "@/schemas";
import { projects } from "./projects";
import { experience } from "./experience";
import { education } from "./education";
import { languages } from "./languages";
import { socials } from "./socials";
import { skills } from "./skills";
import { references } from "./references";
import { intervalToDuration } from "date-fns";

const yearsOfExperience = intervalToDuration({
  start: experience[0].dates.start,
  end: new Date(),
}).years;

export const cv: TCV = {
  title: "Développeur Full Stack",
  // title: "Concepteur Logiciel",
  birthday: new Date("2001-04-20"),
  firstName: "Joshua",
  lastName: "Jourdam",
  email: "jourdamj@gmail.com",
  phone: "+33 6 67 18 13 24",
  socials,
  website: "https://joshua-jourdam.vercel.app/",
  highlights: {
    experience: `+${yearsOfExperience} années d'expérience en développement logiciel`,
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
  keywords: ["TypeScript", "React", ".Net", "Linux"],
  skills,
  projects,
  experience,
  education,
  languages,
  summary:
    "Ingénieur diplômé de l'ESEO Angers avec 3 ans d'expérience en apprentissage dans la R&D chez SDEL Contrôle Commande (VINCI Energies). Expérience en développement full stack, spécialisé en React et .NET.",
  // "Je suis ingénieur jeune diplômé de l'ESEO Angers. J'ai travaillé trois ans en apprentissage au sein du département Recherche et Développement de SDEL Contrôle Commande, société de VINCI Energies. J'ai également pu évoluer au sein d'une équipe de développement agile lors de mon récent stage aux Pays Bas. Fort de mon expérience avec React et .NET, je recherche un poste en développement logiciel.",
  // "Je suis ingénieur jeune diplômé de l'ESEO Angers. J'ai travaillé trois ans en apprentissage au sein du département R&D de SDEL Contrôle Commande, société de VINCI Energies. J'ai également pu évoluer au sein d'une équipe de développement agile lors de mon récent stage aux Pays Bas. Fort de mon expérience avec React et .NET, je recherche un poste en développement web full stack.",
  hobbies: ["Serveur domestique", "Ecosystème Linux"],
  references,
};

export const meta = SCV.parse(cv);
