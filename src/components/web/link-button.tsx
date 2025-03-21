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
    <Button asChild variant="link" className="text-inherit px-0 p-0">
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Button>
  );
}
