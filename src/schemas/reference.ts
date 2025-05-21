import { z } from "zod/v4";

export const SReference = z.object({
  name: z.string(),
  position: z.string(),
  company: z.string(),
  phone: z.string().optional(),
  email: z.email().optional(),
});
export type TReference = z.infer<typeof SReference>;
