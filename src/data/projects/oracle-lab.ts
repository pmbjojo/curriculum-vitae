import { TProject } from "@/schemas/project";

export const oracleLab: TProject = {
  title: "Oracle Lab",
  name: "Techniques avancées de bases de données",
  summary:
    "Laboratoire Oracle axé sur les vues, fonctions et triggers, déployé via Podman.",
  description: `Ce projet académique explore des techniques avancées en bases de données Oracle, notamment la création de vues, de fonctions et de triggers. L'environnement est déployé localement à l'aide de Podman avec l'image Oracle XE 11g. Le dépôt contient des scripts SQL pour la création de schémas, des exemples de fonctions et de triggers, ainsi qu'un rapport détaillé. Ce laboratoire a été réalisé dans le cadre d'un cours universitaire sur les bases de données avancées.`,
  technologies: ["Oracle SQL", "PL/SQL", "Podman", "Docker", "Linux"],
  type: "Académique",
  year: 2023,
  repository: "https://github.com/pmbjojo/oracle-lab",
};
