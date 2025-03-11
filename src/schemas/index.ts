import { Github, Linkedin } from "lucide-react";
import { z } from "zod";

export const SProjectType = z.enum(["Personnel", "Scolaire", "Professionnel"]);

export const SDates = z.object({
  start: z.date(),
  end: z.date(),
});

export const SSocials = z.array(
  z.object({
    name: z.string(),
    link: z.string(),
    icon: z.any().optional(),
  })
);

export const SAddress = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});

export const SProject = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  repo: z.string().optional(),
  website: z.string().optional(),
  year: z.number(),
  type: SProjectType,
});

export const SSkill = z.object({
  domain: z.string(),
  items: z.array(z.string()),
});

export const SExperience = z.object({
  title: z.string(),
  contract: z.string(),
  company: z.string(),
  address: SAddress,
  dates: SDates,
  description: z.string(),
  tasks: z.array(z.string()),
  technologies: z.array(z.string()),
  website: z.string(),
});

export const SEducation = z.object({
  institution: z.string(),
  degree: z.string(),
  address: SAddress,
  dates: SDates,
  description: z.string(),
  highlights: z.array(z.string()).optional(),
  keyCourses: z.array(z.string()).optional(),
  desciption: z.string().optional(),
  grade: z.string().optional(),
  options: z.array(z.string()).optional(),
  website: z.string(),
});

export const SReference = z.object({
  name: z.string(),
  position: z.string(),
  company: z.string(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
});

export const SCV = z.object({
  title: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  birthday: z.date(),
  email: z.string().email(),
  phone: z.string(),
  address: SAddress,
  drivingLicense: z.string().optional(),
  socials: SSocials,
  summary: z.string(),
  keywords: z.array(z.string()),
  skills: z.array(SSkill),
  projects: z.array(SProject),
  experience: z.array(SExperience),
  education: z.array(SEducation),
  languages: z.array(
    z.object({
      name: z.string(),
      level: z.string(),
    })
  ),
  hobbies: z.array(z.string()),
  references: z.array(SReference),
});

export const data: z.infer<typeof SCV> = {
  title: "Développeur Full Stack",
  // title: "Concepteur Logiciel",
  birthday: new Date("2001-04-20"),
  firstName: "Joshua",
  lastName: "Jourdam",
  email: "jourdamj@gmail.com",
  phone: "+33 6 67 18 13 24",
  socials: [
    {
      link: "https://github.com/pmbjojo",
      name: "GitHub",
      icon: Github,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joshua-jourdam-7617b3196",
      icon: Linkedin,
    },
  ],
  address: {
    street: "32 route tourtique",
    city: "Bretteville",
    state: "Manche",
    zip: "50110",
    country: "France",
  },
  drivingLicense: "B",
  keywords: ["TypeScript", "React", ".Net", "Linux"],
  summary:
    "Je suis ingénieur jeune diplômé de l'ESEO Angers. J'ai travaillé trois ans en apprentissage au sein du département Recherche et Développement de SDEL Contrôle Commande, société de VINCI Energies. J'ai également pu évoluer au sein d'une équipe de développement agile lors de mon récent stage aux Pays Bas. Fort de mon expérience avec React et .NET, je recherche un poste en développement logiciel.",
  // "Je suis ingénieur jeune diplômé de l'ESEO Angers. J'ai travaillé trois ans en apprentissage au sein du département R&D de SDEL Contrôle Commande, société de VINCI Energies. J'ai également pu évoluer au sein d'une équipe de développement agile lors de mon récent stage aux Pays Bas. Fort de mon expérience avec React et .NET, je recherche un poste en développement web full stack.",
  skills: [
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
  ],
  projects: [
    {
      title: "Journal de formation des apprentis",
      description:
        "Une plateforme web permettant aux apprentis de suivre et documenter leur formation. Elle inclut des fonctionnalités de gestion des mémoires de fin d'études, de saisie des notes, d'organisation des entretiens et soutenances, ainsi qu'un système d'authentification et de rôles.",
      technologies: ["NextJS", "tRPC", "Prisma", "PostgreSQL"],
      type: "Scolaire",
      year: 2024,
    },
    {
      title: "HomeLab",
      description:
        "Un homelab personnel permettant d'héberger divers services comme un cloud privé, une bibliothèque multimédia et un serveur de streaming. Il sert aussi de terrain d'expérimentation pour le déploiement et l'administration de nouvelles technologies.",
      technologies: ["Docker", "Ubuntu", "Streaming"],
      type: "Personnel",
      year: 2023,
    },
    {
      title: "Explorateur de cartes Dokkan Battle",
      description:
        "Un site web permettant de consulter et explorer la base de données des cartes du jeu mobile Dragon Ball Z: Dokkan Battle. Il propose une interface interactive avec filtres et recherches avancées.",
      technologies: ["NextJS", "Drizzle", "Shadcn", "TailwindCSS"],
      type: "Personnel",
      year: 2025,
    },
    {
      title: "Jeu avec voitures télécommandées",
      description:
        "Un projet universitaire consistant à développer un jeu où des voitures télécommandées sont contrôlées via une interface web en temps réel. Utilisation d'un Raspberry Pi pour la communication avec les véhicules.",
      technologies: ["Python", "Tornado", "Raspberry", "Javascript"],
      type: "Scolaire",
      year: 2021,
    },
    {
      title: "Application de dessin",
      description:
        "Une application Java permettant de dessiner avec divers outils (pinceaux, formes, couleurs). Développée avec Swing pour une interface graphique simple et intuitive.",
      technologies: ["Java", "Swing"],
      type: "Scolaire",
      year: 2022,
    },
  ],
  experience: [
    {
      title: "Développeur logiciel",
      company: "SDEL Contrôle Commande",
      contract: "Apprentissage",
      website: "https://www.omexom.fr/implantations/sdel-controle-commande/",
      address: {
        street: "Rue du Clos du Cèdre",
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
      company: "Kropman",
      website: "https://kropman.nl/",
      address: {
        street: "Industrieweg",
        city: "Nimègue",
        state: "Gelderland",
        zip: "6541",
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
      company: "AMTECH Ingénierie",
      website: "https://amtech-ingenierie.fr/",
      address: {
        street: "Rue de la Gare",
        city: "La Hague",
        state: "Manche",
        zip: "50",
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
  ],
  education: [
    {
      institution: "ESEO Angers",
      degree: "Diplôme d'Ingénieur Informatique en Apprentissage",
      options: ["Cybersécurité"],
      dates: {
        start: new Date("2021-09-01"),
        end: new Date("2024-08-31"),
      },
      address: {
        street: "10 Boulevard Jeanneteau",
        city: "Angers",
        state: "Maine-et-Loire",
        zip: "49000",
        country: "France",
      },
      description: "Studied computer science",
      website: "https://www.eseo.fr/",
    },

    {
      institution: "Université Grand Ouest Normandie",
      degree:
        "Diplôme Universitaire et Technologique en Génie Electrique et Informatique Industrielle",
      dates: {
        start: new Date("2019-09-01"),
        end: new Date("2021-06-31"),
      },
      address: {
        street: "Rue des Roches",
        city: "Cherbourg-en-Cotentin",
        state: "Manche",
        zip: "50",
        country: "France",
      },
      description: "",
      website: "https://iut-grand-ouest-normandie.unicaen.fr/",
    },
    {
      institution: "Lycée Alexis de Tocqueville",
      degree: "Baccalauréat Scientifique, option Sciences de l'Ingénieur",
      dates: {
        start: new Date("2017-09-01"),
        end: new Date("2019-06-31"),
      },
      address: {
        street: "Rue des Roquemonts",
        city: "Cherbourg-en-Cotentin",
        state: "Manche",
        zip: "50",
        country: "France",
      },
      description: "",
      website: "https://lycee-tocqueville.fr/",
    },
  ],
  languages: [
    {
      name: "Français",
      level: "Natif",
    },
    {
      name: "Anglais",
      level: "B2 (TOEIC 830)",
    },
  ],
  hobbies: ["Homelab", "Ecosystème Linux"],
  references: [
    {
      name: "Sébastien Barré",
      position: "Chef d'équipe logiciel",
      company: "SDEL Contrôle Commande",
      email: "sebastien.barre@vinci-energies.net",
    },
    {
      name: "Gert-Jan van Rossum",
      position: "Responsable équipe innovation",
      company: "Kropman",
      email: "gert-jan.van.rossum@kropman.nl",
    },
  ],
};
