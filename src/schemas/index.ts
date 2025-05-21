import { z } from "zod/v4";
import { SProject } from "./project";
import { SExperience } from "./experience";
import { SEducation } from "./education";
import { SAddress } from "./utils";
import { SSkill, SSoftSkill } from "./skill";
import { SLanguage } from "./language";
import { SReference } from "./reference";
import { SSocial } from "./social";

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
