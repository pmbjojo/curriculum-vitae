import { TExperience } from "@/schemas";

export const amtech: TExperience = {
  title: "Développeur logiciel",
  department: "Développement",
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
    {
      title:
        "Conception d'une caméra d'inspection en environnement contrôlé (nucléaire)",
      description:
        "La caméra de type gimball peut être pilotée à distance et s'orienter sur 180°. Elle transmet le flux vidéo en temps réel et permet un zoom optique x10.",
      goal: "Concevoir une caméra d'inspection opérationnelle en environnement contrôlé, tout en respectant les contraintes dimensionnelles propres aux galeries techniques.",
      roles: [
        "Rétro-ingénierie des protocoles de communication de la caméra",
        "Développement de l'interface de communication via ethernet",
        "Développement du serveur de streaming vidéo",
        "Intégration dans un boitier de commande avec écran et joystick",
      ],
      results: [
        "Transmission vidéo en temps réel via un serveur web",
        "Contrôle de la caméra via un joystick",
        "Assemblage de la caméra dans un tuyau au dimensions spécifiques",
        "Réalisation d'un boitier de commande déporté avec écran tactile et joystick",
      ],
      skills: [],
      technologies: [
        "Raspberry Pi",
        "Python",
        "Flask",
        "SBUS",
        "CAN BUS",
        "FFmpeg",
      ],
    },
  ],
  technologies: ["Raspberry Pi", "Python", "SBUS", "CAN BUS"],
  methodologies: [],
};
