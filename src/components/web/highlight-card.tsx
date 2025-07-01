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
      className="bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
      transition={{ delay: 0.2 }}
    >
      <Icon className="size-6" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-muted-foreground text-sm">{children}</div>
      </div>
    </motion.div>
  );
}
