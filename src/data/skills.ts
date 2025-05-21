import { TSkill, TSoftSkill } from "@/schemas/skill";

export const skills: TSkill[] = [
  {
    domain: "Langages",
    items: ["TypeScript", "C#", "Java", "C++", "Python"],
  },
  { domain: "Frameworks", items: [".NET", "React", "Node.Js"] },
  {
    domain: "Infrastructure",
    items: ["Linux", "Azure", "Terraform", "Docker", "Ansible"],
  },
  { domain: "Base de données", items: ["PostgreSQL", "Oracle", "SQLite"] },
  // { domain: "Android", items: ["Java", "React Native"] },
  { domain: "Gestion de versions", items: ["Git", "SVN"] },
  {
    domain: "Méthodologies",
    items: ["Agile", "CI/CD", "Gestion de projet"],
  },
];

export const softSkills: TSoftSkill[] = [
  {
    name: "Pédagogie",
    description:
      "J'aime transmettre mes connaissances et accompagner les autres dans leur apprentissage.",
  },
  {
    name: "Curiosité",
    description:
      "J'explore régulièrement de nouveaux domaines pour enrichir mes compétences.",
  },
  {
    name: "Esprit critique",
    description:
      "J'analyse les situations avec recul afin de proposer des solutions pertinentes et d'améliorer continuellement mes méthodes de travail.",
  },
  {
    name: "Initiative",
    description:
      "Je n'hésite pas à prendre des initiatives pour faire avancer les projets et proposer des améliorations, tout en restant à l'écoute de l'équipe.",
  },
];
