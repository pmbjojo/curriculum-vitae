import { TEducation } from "@/schemas";

export const geii: TEducation = {
  degree:
    "Diplôme Universitaire et Technologique en Génie Electrique et Informatique Industrielle",
  grade: "Top 5, 15/20, Mention Bien",
  dates: {
    start: new Date("2019-09-01"),
    end: new Date("2021-06-31"),
  },
  address: {
    institution: "Université Grand Ouest Normandie",
    street: "60 Rue Max Pol Fouchet",
    city: "Cherbourg-en-Cotentin",
    state: "Manche",
    zip: "50130",
    country: "France",
  },
  description:
    "J'ai suivi un DUT Génie Électrique et Informatique Industrielle (GEII), une formation axée sur les systèmes électroniques, l'automatisation et l'informatique industrielle. Cette immersion dans les systèmes automatisés et les réseaux industriels a éveillé ma passion pour l'informatique. Les projets pratiques et mon stage réalisés durant cette formation ont renforcé mon intérêt pour ce domaine et m'ont orienté vers une école d'ingénieur en informatique.",
  website: "https://iut-grand-ouest-normandie.unicaen.fr/",
  program: [
    {
      category: "Tronc commun (Semestres 1 et 2)",
      description:
        "Acquisition des fondamentaux en électronique analogique et numérique, électrotechnique, automatique, informatique industrielle, mathématiques, physique appliquée, anglais et communication. Cette phase met l'accent sur la compréhension des systèmes électriques et informatiques, ainsi que sur le développement de compétences pratiques à travers des travaux dirigés et pratiques.",
    },
    {
      category: "Approfondissement (Semestres 3 et 4)",
      description:
        "Renforcement des compétences techniques avec des modules avancés en systèmes embarqués, réseaux industriels, automatisme, traitement du signal et programmation. Les étudiants réalisent des projets tutorés et un stage en entreprise, favorisant l'application des connaissances dans des contextes professionnels réels.",
    },
  ],
  highlights: [
    {
      title: "Stage de fin d'études",
      description:
        "Stage de 10 semaines en entreprise pour découvrir le monde professionnel et mettre en pratique les connaissances acquises.",
    },
  ],
  skills: [
    {
      title: "Automatisme et contrôle industriel",
      items: [
        "Modélisation et simulation de systèmes automatisés",
        "Programmation d'Automates Programmables Industriels (API) selon la norme IEC 61131-3",
        "Conception et mise en œuvre de systèmes de régulation et de contrôle-commande",
      ],
    },
    {
      title: "Réseaux industriels et communication",
      items: [
        "Découverte des modèles OSI et TCP/IP",
        "Configuration et gestion de dispositifs de communication (switchs, routeurs, passerelles)",
      ],
    },
    {
      title: "Systèmes embarqués et microcontrôleurs",
      items: [
        "Conception et développement de systèmes embarqués en utilisant des microcontrôleurs",
        "Programmation en langage C et VHDL pour microcontrôleurs",
        "Conception de cartes électroniques (schémas, routage, prototypage)",
        "Intégration de périphériques (capteurs, actionneurs, interfaces utilisateur)",
        "Tests et validation de prototypes électroniques",
      ],
    },
    {
      title: "Programmation et développement logiciel",
      items: [
        "Développement programmes en C, Python et PHP",
        "Conception de bases de données pour la gestion de données industrielles",
      ],
    },
    {
      title: "Compétences méthodologiques et transversales",
      items: [
        "Analyse fonctionnelle et rédaction de cahiers des charges",
        "Communication technique orale et écrite en français et en anglais",
      ],
    },
  ],
};
