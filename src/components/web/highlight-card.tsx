import { ReactNode } from "react";
import { motion } from "motion/react";

export function HighlightCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="rounded-lg border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{children}</p>
    </motion.div>
  );
}
