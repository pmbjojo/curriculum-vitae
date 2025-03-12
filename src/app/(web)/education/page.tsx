"use client";

import { AnimatedTimelineItem } from "@/components/web/timeline";
import { displayInterval } from "@/lib/utils";
import { data } from "@/schemas";

export default function EducationPage() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {data.education.map((e) => (
        <AnimatedTimelineItem
          key={e.degree}
          title={e.degree}
          organization={{ name: e.institution, url: e.website }}
          location={e.address.city}
          period={displayInterval(e.dates)}
        >
          {e.description}
        </AnimatedTimelineItem>
      ))}
    </div>
  );
}
