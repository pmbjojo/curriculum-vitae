import { z } from "zod";

export const SReference = z.object({
  name: z.string(),
  position: z.string(),
  company: z.string(),
  phone: z.string().optional(),
  email: z.email().optional(),
});
export type TReference = z.infer<typeof SReference>;
