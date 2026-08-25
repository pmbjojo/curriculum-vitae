import { Download, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IconSpan } from "@/components/web/icon-span";
import { resume } from "@/data";
import { cn, fileName } from "@/lib/utils";

export function HeroActions() {
  return (
    <motion.div
      className="flex flex-col gap-2 min-[400px]:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Link
        href={`mailto:${resume.email}`}
        className={cn(buttonVariants(), "group")}
      >
        <IconSpan Icon={Mail}>Contactez Moi</IconSpan>
      </Link>
      <Link
        href={`/${fileName}`}
        className={cn(buttonVariants({ variant: "outline" }), "group")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconSpan Icon={FileText}>Voir le PDF</IconSpan>
      </Link>
      <a
        href={`/${fileName}`}
        className={cn(buttonVariants({ variant: "outline" }), "group")}
        download={fileName}
      >
        <IconSpan Icon={Download}>Télécharger le PDF</IconSpan>
      </a>
    </motion.div>
  );
}
