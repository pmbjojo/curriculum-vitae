import { TExperience } from "@/schemas/experience";

export const kropman: TExperience = {
  title: "Développeur Full Stack",
  department: "Développement et Innovation",
  contract: "Stage international",
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
    "Dans une équipe de développement interne, j'ai contribué à la création et à l'amélioration d'applications métiers utilisées par les collaborateurs. Ce stage m'a non seulement permis d'approfondir mes compétences en développement d'applications fullstack en découvrant le framework .NET, mais aussi de pratiquer et d'améliorer mon anglais dans un environnement de travail international.",
  tasks: [
    {
      title:
        "Développement d'une application de gestion et de suivi de la diffusion de documents",
      description: `L'application inclut des fonctionnalités telles que : 
        - Gestion des documents (téléchargement, suppression, modification)
        - Versioning des documents
        - Gestion des utilisateurs et des rôles
        - Synchronisation avec SharePoint pour le stockage des documents
        - Notifications par e-mail
        - Création de liste de diffusion
        - Suivi de la prise de connaissance des documents`,
      goal: "Permettre au service RH et aux responsables de gérer les documents, d'en suivre la diffusion et de s'assurer que les employés en ont bien pris connaissance.",
      roles: [
        "Analyse des besoins fonctionnels",
        "Conception de la base de données",
        "Développement des interfaces utilisateur et des fonctionnalités back-end",
        "Gestion des droits d'accès",
        "Déploiement de l'application",
      ],
      results: [
        "Expérimentation de l'application par le service RH lors de mon départ",
        "Intégration de l'application avec SharePoint pour le stockage des documents",
        "Utilisation de formulaires pas à pas pour guider les utilisateurs et simplifier la validation",
      ],
      skills: [
        "Maîtrise du framework .NET et de Blazor",
        "Connaissance des bases de données relationnelles et de l'Entity Framework",
        "Conception d'interfaces avec un framework CSS",
      ],
      technologies: [
        "C#",
        ".NET 8",
        "Blazor",
        "Entity Framework",
        "SharePoint",
        "Bootstrap",
        "CSS",
        "SAAS",
        "Microsoft Graph API",
        "SQL Server",
        "Azure DevOps",
        "IIS server",
      ],
    },
    {
      title:
        "Refonte et modernisation d'une application de gestion des demandes de matériel existante",
      description: `L'application permet de gérer les demandes de matériel et d'en suivre l'état.
        Le processus de demande de matériel est le suivant :
        - L'utilisateur remplit un formulaire de demande de matériel
        - La demande doit être validée par plusieurs responsables
        - Le magasinier traite la demande en fonction des stock disponibles
        - Le service achats commande le matériel si nécessaire
        - Le matériel est livré à l'utilisateur
        - L'utilisateur peut suivre l'état de sa demande dans l'application`,
      goal: "Moderniser une application Razor Pages obsolète en la migrant vers Blazor, tout en repensant l'interface utilisateur et l'ergonomie.",
      roles: [
        "Analyse de l'application existante",
        "Conception de la nouvelle architecture",
        "Migration de la base de données",
        "Développement de l'application",
        "Déploiement de l'application",
      ],
      results: [
        "Migration complète de l'application vers Blazor",
        "Mise en production de l'application dans un environnement de test",
        "Amélioration de la structure de la base de données",
        "Conservation des données existantes",
        "Refonte de l'interface utilisateur basée sur material design",
      ],
      skills: [],
      technologies: [
        "C#",
        ".NET Core / 8",
        "Blazor",
        "Entity Framework",
        "MudBlazor",
        "Razor Pages",
        "CSS",
        "SQL Server",
        "Azure DevOps",
        "IIS server",
      ],
    },
  ],
  technologies: ["C#", ".NET", "Blazor", "Entity Framework", "SharePoint"],
  methodologies: ["Agile", "Daily Standup", "Azure DevOps", "Git"],
};
