"use client";

import { TimelineCard } from "@/components/web/timeline-card";
import { displayInterval } from "@/lib/utils";
import { meta } from "@/data";

export default function EducationPage() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {meta.education.map((e) => (
        <TimelineCard
          key={e.degree}
          title={e.degree}
          organization={{ name: e.address.institution, url: e.website }}
          address={e.address}
          period={displayInterval(e.dates)}
        >
          <p>{e.description}</p>
          <p>Cours: {e.keyCourses?.join(", ")}</p>
        </TimelineCard>
      ))}
    </div>
  );
}
