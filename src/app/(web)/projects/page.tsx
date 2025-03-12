"use client";

import { AnimatedTimelineItem } from "@/components/web/timeline";
import { data } from "@/schemas";
import { Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {data.projects.map((p) => (
        <AnimatedTimelineItem
          key={p.title}
          title={p.title}
          organization={{ name: p.type }}
          period={p.year.toString()}
        >
          {p.description}
          <div className="mt-3">
            <Link
              href="https://github.com"
              className="text-primary hover:underline inline-flex items-center"
            >
              <Github className="mr-1 h-4 w-4 transition-transform" />
              <span className="relative">View on GitHub</span>
            </Link>
          </div>
        </AnimatedTimelineItem>
      ))}
    </div>
  );
}
