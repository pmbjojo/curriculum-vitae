import { z } from "zod/v4";

export const SLanguage = z.object({
  name: z.string(),
  level: z.string(),
});
export type TLanguage = z.infer<typeof SLanguage>;
