"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Timeline({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "sm:border-primary/20 relative flex flex-col gap-5 border-0 pl-0 sm:ml-2.5 sm:border-l-2 sm:pl-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Address,
  Department,
  Institution,
  Period,
  Repository,
  WebSite,
} from "./meta";
export {
  Content,
  Header,
  HeaderAction,
  HeaderDescription,
  HeaderTop,
  TimelineCard,
  TimelineDot,
  Title,
} from "./timeline-card";
