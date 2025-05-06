import { z } from "zod";

export const SProjectType = z.enum([
  "Personnel",
  "Académique",
  "Professionnel",
]);
export type TProjectType = z.infer<typeof SProjectType>;

export const SProject = z.object({
  title: z.string(),
  summary: z.string(),
  name: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  repository: z.string().url().optional(),
  website: z.string().url().optional(),
  year: z.number(),
  type: SProjectType,
});
export type TProject = z.infer<typeof SProject>;
