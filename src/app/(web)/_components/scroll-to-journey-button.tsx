import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToJourneyButton({ scrollTo }: { scrollTo: () => void }) {
  return (
    <motion.div
      className="flex justify-center m-10"
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
  );
}
