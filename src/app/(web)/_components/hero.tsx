"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "../../../components/ui/button";
import { ChevronRight, Download, FileText, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { meta } from "@/data";
import { HighlightCard } from "../../../components/web/highlight-card";
import { SocialLink } from "../../../components/web/social-link";
import { IconSpan } from "../../../components/web/icon-span";
import Profile from "@/public/profile.jpg";
import { fileName } from "@/lib/utils";

export function Hero({ scrollTo }: { scrollTo: () => void }) {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={heroRef}
      className="w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {meta.firstName} {meta.lastName}
              </motion.h1>
              <motion.h2
                className="text-xl font-medium text-muted-foreground md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {meta.title}
              </motion.h2>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {meta.summary}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild>
                <Link href={`mailto:${meta.email}`} className="group">
                  <IconSpan Icon={Mail}>Contactez Moi</IconSpan>
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="/react"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconSpan Icon={FileText}>Voir PDF</IconSpan>
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`/${fileName}`} className="group" download={fileName}>
                  <IconSpan Icon={Download}>Télécharger PDF</IconSpan>
                </a>
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {meta.socials.map((s) => (
                <SocialLink
                  key={s.name}
                  name={s.name}
                  link={s.link}
                  Icon={s.icon}
                />
              ))}
            </motion.div>
          </motion.div>
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
              <Image
                src={Profile}
                alt="Profile"
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-primary/10 backdrop-blur-sm"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <HighlightCard title="Expérience">
            {meta.highlights.experience}
          </HighlightCard>
          <HighlightCard title="Formation">
            {meta.highlights.education}
          </HighlightCard>
          <HighlightCard title="Localisation">
            {meta.highlights.localisation}
          </HighlightCard>
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full group"
            onClick={scrollTo}
          >
            <span className="mr-2">Mon Parcours</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:rotate-90" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
