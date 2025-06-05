import { TProject } from "@/schemas/project";

export const drawingCompetitionManagement: TProject = {
  title: "Drawing Competition Management",
  name: "Gestion de concours de dessin",
  summary:
    "Application web pour organiser et gérer des concours de dessin, avec une infrastructure déployée sur Azure.",
  description: `Ce projet académique consiste en une application web permettant l'organisation et la gestion de concours de dessin. Il intègre des fonctionnalités telles que la création de concours, la soumission de dessins par les participants, et l'évaluation par un jury. L'infrastructure est déployée sur Microsoft Azure en utilisant Terraform pour le provisionnement et Ansible pour la configuration. Le backend est développé en PHP, avec une base de données SQL.`,
  technologies: ["PHP", "Ansible", "SQL", "Azure", "Terraform"],
  type: "Académique",
  year: 2022,
  repository: "https://github.com/pmbjojo/drawing-competition-management",
};
