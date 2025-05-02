import { TEducation } from "@/schemas";

export const geii: TEducation = {
  degree:
    "Diplôme Universitaire et Technologique en Génie Electrique et Informatique Industrielle",
  dates: {
    start: new Date("2019-09-01"),
    end: new Date("2021-06-31"),
  },
  address: {
    institution: "Université Grand Ouest Normandie",
    street: "60 Rue Max Pol Fouchet",
    city: "Cherbourg-en-Cotentin",
    state: "Manche",
    zip: "50130",
    country: "France",
  },
  description: "",
  keyCourses: [
    "Electronique",
    "Automatique",
    "Electrotechnique",
    "Informatique",
    "Réseaux",
    "Systèmes embarqués",
  ],
  website: "https://iut-grand-ouest-normandie.unicaen.fr/",
};
