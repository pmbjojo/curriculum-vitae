import { TEducation } from "@/schemas";

export const bac: TEducation = {
  degree: "Baccalauréat Scientifique",
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
  options: ["Sciences de l'Ingénieur"],
  description:
    "J'ai choisi la spécialité Sciences de l'Ingénieur (SI) au sein du baccalauréat scientifique. À travers des projets concrets, j'ai appris à modéliser, simuler et analyser des systèmes techniques. Cette expérience a renforcé mon intérêt pour l'ingénierie et m'a préparé aux études supérieures dans ce domaine.",
  website: "https://lycee-tocqueville.fr/",
  grade: "Passable",
};
