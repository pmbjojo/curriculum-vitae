import { TEducation } from "@/schemas/education";

export const eseo: TEducation = {
  degree:
    "Diplôme d'Ingénieur Informatique et Systèmes d'Information en Apprentissage",
  options: ["Cybersécurité"],
  dates: {
    start: new Date("2021-09-01"),
    end: new Date("2024-08-31"),
  },
  address: {
    institution: "ESEO Angers",
    street: "10 Bd Jean Jeanneteau",
    city: "Angers",
    state: "Maine-et-Loire",
    zip: "49100",
    country: "France",
  },
  website: "https://www.eseo.fr/",
  description:
    "J'ai obtenu mon diplôme d'ingénieur en apprentissage, spécialisé en informatique et systèmes d'information. Dès la première année, j'ai été impliqué dans des projets de développement logiciel, ce qui m'a permis d'acquérir une compréhension pratique du fonctionnement d'une entreprise des processus de conception à la mise en œuvre. Au fil du temps, mes responsabilités ont évolué, me conduisant à piloter mon projet de fin d'études. Je pense que cette montée en compétences m'a préparé à assumer pleinement un rôle d'ingénieur dans le secteur de l'informatique.",
  grade: "Top 20, 15/20, Mention Bien",

  program: [
    {
      category: "Tronc commun (Semestres 1 à 3)",
      description:
        "Acquisition des fondamentaux en électronique, génie électrique, automatique, traitement du signal, mathématiques, informatique, anglais, communication et gestion de projet.",
    },
    {
      category: "Spécialisation (Semestres 4 et 5)",
      description:
        "Spécialisation dans l'informatique et les systèmes d'information et la cybersécurité",
    },
    {
      category: "Sciences humaines et management (Semestre 6)",
      description:
        "Formation axée sur le management, la gestion de l'innovation et les sciences humaines pour préparer aux responsabilités managériales.",
    },
  ],
  highlights: [
    {
      title: "Alternance",
      description:
        "3 ans d'alternance au sein de SDEL Contrôle Commande, entreprise de VINCI Energies, dans le département Recherche et Développement.",
    },
    {
      title: "Projet d'ingénieur",
      description:
        "Pilotage et réalisation d'un projet en entreprise, encadré par un tuteur pédagogique et un maître d'apprentissage. Développement d'une application web pour la configuration d'équipement embarqué.",
    },
    {
      title: "Stage international",
      description:
        "Stage de 3 mois aux Pays-Bas dans une équipe de développement agile.",
    },
  ],
  skills: [
    {
      // algorithmique
      // programmation orientée objet
      title: "Programmation et développement logiciel",
      items: [
        "Maîtrise des langages de programmation C, Java, Python ainsi que des langages web HTML, CSS, JavaScript.",
        "Conception et développement d'applications logicielles, en suivant les bonnes pratiques de codage et les méthodologies de développement.",
      ],
    },
    {
      title: "Architecture des systèmes et systèmes embarqués",
      items: [
        "Connaissance approfondie des architectures matérielles et logicielles des systèmes embarqués.",
        "Développement et intégration de logiciels pour des systèmes embarqués, en tenant compte des contraintes de performance et de fiabilité.",
      ],
    },
    {
      title: "Réseaux et télécommunications",
      items: [
        "Compréhension des protocoles de communication et des architectures réseau.",
        "Mise en œuvre et gestion de réseaux informatiques, en assurant la sécurité et la qualité de service.",
        "Utilisation de services cloud pour le déploiement et la gestion d'applications et de micros-services.",
      ],
    },
    {
      title: "Cybersécurité",
      items: [
        "Sensibilisation aux enjeux de la sécurité informatique.",
        "Application des principes de sécurité dans le développement logiciel et la gestion des systèmes d'information.",
      ],
    },
    {
      title: "Bases de données et systèmes d'information",
      items: [
        "Conception, implémentation et gestion de bases de données relationnelles.",
        "Utilisation de systèmes de gestion de bases de données (SGBD) pour le stockage et la manipulation des données.",
      ],
    },
    {
      title: "Méthodologies de développement et gestion de projet",
      items: [
        "Utilisation des outils d'analyse et de planification stratégique comme SWOT ou les matrices de rique et RACI.",
        "Application des méthodologies de gestion de projet Agile et Scrum.",
      ],
    },
    {
      title: "Compétences transversales et professionnelles",
      items: [
        "Capacité à travailler en équipe multidisciplinaire, en communiquant efficacement avec les différents acteurs d'un projet.",
        "Sens de l'organisation et gestion du temps, notamment dans le cadre de l'alternance entre les périodes en entreprise et à l'école.",
        "Engagement éthique et responsabilité professionnelle dans la conduite des projets.",
      ],
    },
  ],
};
