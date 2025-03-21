import { z } from "zod";

export const SProjectType = z.enum(["Personnel", "Scolaire", "Professionnel"]);
export type TProjectType = z.infer<typeof SProjectType>;

export const SDates = z.object({
  start: z.date(),
  end: z.date(),
});
export type TDates = z.infer<typeof SDates>;

export const SSocial = z.object({
  name: z.string(),
  link: z.string(),
  icon: z.any().optional(),
});

export type TSocial = z.infer<typeof SSocial>;

export const SAddress = z.object({
  institution: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});
export type TAddress = z.infer<typeof SAddress>;

export const SProject = z.object({
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  repository: z.string().optional(),
  website: z.string().optional(),
  year: z.number(),
  type: SProjectType,
});
export type TProject = z.infer<typeof SProject>;

export const SSkill = z.object({
  domain: z.string(),
  items: z.array(z.string()),
});
export type TSkill = z.infer<typeof SSkill>;

export const SExperience = z.object({
  title: z.string(),
  contract: z.string(),
  address: SAddress,
  dates: SDates,
  description: z.string(),
  tasks: z.array(z.string()),
  technologies: z.array(z.string()),
  website: z.string(),
});
export type TExperience = z.infer<typeof SExperience>;

export const SEducation = z.object({
  degree: z.string(),
  address: SAddress,
  dates: SDates,
  description: z.string(),
  highlights: z.array(z.string()).optional(),
  keyCourses: z.array(z.string()),
  grade: z.string().optional(),
  options: z.array(z.string()).optional(),
  website: z.string(),
});
export type TEducation = z.infer<typeof SEducation>;

export const SReference = z.object({
  name: z.string(),
  position: z.string(),
  company: z.string(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
});
export type TReference = z.infer<typeof SReference>;

export const SLanguage = z.object({
  name: z.string(),
  level: z.string(),
});
export type TLanguage = z.infer<typeof SLanguage>;

export const SCV = z.object({
  title: z.string(),
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
