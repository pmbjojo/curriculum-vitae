import { TProject } from "@/schemas/project";

export const coinrankingApp: TProject = {
  title: "Coinranking App",
  name: "Application de suivi de cryptomonnaies",
  summary:
    "Projet Android pour apprendre à afficher et sauvegarder des données issues d'une API externe.",
  description:
    "Ce projet académique a pour objectif de découvrir le développement d'applications Android en Java. Il consiste à créer une application permettant de suivre les cours des cryptomonnaies en temps réel grâce à l'intégration d'une API externe (Coinranking). Les données récupérées sont ensuite stockées localement à l'aide de Room afin d'assurer leur persistance et d'offrir une expérience utilisateur fluide, même hors connexion.",
  technologies: ["Java", "Android", "Room", "Retrofit"],
  type: "Académique",
  year: 2023,
  repository: "https://github.com/pmbjojo/coinranking-app",
};
