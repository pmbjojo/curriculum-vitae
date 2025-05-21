import { z } from "zod/v4";

export const SDates = z.object({
  start: z.date(),
  end: z.date(),
});
export type TDates = z.infer<typeof SDates>;

export const SAddress = z.object({
  institution: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});
export type TAddress = z.infer<typeof SAddress>;
