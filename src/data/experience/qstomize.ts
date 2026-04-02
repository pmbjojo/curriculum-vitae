import type { TExperience } from "@/schemas/experience";

export const qstomize: TExperience = {
  title: "Développeur logiciel",
  department: "Systèmes d'Information",
  contract: "Prestation",
  website: "https://professionnels.renault.fr/qstomize.html",
  address: {
    institution: "Qstomize",
    street: "19 All. des Marronniers",
    city: "Heudebouville",
    state: "Eure",
    zip: "27400",
    country: "France",
  },
  dates: {
    start: new Date("2025-11-03"),
  },
  icon: "/qstomize.jpg",
  description: `
    Qstomize est une filiale du groupe Renault spécialisée dans la personnalisation de véhicules, à destination des particuliers comme des entreprises.
    Dans ce contexte, j'ai contribué à la transformation de l'infrastructure applicative en mettant en place un écosystème conteneurisé et automatisé.
    J'ai travaillé principalement sur le développement du système automatisé d'homologation des véhicules.
  `,
  tasks: [
    {
      title: "Système d'homologation des véhicules",
      description: `
    Conception et développement d'un système métier critique dédié à la gestion des processus d'homologation et de conformité des véhicules modifiés.

    La plateforme centralise l'ensemble du cycle d'homologation : collecte des données techniques, validation des modifications, génération automatique des documents réglementaires (certificats de conformité, attestations), et suivi des dossiers à l'échelle européenne.

    Une attention particulière a été portée à la résilience et à la fiabilité du système, afin de garantir une haute disponibilité et une traçabilité complète des opérations dans un contexte industriel et réglementaire exigeant.

    Le système s'appuie sur une architecture moderne orientée services, intégrant des workflows métier orchestrés pour automatiser les processus complexes et réduire les interventions manuelles.
  `,
      goal: "Digitaliser, fiabiliser et automatiser les գործընթաց d'homologation des véhicules modifiés afin d'assurer la conformité réglementaire européenne tout en améliorant la productivité opérationnelle.",
      roles: [
        "Conception de l'architecture applicative (DDD / Clean Architecture)",
        "Développement full stack (backend et interface utilisateur)",
        "Modélisation des processus métier d'homologation",
        "Mise en place de workflows distribués et résilients",
        "Contribution aux choix techniques et à l'industrialisation du projet",
      ],
      results: [
        "Application déployée en production et utilisée pour l'homologation de l'ensemble des véhicules modifiés",
        "Réduction significative des tâches manuelles grâce à l'automatisation des processus et des documents",
        "Amélioration de la fiabilité et de la traçabilité des dossiers d'homologation",
        "Diminution des erreurs humaines dans la génération des certificats réglementaires",
        "Capacité à gérer des processus complexes multi-étapes à l'échelle européenne",
      ],
      skills: [
        "Conception d'une architecture applicative basée sur **DDD** pour structurer un domaine métier complexe",
        "Développement d'applications web full stack en **C#** avec **.NET** et **Blazor**",
        "Modélisation et implémentation de workflows métier distribués avec **Temporal.io**",
        "Automatisation de la génération de documents réglementaires (certificats, attestations) à partir de données métier",
        "Mise en place de mécanismes de résilience (retries, gestion des erreurs, idempotence) dans des systèmes distribués",
        "Conteneurisation des services avec **Docker** et intégration dans un environnement orchestré",
        "Mise en place de pipelines **CI/CD** avec **GitLab** pour automatiser build, test et déploiement",
        "Collaboration via **revues de code** et amélioration continue de la qualité logicielle",
      ],
      technologies: [
        ".NET Core 10",
        "Blazor",
        "Docker",
        "Aspire",
        "GitLab CI/CD",
        "Temporal.io",
      ],
    },
    {
      title:
        "Modernisation de l'infrastructure et mise en place de l'intégration continue",
      description: `
    Conception et déploiement d'un écosystème conteneurisé basé sur Docker, accompagné de la mise en place d'un cluster Docker Swarm on-premise. 
    Migration d'applications .NET Framework vers .NET Core afin de garantir la portabilité multi-plateforme (Linux/Windows) et faciliter leur intégration dans des environnements conteneurisés.
    
    Implémentation de pipelines d'intégration continue avec GitLab pour automatiser les processus de build, test et déploiement.
    
    Refonte de l'architecture existante afin de remplacer des environnements Windows monolithiques (multiples applications sur une même VM, scripts exécutés en tant que services générant de nombreux processus) par une infrastructure isolée, maintenable et scalable.
  `,
      goal: "Industrialiser les déploiements, améliorer la résilience du système d'information et réduire les contraintes liées aux environnements legacy.",
      roles: [
        "Conception de l'architecture conteneurisée",
        "Mise en place et administration du cluster Docker Swarm",
        "Migration applicative vers .NET Core",
        "Implémentation des pipelines CI avec GitLab",
        "Amélioration continue de l'infrastructure et des pratiques DevOps",
      ],
      results: [
        "Réduction significative de la dépendance aux machines virtuelles",
        "Amélioration de la stabilité et de l'isolation des applications",
        "Diminution des interruptions de service lors des mises à jour",
        "Standardisation des déploiements et des environnements",
        "Meilleure observabilité et contrôle des processus applicatifs",
      ],
      skills: [
        "DevOps",
        "Conteneurisation",
        "Orchestration de services",
        "Intégration continue",
        "Architecture logicielle",
        "Administration système Linux",
      ],
      technologies: [
        "Docker",
        "Docker Swarm",
        "GitLab CI/CD",
        ".NET Core",
        "Linux",
        "VMware vSphere",
        "HPE SimpliVity",
      ],
    },
  ],
  technologies: [".NET Core", "Blazor", "Docker", "GitLab"],
  methodologies: ["Agile", "Domain-Driven Design", "Clean Architecture"],
};
