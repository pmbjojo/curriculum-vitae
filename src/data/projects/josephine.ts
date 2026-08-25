import type { TProject } from "@/schemas/project";

export const joesphine: TProject = {
  title: "Joséphine",
  name: "Joséphine",
  summary:
    "Site vitrine pour un restaurant bistronomique avec réservation en ligne en temps réel",
  description:
    "Site vitrine et système de réservation en ligne pour le restaurant bistronomique Joséphine à Cherbourg. Les clients réservent directement un créneau disponible, pendant que le personnel dispose d'un espace d'administration pour suivre les réservations et consulter des statistiques.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "Drizzle",
    "shadcn/ui",
    "Vercel",
    "Realtime",
  ],
  type: "Professionnel",
  date: new Date("2025-06-01"),
  repository: "https://github.com/leolsvg/josephine",
  website: "https://josephine-cherbourg.fr/",
  pdf: true,
};
