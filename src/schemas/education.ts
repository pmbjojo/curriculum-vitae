import { z } from "zod";
import { SAddress, SDates } from "./utils";

export const SEducation = z.object({
  degree: z.string(),
  address: SAddress,
  dates: SDates,
  description: z.string(),
  program: z
    .array(
      z.object({
        category: z.string(),
        description: z.string(),
      })
    )
    .optional(),
  highlights: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .optional(),
  skills: z
    .array(
      z.object({
        title: z.string(),
        items: z.array(z.string()),
      })
    )
    .optional(),
  grade: z.string().optional(),
  options: z.array(z.string()).optional(),
  website: z.string(),
});
export type TEducation = z.infer<typeof SEducation>;
