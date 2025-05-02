import { TEducation } from "@/schemas";

export const eseo: TEducation = {
  degree: "Diplôme d'Ingénieur Informatique en Apprentissage",
  options: ["Cybersécurité"],
  dates: {
    start: new Date("2021-09-01"),
    end: new Date("2024-08-31"),
  },
  address: {
    institution: "ESEO Angers",
    street: "10 Bd Jean Jeanneteau",
    city: "Angers",
    state: "Maine-et-Loire",
    zip: "49100",
    country: "France",
  },
  website: "https://www.eseo.fr/",
  description:
    "J'ai suivi un cursus en apprentissage, alternant entre périodes en entreprise et périodes à l'école. J'ai choisi l'option Cybersécurité pour approfondir mes connaissances dans ce domaine.",
  grade: "Mention Bien",
  keyCourses: [
    "Informatique et systèmes d'information",
    "Développement web",
    "Systèmes embarqués",
    "Cybersécurité",
  ],
};
