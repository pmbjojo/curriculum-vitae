"use client";

import { TimelineCard } from "@/components/web/timeline-card";
import { displayInterval } from "@/lib/utils";
import { meta } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EducationTab() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {meta.education.map((e, i) => (
        <TimelineCard
          index={i}
          key={e.degree}
          title={e.degree}
          organization={{ name: e.address.institution, url: e.website }}
          address={e.address}
          period={displayInterval(e.dates)}
        >
          <div className="flex flex-col gap-2">
            <p>{e.description}</p>
            {e.highlights && (
              <div className="flex gap-3">
                {e.highlights.map((p) => (
                  <div key={p.title}>
                    <div className="font-bold">{p.title}</div>
                    <p>{p.description}</p>
                  </div>
                ))}
              </div>
            )}
            <Accordion type="multiple">
              {e.program && (
                <AccordionItem value="program">
                  <AccordionTrigger>Programme</AccordionTrigger>
                  <AccordionContent>
                    {e.program.map((p) => (
                      <div key={p.category}>
                        <span className="font-bold">{p.category} : </span>
                        <span>{p.description}</span>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              )}
              {e.skills && (
                <AccordionItem value="skills">
                  <AccordionTrigger>Compétences</AccordionTrigger>
                  <AccordionContent>
                    {e.skills.map((p) => (
                      <div key={p.title}>
                        <div className="font-bold">{p.title}</div>
                        <ul className="list-disc list-inside">
                          {p.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </TimelineCard>
      ))}
    </div>
  );
}
