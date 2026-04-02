import { z } from "zod";

export const SLanguage = z.object({
  name: z.string(),
  level: z.string(),
});
export type TLanguage = z.infer<typeof SLanguage>;
