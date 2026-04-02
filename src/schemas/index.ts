import { z } from "zod";
import { SEducation } from "./education";
import { SExperience } from "./experience";
import { SLanguage } from "./language";
import { SProject } from "./project";
import { SReference } from "./reference";
import { SSkill, SSoftSkill } from "./skill";
import { SSocial } from "./social";
import { SAddress } from "./utils";

export const SResume = z.object({
  title: z.string(),
  website: z.url(),
  firstName: z.string(),
  lastName: z.string(),
  birthday: z.date(),
  email: z.email(),
  phone: z.string(),
  address: SAddress,
  drivingLicense: z.string().optional(),
  socials: z.array(SSocial),
  summary: z.string(),
  keywords: z.array(z.string()),
  skills: z.array(SSkill),
  softSkills: z.array(SSoftSkill),
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
export type TResume = z.infer<typeof SResume>;
