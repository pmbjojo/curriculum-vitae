import { TExperience } from "@/schemas";

export const experience: TExperience[] = [
  {
    title: "Développeur logiciel",
    contract: "Apprentissage",
    website: "https://www.omexom.fr/implantations/sdel-controle-commande/",
    address: {
      institution: "SDEL Contrôle Commande",
      street: "Aéropole, D2A, Rue Nungesser et Coli",
      city: "Saint-Aignan-Grandlieu",
      state: "Loire-Atlantique",
      zip: "44860",
      country: "France",
    },
    dates: {
      start: new Date("2021-09-01"),
      end: new Date("2024-08-31"),
    },
    description:
      "Au sein du bureau d'études logiciel, j'ai participé au développement d'une application web embarquée permettant la configuration et la supervision d'automates industriels. J'ai également travaillé sur une plateforme de génération de systèmes d'exploitation Linux pour des équipements embarqués, en intégrant des outils et des bibliothèques spécifiques au domaine de l'automatisme industriel. Ce poste m'a permis de développer des compétences en développement full-stack, en programmation bas niveau et en industrialisation logicielle.",
    tasks: [
      "Conception et développement d'une application web embarquée permettant la configuration d'automates industriels",
      "Mise en place d'une plateforme de génération de systèmes d'exploitation Linux",
    ],
    technologies: [
      // Optimistic Updates, Form Handling, Validation, Authentication, Authorization
      "TypeScript",
      "React",
      "C++",
      "OpenApi",
      "Yocto Project",
      "Linux",
    ],
  },

  {
    title: "Développeur Full Stack",
    contract: "Stage",
    website: "https://kropman.nl/",
    address: {
      institution: "Kropman",
      street: "Lagelandseweg 84",
      city: "Nimègue",
      state: "Gueldre",
      zip: "6545 CG",
      country: "Pays-Bas",
    },
    dates: {
      start: new Date("2024-06-01"),
      end: new Date("2024-08-31"),
    },
    description:
      "Dans une équipe de développement interne, j'ai contribué à la création et à l'amélioration d'applications métiers utilisées pour la gestion documentaire et le suivi des demandes de matériel. Mon rôle consistait à moderniser une application existante en la migrant vers des technologies plus récentes, tout en assurant une meilleure ergonomie et des performances accrues. Ce stage m'a permis d'approfondir mes compétences en développement d'applications web basées sur le framework .NET.",
    tasks: [
      "Développement d'une application de gestion et du suivi de la diffusion de documents",
      "Refonte et modernisation d'une application de gestion des demandes de matériel existante",
    ],
    technologies: ["C#", ".Net", "Blazor", "Entity Framework", "SharePoint"],
  },
  {
    title: "Développeur logiciel",
    contract: "Stage",
    website: "https://amtech-ingenierie.fr/",
    address: {
      institution: "AMTECH Ingénierie",
      street: "ZAC Maison Georges",
      city: "La Hague",
      state: "Manche",
      zip: "50440",
      country: "France",
    },
    dates: {
      start: new Date("2021-04-01"),
      end: new Date("2021-05-31"),
    },
    description:
      "J'ai travaillé sur le développement d'un système embarqué destiné à l'inspection d'environnements contrôlés dans le secteur nucléaire. Mon travail a consisté à concevoir et programmer une caméra d'inspection intégrant des protocoles de communication spécifiques pour interagir avec des équipements industriels. Ce projet m'a apporté une expérience précieuse dans le domaine des systèmes embarqués et de la communication entre machines.",
    tasks: [
      "Conception d'une caméra d'inspection pour environnements contrôlés (nucléaire)",
    ],
    technologies: ["Raspberry Pi", "SBUS", "CAN BUS", "Python"],
  },
];
