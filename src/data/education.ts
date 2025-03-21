import { TEducation } from "@/schemas";

export const education: TEducation[] = [
  {
    degree: "Diplôme d'Ingénieur Informatique en Apprentissage",
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
      "J'ai suivi un cursus en apprentissage, alternant entre périodes en entreprise et périodes à l'école. J'ai choisi l'option Cybersécurité pour approfondir mes connaissances dans ce domaine.",
    grade: "Mention Bien",
    keyCourses: [
      "Informatique et systèmes d'information",
      "Développement web",
      "Systèmes embarqués",
      "Cybersécurité",
    ],
  },

  {
    degree:
      "Diplôme Universitaire et Technologique en Génie Electrique et Informatique Industrielle",
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
    description: "",
    keyCourses: [
      "Electronique",
      "Automatique",
      "Electrotechnique",
      "Informatique",
      "Réseaux",
      "Systèmes embarqués",
    ],
    website: "https://iut-grand-ouest-normandie.unicaen.fr/",
  },
  {
    degree: "Baccalauréat Scientifique, option Sciences de l'Ingénieur",
    dates: {
      start: new Date("2017-09-01"),
      end: new Date("2019-06-31"),
    },
    address: {
      institution: "Lycée Alexis de Tocqueville",
      street: "34 Av. Henri Poincaré",
      city: "Cherbourg-en-Cotentin",
      state: "Manche",
      zip: "50100",
      country: "France",
    },
    description: "",
    keyCourses: [
      "Sciences de l'Ingénieur",
      "Mathématiques",
      "Physique",
      "Anglais",
    ],
    website: "https://lycee-tocqueville.fr/",
  },
];
