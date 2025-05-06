import Link from "next/link";
import { Button } from "../ui/button";
import { ReactNode } from "react";

export function LinkButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Button asChild variant="link" className="text-inherit p-0 h-auto">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  );
}
