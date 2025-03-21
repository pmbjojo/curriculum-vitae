import { TSkill } from "@/schemas";

export const skills: TSkill[] = [
  {
    domain: "Langages",
    items: ["TypeScript", "C#", "Java", "C++", "Python"],
  },
  {
    domain: "Infrastructure",
    items: ["Linux", "Azure", "Terraform", "Docker", "Ansible"],
  },
  { domain: "Frameworks", items: [".NET", "React", "Node.Js"] },
  { domain: "Base de données", items: ["PostgreSQL", "Oracle", "SQLite"] },
  // { domain: "Android", items: ["Java", "React Native"] },
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
  { domain: "Gestion de versions", items: ["Git", "SVN"] },
];
