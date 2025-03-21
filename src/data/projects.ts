import { TProject } from "@/schemas";

export const projects: TProject[] = [
  {
    title: "SIGL",
    summary: "Journal de formation des apprentis",
    description:
      "Une plateforme web permettant aux apprentis de suivre et documenter leur formation. Elle inclut des fonctionnalités de gestion des mémoires de fin d'études, de saisie des notes, d'organisation des entretiens et soutenances, ainsi qu'un système d'authentification et de rôles.",
    technologies: ["NextJS", "tRPC", "Prisma", "PostgreSQL", "Mantine"],
    type: "Scolaire",
    year: 2024,
    repository: "https://gitlab.com/pmbjojo/sigl",
    website: "",
  },
  {
    title: "Obelisk",
    summary: "Serveur domestique",
    description:
      "Un homelab personnel permettant d'héberger divers services comme un cloud privé, une bibliothèque multimédia et un serveur de streaming. Il sert aussi de terrain d'expérimentation pour le déploiement et l'administration de nouvelles technologies.",
    technologies: ["Docker", "Ubuntu", "Streaming"],
    type: "Personnel",
    year: 2023,
  },
  // {
  //   title: "Dokkan Explorer",
  //   summary: "Explorateur de cartes Dokkan Battle",
  //   description:
  //     "Un site web permettant de consulter et explorer la base de données des cartes du jeu mobile Dragon Ball Z: Dokkan Battle. Il propose une interface interactive avec filtres et recherches avancées.",
  //   technologies: ["NextJS", "Drizzle", "Shadcn", "TailwindCSS"],
  //   type: "Personnel",
  //   year: 2025,
  //   repository: "https://github.com/pmbjojo/dokkan",
  //   website: "https://dokkan-explorer.vercel.app",
  // },
  {
    title: "Flashmobiles",
    summary: "Jeu avec voitures télécommandées",
    description:
      "Un projet universitaire consistant à développer un jeu où des voitures télécommandées sont contrôlées via une interface web en temps réel. Utilisation d'un Raspberry Pi pour la communication avec les véhicules.",
    technologies: ["Python", "Tornado", "Raspberry", "Javascript"],
    type: "Scolaire",
    year: 2021,
    repository: "",
    website: "",
  },
  {
    title: "Vodkify",
    summary: "Client Spotify alternatif",
    description:
      "Un client web alternatif pour Spotify. Il inclut des fonctionnalités de recherche et de gestion de playlists.",
    technologies: ["NextJS", "TRPC", "Clerk", "TailwindCSS", "Spotify"],
    type: "Personnel",
    year: 2023,
    repository: "https://github.com/pmbjojo/vodkify",
    website: "https://vodkify.vercel.app",
  },
  {
    title: "Be an Artist",
    summary: "Application de dessin",
    description:
      "Une application Java permettant de dessiner avec divers outils (pinceaux, formes, couleurs). Développée avec Swing pour une interface graphique simple et intuitive.",
    technologies: ["Java", "Swing"],
    type: "Scolaire",
    year: 2022,
    repository: "https://github.com/pmbjojo/be-an-artist",
  },
];
