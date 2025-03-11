"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Tab({
  children,
  href,
  Icon,
}: {
  Icon: React.ElementType;
  children: React.ReactNode;
  href: string;
}) {
  const location = usePathname();
  const isActive = location === href;
  return (
    <Link
      role="tab"
      href={href}
      className={cn(
        "flex items-center justify-center gap-2 rounded-sm py-1",
        isActive ? "bg-background" : ""
      )}
    >
      <Icon className="size-4" />
      <span className="hidden sm:inline">{children}</span>
    </Link>
  );
}
