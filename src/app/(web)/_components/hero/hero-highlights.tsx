import { HighlightCard } from "@/components/web/highlight-card";
import { resume } from "@/data";
import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export function HeroHighlights() {
  return (
    <motion.div
      className="mt-12 grid gap-4 md:grid-cols-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <HighlightCard title="Expérience" Icon={Briefcase}>
        {resume.highlights.experience}
      </HighlightCard>
      <HighlightCard title="Formation" Icon={GraduationCap}>
        {resume.highlights.education}
      </HighlightCard>
      <HighlightCard title="Localisation" Icon={MapPin}>
        {resume.highlights.localisation}
      </HighlightCard>
    </motion.div>
  );
}
