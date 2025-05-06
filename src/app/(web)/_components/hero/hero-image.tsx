import { motion } from "motion/react";
import Image from "next/image";
import Profile from "@/public/profile.jpg";

export function HeroImage() {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className="relative aspect-square overflow-hidden rounded-full border-4 border-background shadow-xl w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
        <Image src={Profile} alt="Profile" className="object-cover" priority />
        <motion.div
          className="absolute inset-0 bg-primary/10 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
