import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, useMemo } from "react";

export function TabButton({
  children,
  className,
  href,
  ...props
}: ComponentProps<typeof Link> & {
  href: string;
}) {
  const path = usePathname();
  const activeClass = useMemo(
    () =>
      path === href ? "bg-background shadow-sm text-foreground" : undefined,
    [path, href]
  );
  return (
    <Link
      role="tab"
      href={href}
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-3 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50",
        activeClass,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
