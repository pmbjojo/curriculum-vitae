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
          <p className="mb-2">
            Specialized in Human-Computer Interaction and Web Technologies.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>GPA: 3.9/4.0</li>
            <li>
              Master&apos;s Thesis: &quot;Improving User Experience in
              Progressive Web Applications&quot;
            </li>
            <li>Teaching Assistant for Web Development courses</li>
            <li>Received the Outstanding Graduate Student Award</li>
          </ul>
          <p className="mt-2 text-sm font-medium">
            Key courses: Advanced Algorithms, Machine Learning, UI/UX Design,
            Web Systems
          </p>
        </AnimatedTimelineItem>
      ))}
    </div>
  );
}
