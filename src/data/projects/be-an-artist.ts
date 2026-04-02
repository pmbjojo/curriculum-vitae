import type { TProject } from "@/schemas/project";

export const beAnArtist: TProject = {
  title: "Be an Artist",
  name: "Application de dessin",
  summary: "Application de bureau de dessin avec divers outils",
  description:
    "Une application Java permettant de dessiner avec divers outils (pinceaux, formes, couleurs). Développée dans le cadre d'un projet scolaire pour apprendre à utiliser Java Swing et la programmation orientée objet.",
  technologies: ["Java", "Swing", "JUnit"],
  type: "Académique",
  date: new Date("2022-01-01"),
  repository: "https://github.com/pmbjojo/be-an-artist",
  pdf: true,
};
