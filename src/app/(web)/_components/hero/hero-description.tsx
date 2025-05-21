import { resume } from "@/data";
import { motion } from "motion/react";

export function HeroDescription() {
  return (
    <div className="space-y-2">
      <motion.h1
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {resume.firstName} {resume.lastName}
      </motion.h1>
      <motion.h2
        className="text-xl font-medium text-muted-foreground md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {resume.title}
      </motion.h2>
      <motion.p
        className="max-w-[600px] text-muted-foreground md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {resume.summary}
      </motion.p>
    </div>
  );
}
