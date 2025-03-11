"use client";

import { AnimatedTimelineItem } from "@/components/web/timeline";
import { displayInterval } from "@/lib/utils";
import { data } from "@/schemas";

export default function ExperiencePage() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {data.experience.map((e) => (
        <AnimatedTimelineItem
          key={e.company}
          title={e.title}
          organization={{ name: e.company }}
          location={e.address.city}
          period={displayInterval(e.dates)}
        >
          <p className="mb-2">{e.description}</p>
          <ul className="list-disc pl-5 space-y-1">
            {e.tasks.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm font-medium">
            Technologies: {e.technologies.join(", ")}
          </p>
        </AnimatedTimelineItem>
      ))}
    </div>
  );
}
