"use client";

import { Hero } from "./_components/hero/hero";
import { ReactNode, useRef } from "react";
import { ModeToggle } from "@/components/web/mode-toggle";
import SkillsSection from "@/app/(web)/_components/skills-section";
import { ScrollToJourneyButton } from "./_components/scroll-to-journey-button";
import { motion } from "motion/react";
import { Briefcase, FolderGit2, GraduationCap } from "lucide-react";
import ScrollToTopButton from "@/components/web/scroll-to-top";
import { TabButton } from "@/components/web/tab-button";

export default function Home({ children }: { children: ReactNode }) {
  const scrollToRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <header className="flex justify-end p-4">
          <ModeToggle />
        </header>
        <div className="flex grow justify-center items-center">
          <Hero />
        </div>
        <ScrollToJourneyButton
          scrollTo={() => scrollToRef.current?.scrollIntoView()}
        />
      </div>
      <ScrollToTopButton />
      <main
        ref={scrollToRef}
        className="w-full bg-muted py-6 md:py-12 flex flex-col gap-10 grow"
      >
        <SkillsSection />
        <section className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 pb-6"
          >
            <TabButton href="/">
              <Briefcase className="size-4" />
              Expérience
            </TabButton>
            <TabButton href="/education">
              <GraduationCap className="size-4" />
              Formation
            </TabButton>
            <TabButton href="/projects">
              <FolderGit2 className="ssize-4" />
              Projets
            </TabButton>
          </motion.div>
          {children}
        </section>
      </main>
    </>
  );
}
