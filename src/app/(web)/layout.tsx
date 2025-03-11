"use client";

import { Briefcase, GraduationCap, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { Hero } from "@/components/web/hero";
import { useRef } from "react";
import { Tab } from "@/components/web/tab";
import { ModeToggle } from "@/components/mode-toggle";
import ScrollToTopButton from "@/components/scroll-to-top";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollToRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ScrollToTopButton />
      <header className="flex justify-between items-center p-4">
        <div />
        <ModeToggle />
      </header>
      <main className="grow">
        <Hero scrollTo={() => scrollToRef.current?.scrollIntoView()} />
        <section ref={scrollToRef} className="w-full py-8 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="md:grid w-full md:grid-cols-3 flex flex-col mb-8 justify-center">
                <Tab Icon={Briefcase} href="/">
                  Expérience
                </Tab>
                <Tab Icon={GraduationCap} href="/education">
                  Formation
                </Tab>
                <Tab Icon={FolderGit2} href="/projects">
                  Projets
                </Tab>
              </div>
            </motion.div>
            {children}
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
