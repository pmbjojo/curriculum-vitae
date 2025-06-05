import { TProject } from "@/schemas/project";

export const cybersecurityLab: TProject = {
  title: "Cybersecurity Lab",
  name: "Laboratoire Cybersécurité",
  summary:
    "Laboratoire pratique pour l'apprentissage des concepts de cybersécurité et des tests d'intrusion.",
  description: `Ce projet est un laboratoire de cybersécurité conçu pour explorer et comprendre les vulnérabilités courantes des applications web. Il utilise des outils comme DVWA, OWASP WebGoat, Wireshark, et des environnements virtualisés avec Vagrant et Docker. Les étudiants peuvent pratiquer l'exploitation de failles, l'analyse réseau, et l'automatisation de déploiement avec Ansible.`,
  technologies: [
    "Shell",
    "Wireshark",
    "Ansible",
    "DVWA",
    "OWASP WebGoat",
    "PHP",
    "MariaDB",
    "Vagrant",
    "Docker",
  ],
  type: "Académique",
  year: 2022,
  repository: "https://github.com/pmbjojo/cybersecurity-lab",
};
