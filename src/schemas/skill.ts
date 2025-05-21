import { z } from "zod/v4";
import {
  CircleHelp,
  Handshake,
  Lightbulb,
  LucideProps,
  PersonStanding,
  Scale,
} from "lucide-react";
import reactIcon from "@/public/icons/react.svg";
import nextjsIcon from "@/public/icons/nextjs.svg";
import typescriptIcon from "@/public/icons/typescript.svg";
import dotnetIcon from "@/public/icons/dotnet.svg";
import tailwindcssIcon from "@/public/icons/tailwindcss.svg";
import linuxIcon from "@/public/icons/linux.svg";
import htmlIcon from "@/public/icons/html.svg";
import csharpIcon from "@/public/icons/csharp.svg";
import blazorIcon from "@/public/icons/blazor.svg";
import gitIcon from "@/public/icons/git.svg";
import cssIcon from "@/public/icons/css.svg";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const SkillMeta = {
  React: { icon: reactIcon, url: "https://reactjs.org/" },
  "Next.js": { icon: nextjsIcon, url: "https://nextjs.org/" },
  TypeScript: { icon: typescriptIcon, url: "https://www.typescriptlang.org/" },
  ".NET": { icon: dotnetIcon, url: "https://dotnet.microsoft.com/fr-fr/" },
  "Tailwind CSS": { icon: tailwindcssIcon, url: "https://tailwindcss.com/" },
  Linux: { icon: linuxIcon, url: "https://www.linux.org/" },
  HTML: {
    icon: htmlIcon,
    url: "https://developer.mozilla.org/fr-FR/docs/Web/HTML",
  },
  "C#": {
    icon: csharpIcon,
    url: "https://docs.microsoft.com/fr-FR/dotnet/csharp/",
  },
  Blazor: {
    icon: blazorIcon,
    url: "https://dotnet.microsoft.com/fr-FR/apps/aspnet/web-apps/blazor",
  },
  Git: { icon: gitIcon, url: "https://git-scm.com/" },
  CSS: {
    icon: cssIcon,
    url: "https://developer.mozilla.org/fr-FR/docs/Web/CSS",
  },
  Java: {
    icon: "",
    url: "https://www.java.com/fr/",
  },
  "C++": {
    icon: "",
    url: "https://isocpp.org/",
  },
  Python: {
    icon: "",
    url: "https://www.python.org/",
  },
  JavaScript: {
    icon: "",
    url: "https://developer.mozilla.org/fr-FR/docs/Web/JavaScript",
  },
  PHP: {
    icon: "",
    url: "https://www.php.net/",
  },
  "Node.js": {
    icon: "",
    url: "https://nodejs.org/en/",
  },
  Azure: {
    icon: "",
    url: "https://azure.microsoft.com/fr-fr/",
  },
  Docker: {
    icon: "",
    url: "https://www.docker.com/",
  },
  GitLab: {
    icon: "",
    url: "https://about.gitlab.com/",
  },
  Terraform: {
    icon: "",
    url: "https://www.terraform.io/",
  },
  PostgreSQL: {
    icon: "",
    url: "https://www.postgresql.org/",
  },
  SQLite: {
    icon: "",
    url: "https://www.sqlite.org/index.html",
  },
  Oracle: {
    icon: "",
    url: "https://www.oracle.com/fr/database/",
  },
  Redis: {
    icon: "",
    url: "https://redis.io/",
  },
  Firebase: {
    icon: "",
    url: "https://firebase.google.com/?hl=fr",
  },
  Ansible: {
    icon: "",
    url: "https://www.ansible.com/",
  },
  SVN: {
    icon: "",
    url: "https://subversion.apache.org/",
  },
  tRPC: {
    icon: "",
    url: "https://trpc.io/",
  },
  Prisma: {
    icon: "",
    url: "https://www.prisma.io/",
  },
  Mantine: {
    icon: "",
    url: "https://mantine.dev/",
  },
  TailwindCSS: {
    icon: tailwindcssIcon,
    url: "https://tailwindcss.com/",
  },
  Ubuntu: {
    icon: linuxIcon,
    url: "https://ubuntu.com/",
  },
  Streaming: {
    icon: "",
    url: "https://www.twitch.tv/",
  },
  Tornado: {
    icon: "",
    url: "https://www.tornadoweb.org/en/stable/",
  },
  RaspberryPi: {
    icon: "",
    url: "https://www.raspberrypi.com/",
  },
  Clerk: {
    icon: "",
    url: "https://clerk.dev/",
  },
  Spotify: {
    icon: "",
    url: "https://www.spotify.com/",
  },
  Swing: {
    icon: "",
    url: "https://docs.oracle.com/javase/tutorial/swing/",
  },
  JUnit: {
    icon: "",
    url: "https://junit.org/junit5/",
  },
} as const satisfies Record<
  string,
  {
    icon: string;
    url: string;
  }
>;

export type Skill = keyof typeof SkillMeta;

export const SoftSkillMeta = {
  Pédagogie: { icon: Handshake },
  Curiosité: { icon: CircleHelp },
  Initiative: { icon: Lightbulb },
  "Esprit critique": { icon: Scale },
  Autonomie: { icon: PersonStanding },
  "Esprit d'équipe": { icon: PersonStanding },
  Créativité: { icon: Lightbulb },
  Rigueur: { icon: Scale },
  Communication: { icon: PersonStanding },
  "Gestion du stress": { icon: PersonStanding },
  "Gestion du temps": { icon: PersonStanding },
  Adaptabilité: { icon: PersonStanding },
} satisfies Record<
  string,
  {
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }
>;

export type SoftSkill = keyof typeof SoftSkillMeta;

export const SSkill = z.object({
  domain: z.string(),
  items: z.array(z.string()),
});
export type TSkill = z.infer<typeof SSkill>;
