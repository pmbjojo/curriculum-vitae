"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { HeroHighlights } from "./hero-highlights";
import { HeroImage } from "./hero-image";
import { HeroSocials } from "./hero-socials";
import { HeroActions } from "./hero-actions";
import { HeroDescription } from "./hero-description";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={heroRef} className="container px-4">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HeroDescription />
          <HeroActions />
          <HeroSocials />
        </motion.div>
        <HeroImage />
      </div>
      <HeroHighlights />
    </section>
  );
}
