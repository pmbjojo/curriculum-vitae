import type { TProject } from "@/schemas/project";

export const joesphine: TProject = {
  title: "Joséphine",
  name: "Serveur domestique",
  summary: "Hébergement de services multimédias et cloud personnel",
  description:
    "Un homelab personnel permettant d'héberger divers services comme un cloud privé, une bibliothèque multimédia et un serveur de streaming. Il sert aussi de terrain d'expérimentation pour des machines virtuelles et des conteneurs Docker.",
  technologies: ["Docker", "Ubuntu", "Streaming"],
  type: "Personnel",
  date: new Date("2025-10-01"),
  pdf: true,
};
