"use client";

import { TimelineCard } from "@/components/web/timeline-card";
import { displayInterval } from "@/lib/utils";
import { meta } from "@/data";
import { Technologies } from "@/components/web/technologies";

export default function ExperienceTab() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {meta.experience.map((e, i) => (
        <TimelineCard
          index={i}
          key={e.address.institution}
          title={e.title}
          organization={{ name: e.address.institution, url: e.website }}
          address={e.address}
          period={displayInterval(e.dates)}
        >
          <div className="flex flex-col gap-2">
            <p>{e.description}</p>
            <ul className="list-disc list-inside">
              {e.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Technologies technologies={e.technologies} />
          </div>
        </TimelineCard>
      ))}
    </div>
  );
}
