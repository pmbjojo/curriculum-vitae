import { TProject } from "@/schemas";

export const projects: TProject[] = [
  {
    title: "SIGL",
    name: "Journal de formation des apprentis",
    summary:
      "Plateforme de gestion des formations et des suivis d'apprentissage",
    description:
      "Une plateforme web permettant aux apprentis de suivre et documenter leur formation. Elle inclut des fonctionnalités de gestion des mémoires de fin d'études, de saisie des notes, d'organisation des entretiens et soutenances, ainsi qu'un système d'authentification et de rôles.",
    technologies: ["NextJS", "tRPC", "Prisma", "PostgreSQL", "Mantine"],
    type: "Scolaire",
    year: 2024,
    repository: "https://gitlab.com/pmbjojo/sigl",
  },
  {
    title: "Obelisk",
    name: "Serveur domestique",
    summary: "Hébergement auto-géré de services multimédias et cloud personnel",
    description:
      "Un homelab personnel permettant d'héberger divers services comme un cloud privé, une bibliothèque multimédia et un serveur de streaming. Il sert aussi de terrain d'expérimentation pour des machines virtuelles et des conteneurs Docker.",
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
    name: "Jeu avec voitures télécommandées",
    summary:
      "Jeu où des voitures télécommandées sont contrôlées via une interface web en temps réel",
    description:
      "Un projet universitaire consistant à développer un jeu où des voitures télécommandées sont contrôlées via une interface web en temps réel. Le jeu met en scène trois véhicules, un 'Tank' et deux 'Flashmobiles'. Les 'Flashmobiles' doivent percuter le tank pour marquer des points.",
    technologies: ["Python", "Tornado", "Raspberry", "JavaScript"],
    type: "Scolaire",
    year: 2021,
    // repository: "",
  },
  {
    title: "Vodkify",
    name: "Client Spotify alternatif",
    summary:
      "Application permettant d'explorer et d'écouter de la musique sans passer par le client officiel",
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
    name: "Application de dessin",
    summary: "Application de bureau de dessin avec divers outils",
    description:
      "Une application Java permettant de dessiner avec divers outils (pinceaux, formes, couleurs). Développée dans le cadre d'un projet scolaire pour apprendre à utiliser Java Swing et la programmation orientée objet.",
    technologies: ["Java", "Swing", "JUnit"],
    type: "Scolaire",
    year: 2022,
    repository: "https://github.com/pmbjojo/be-an-artist",
  },
];
