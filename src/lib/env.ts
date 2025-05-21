import { z } from "zod/v4";

const SEnv = z.object({
  BASE_URL: z.string(),
});

export const env = SEnv.parse({
  BASE_URL: process.env.BASE_URL,
});
