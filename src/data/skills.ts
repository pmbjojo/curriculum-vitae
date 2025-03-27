import { TSkill } from "@/schemas";

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
  {
    domain: "Comportementales",
    items: [
      "Pédagogie",
      "Curiosité",
      "Esprit critique",
      // "Persévérance",
      "Initiative",
    ],
  },
];
