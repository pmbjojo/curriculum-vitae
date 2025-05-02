import { TEducation } from "@/schemas";

export const bac: TEducation = {
  degree: "Baccalauréat Scientifique, option Sciences de l'Ingénieur",
  dates: {
    start: new Date("2017-09-01"),
    end: new Date("2019-06-31"),
  },
  address: {
    institution: "Lycée Alexis de Tocqueville",
    street: "34 Av. Henri Poincaré",
    city: "Cherbourg-en-Cotentin",
    state: "Manche",
    zip: "50100",
    country: "France",
  },
  description: "",
  keyCourses: [
    "Sciences de l'Ingénieur",
    "Mathématiques",
    "Physique",
    "Anglais",
  ],
  website: "https://lycee-tocqueville.fr/",
};
