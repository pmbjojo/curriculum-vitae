import { z } from "zod";
import { SAddress, SDates } from "./utils";

export const STask = z.object({
  title: z.string(),
  goal: z.string(),
  technologies: z.array(z.string()),
  roles: z.array(z.string()),
  results: z.array(z.string()),
  skills: z.array(z.string()),
  description: z.string(),
});

export const SExperience = z.object({
  title: z.string(),
  department: z.string(),
  contract: z.string(),
  address: SAddress,
  dates: SDates,
  description: z.string(),
  tasks: z.array(STask),
  technologies: z.array(z.string()),
  methodologies: z.array(z.string()),
  website: z.string().url(),
});
export type TExperience = z.infer<typeof SExperience>;
