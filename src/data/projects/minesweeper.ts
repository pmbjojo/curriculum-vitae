import type { TProject } from "@/schemas/project";

export const minesweeper: TProject = {
  title: "Minesweeper",
  name: "Démineur Android",
  summary:
    "Jeu classique de Démineur développé pour Android dans le cadre d'un projet académique.",
  description: `Ce projet est une implémentation du jeu classique Démineur pour la plateforme Android. Développé en Java dans le cadre d'un cours de développement Android en école d'ingénieur, il propose une interface utilisateur intuitive avec des contrôles tactiles. Le jeu offre plusieurs niveaux de difficulté, des écrans de victoire et de défaite, et une interface réactive et conviviale. Le développement a été réalisé en utilisant Android Studio, ciblant l'API 32 d'Android.`,
  technologies: ["Java", "Android"],
  type: "Académique",
  date: new Date("2022-01-01"),
  repository: "https://github.com/pmbjojo/minesweeper",
  pdf: false,
};
