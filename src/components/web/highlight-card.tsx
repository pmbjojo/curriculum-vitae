import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { motion } from "motion/react";
import { LucideProps } from "lucide-react";

export function HighlightCard({
  title,
  children,
  Icon,
}: {
  title: string;
  children: ReactNode;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <motion.div
      className="rounded-lg border bg-card p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
      transition={{ delay: 0.2 }}
    >
      <Icon className="size-6" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </motion.div>
  );
}
