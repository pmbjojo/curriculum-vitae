import { meta } from "@/data";
import { Button } from "@/components/ui/button";
import { IconSpan } from "@/components/web/icon-span";
import { Download, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { fileName } from "@/lib/utils";

export function HeroActions() {
  return (
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
          href="/pdf"
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
  );
}
