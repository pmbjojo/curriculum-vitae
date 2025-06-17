import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ComponentProps, ReactNode } from "react";
import { Anchor } from "../anchor";

export function TimelineCard({
  index,
  children,
  className,
  Dot = <TimelineDot index={index} />,
  ...props
}: ComponentProps<typeof motion.div> & {
  index: number;
  children: ReactNode;
  Dot?: ReactNode;
}) {
  return (
    <motion.div
      className={cn(
        "bg-card relative rounded-lg border p-5 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...props}
    >
      {Dot}
      {children}
    </motion.div>
  );
}

export function Content({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </div>
  );
}

export function TimelineDot({
  index,
  className,
  ...props
}: ComponentProps<typeof motion.div> & { index: number }) {
  return (
    <motion.div
      className={cn(
        "border-background bg-primary absolute top-1/2 -left-[35px] size-5 -translate-y-1/2 rounded-full border-4",
        className,
      )}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: index * 0.1 + 0.2,
      }}
      {...props}
    />
  );
}

export function Title({ children }: { children: string }) {
  return (
    <Anchor id={children} className="text-xl font-bold" level="h4">
      {children}
    </Anchor>
  );
}

export function Header({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export function HeaderDescription({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex flex-row flex-wrap gap-x-3 gap-y-1 text-sm md:items-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function HeaderAction({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("text-muted-foreground flex gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function HeaderTop({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("flex justify-between", className)} {...props}>
      {children}
    </div>
  );
}
