import { z } from "zod";
import { SProject } from "./project";
import { SExperience } from "./experience";
import { SEducation } from "./education";
import { SAddress } from "./utils";
import { SSkill } from "./skill";
import { SLanguage } from "./language";
import { SReference } from "./reference";

export const SSocial = z.object({
  name: z.string(),
  link: z.string(),
  icon: z.any().optional(),
});
export type TSocial = z.infer<typeof SSocial>;

export const SCV = z.object({
  title: z.string(),
  website: z.string().url(),
  firstName: z.string(),
  lastName: z.string(),
  birthday: z.date(),
  email: z.string().email(),
  phone: z.string(),
  address: SAddress,
  drivingLicense: z.string().optional(),
  socials: z.array(SSocial),
  summary: z.string(),
  keywords: z.array(z.string()),
  skills: z.array(SSkill),
  highlights: z.object({
    experience: z.string(),
    education: z.string(),
    localisation: z.string(),
  }),
  projects: z.array(SProject),
  experience: z.array(SExperience),
  education: z.array(SEducation),
  languages: z.array(SLanguage),
  hobbies: z.array(z.string()),
  references: z.array(SReference),
});
export type TCV = z.infer<typeof SCV>;
