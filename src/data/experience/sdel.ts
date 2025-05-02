import { TExperience } from "@/schemas";

export const sdel: TExperience = {
  title: "Développeur logiciel",
  department: "Recherche et Développement",
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
    "Au sein de l'équipe de développement logiciel du service R&D, j'ai principalement été chargé d'introduire de nouvelles technologies et de moderniser les composants logiciels existants. Mon travail s'est inscrit dans un contexte industriel exigeant, lié aux systèmes de contrôle et de supervision utilisés dans le secteur de l'énergie. Cette expérience m'a permis monter en autonomie et de développer des compétences en développement web, en programmation embarquée ainsi qu'en rigueur dans un environnement normé.",
  tasks: [
    {
      title:
        "Conception et développement d'une application web embarquée pour la configuration d'automates industriels",
      description: `L'application permet de configurer et de superviser des automates industriels.
          On retrouve des fonctionnalités comme :
          - Configuration des interfaces réseau
          - Configuration des protocoles de communication
          - Gestion des entrées/sorties
          - Affichage des informations de débogage
          - Gestion de l'alimentation
          - Import de configuration`,

      goal: "Remplacer une application de bureau vieillissante et non sécurisée par une application web embarquée intuitive et performante pour la configuration d'automates programmables industriels.",
      roles: [
        "Chef de projet",
        "Conception logicielle",
        "Développement front-end",
        "Développement API REST",
        "Intégration système",
        "Tests de composants",
        "Rédaction de la documentation technique",
        "Formation des développeurs",
      ],
      results: [
        "Accès simplifié à l'application via un navigateur, sans installation requise, depuis le réseau local",
        "Sécurisation de l'application par un système d'authentification et d'autorisation basé sur des rôles",
        "Amélioration de l'éxpérience utilisateur grâce à un système de cache, un volet de navigation, un design modernisé et une compatibilité responsive tous écrans",
        "Standardisation de la documentation de l'API selon la norme OpenAPI, facilitant l'intégration avec d'autres systèmes",
        "Retour positif de l'équipe concernant l'expérience de développement par rapport à l'ancienne application",
      ],
      skills: [
        "Gestion de projet",
        "Conception d'interfaces utilisateur",
        "Communication avec des systèmes embarqués",
        "Test d'interfaces utilisateur",
        "Développement API REST",
      ],
      technologies: [
        "TypeScript",
        "React",
        "C++",
        "Pistache",
        "OpenAPI",
        "CSS",
        "JWT",
        "Vite",
        "Tanstack Query",
        "React Router",
        "React Hook Form",
        "Zod",
        "Vitest",
        "React Testing Library",
        "Mock Service Worker",
        "Faker",
        "PatternFly",
        "Docker",
        "Yocto Project",
        "Apache 2",
      ],
    },
    {
      title:
        "Mise en place d'une plateforme de génération de systèmes d'exploitation Linux pour des équipements embarqués",
      description: `La plateforme permet de générer des images Linux personnalisées pour des équipements embarqués.
          Elle comprend les éléments suivants :
          - Base de la distribution commune
          - Personnalisations spécifique à chaque équipement
          - Recettes de construction des logiciels internes
          - Gestion des dépendances
          - Gestion des mises à jour`,
      goal: "Remplacer le système de génération de de systèmes d'exploitation historique par un système moderne en assurant la compatibilité avec le matériel et les exigences de sécurité et de maintenabilité à long terme.",
      roles: [
        "Experimentation des outils de génération d'OS",
        "Conception de l'architecture de la plateforme",
        "Sélection et intégration des composants logiciels",
        "Développement des recettes de génération",
        "Configuration du chargeur de démarrage et du noyau linux pour les différents types de cibles",
        "Documentation technique",
      ],
      results: [
        "Mise en place d'une plateforme de génération d'OS moderne et maintenable avec Yocto Project",
        "Réduction des efforts de maintenance",
        // "Controle total de la chaîne de génération, de la compilation à l'intégration des composants logiciels",
        // "Partitionnement A/B"
        "Amélioration du suivi des versions et de la traçabilité des modifications",
        "Suivi des failles de sécurité",
        "Simplification du processus de déploiement et de mise à jour",
      ],
      skills: ["Administration système Linux", "Outils de build"],
      technologies: [
        "Linux",
        "Yocto Project",
        "Shell",
        "Python",
        "grub",
        "Systemd",
        "Bitbake",
        "C++",
      ],
    },
  ],
  technologies: [
    "TypeScript",
    "React",
    "C++",
    "OpenApi",
    "Yocto Project",
    "Linux",
  ],
  methodologies: ["Agile", "Backlog produit", "Sprints", "Redmine", "SVN"],
};
