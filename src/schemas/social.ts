import { Github, Linkedin } from "lucide-react";
import z from "zod/v4";

export const SocialIcon = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export const SSocial = z.object({
  name: z.literal(Object.keys(SocialIcon) as (keyof typeof SocialIcon)[]),
  link: z.string(),
});
export type TSocial = z.infer<typeof SSocial>;
