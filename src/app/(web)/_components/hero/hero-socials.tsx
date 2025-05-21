import { SocialLink } from "@/components/web/social-link";
import { meta } from "@/data";
import { motion } from "motion/react";

export function HeroSocials() {
  return (
    <motion.div
      className="flex items-center gap-4 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {meta.socials.map((s) => (
        <SocialLink key={s.name} name={s.name} link={s.link} />
      ))}
    </motion.div>
  );
}
