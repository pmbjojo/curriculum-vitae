"use client";

import { Briefcase, GraduationCap, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { Hero } from "./_components/hero";
import { useRef } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import ScrollToTopButton from "@/components/scroll-to-top";
import ExperienceTab from "./_components/experience-tab";
import EducationTab from "./_components/education-tab";
import ProjectsTab from "./_components/projects-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
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
        <section ref={scrollToRef} className="w-full bg-muted py-6 md:py-12">
          <div className="container px-4">
            <Tabs defaultValue="experience">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="pb-6 md:pb-12"
              >
                <TabsList className="md:grid w-full md:grid-cols-3 justify-center">
                  <TabsTrigger value="experience" className="py-3 grow">
                    <Briefcase className="size-4" />
                    Expérience
                  </TabsTrigger>
                  <TabsTrigger value="education" className="py-3">
                    <GraduationCap className="size-4" />
                    Formation
                  </TabsTrigger>
                  <TabsTrigger value="projects" className="py-3">
                    <FolderGit2 className="size-4" />
                    Projets
                  </TabsTrigger>
                </TabsList>
              </motion.div>
              <TabsContent value="experience">
                <ExperienceTab />
              </TabsContent>
              <TabsContent value="education">
                <EducationTab />
              </TabsContent>
              <TabsContent value="projects">
                <ProjectsTab />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </>
  );
}
