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
        "relative border-l-2 border-primary/20 pl-6 ml-2.5 flex flex-col gap-5",
        className
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
