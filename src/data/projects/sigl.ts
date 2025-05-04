import { TProject } from "@/schemas";

export const sigl: TProject = {
  title: "SIGL",
  name: "Journal de formation des apprentis",
  summary: "Plateforme de gestion des formations et des suivis d'apprentissage",
  description:
    "Une plateforme web permettant aux apprentis de suivre et documenter leur formation. Elle inclut des fonctionnalités de gestion des mémoires de fin d'études, de saisie des notes, d'organisation des entretiens et soutenances, ainsi qu'un système d'authentification et de rôles.",
  technologies: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Mantine"],
  type: "Académique",
  year: 2024,
  repository: "https://gitlab.com/pmbjojo/sigl",
};
