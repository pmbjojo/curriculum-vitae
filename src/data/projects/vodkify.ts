import { TProject } from "@/schemas/project";

export const vodkify: TProject = {
  title: "Vodkify",
  name: "Client Spotify alternatif",
  summary:
    "Application permettant d'explorer et d'écouter de la musique sans passer par le client officiel",
  description:
    "Un client web alternatif pour Spotify. Il inclut des fonctionnalités de recherche et de gestion de playlists.",
  technologies: ["Next.js", "tRPC", "Clerk", "TailwindCSS", "API Spotify"],
  type: "Personnel",
  year: 2024,
  repository: "https://github.com/pmbjojo/vodkify",
  website: "https://vodkify.vercel.app",
};
