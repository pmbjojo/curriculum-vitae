import { FiGithub, FiLinkedin } from "react-icons/fi";
import z from "zod";

export const SocialIcon = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
};

export const SSocial = z.object({
  name: z.literal(Object.keys(SocialIcon) as (keyof typeof SocialIcon)[]),
  link: z.string(),
});
export type TSocial = z.infer<typeof SSocial>;
