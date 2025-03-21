"use client";

import { Technologies } from "@/components/web/technologies";
import { TimelineCard } from "@/components/web/timeline-card";
import { meta } from "@/data";

export default function ProjectsPage() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {meta.projects.map((p) => (
        <TimelineCard
          key={p.title}
          title={p.title}
          repository={p.repository}
          website={p.website}
          organization={{ name: p.type }}
          period={p.year.toString()}
        >
          <div className="flex flex-col gap-2">
            <p>{p.description}</p>
            <Technologies technologies={p.technologies} />
          </div>
        </TimelineCard>
      ))}
    </div>
  );
}
