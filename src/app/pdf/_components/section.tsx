import { ReactNode } from "react";

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="text-xl border-b mb-1 font-bold border-neutral-300">
        {title}
      </h2>
      {children}
    </section>
  );
}
