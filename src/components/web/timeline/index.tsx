"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

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
  TimelineCard,
  Content,
  TimelineDot,
  Header,
  HeaderAction,
  HeaderDescription,
  HeaderTop,
  Title,
} from "./timeline-card";
