"use client";

import { TimelineCard } from "@/components/web/timeline-card";
import { displayInterval } from "@/lib/utils";
import { meta } from "@/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeList } from "@/components/web/badge-list";

export default function ExperienceTab() {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-10">
      {meta.experience.map((e, i) => (
        <TimelineCard
          index={i}
          key={e.address.institution}
          department={e.department}
          title={e.title + " (" + e.contract + ")"}
          organization={{ name: e.address.institution, url: e.website }}
          address={e.address}
          period={displayInterval(e.dates)}
        >
          <div className="flex flex-col gap-2">
            <p>{e.description}</p>
            {e.methodologies.length > 0 && (
              <div>Méthodologies : {e.methodologies.join(", ")}</div>
            )}
            <Accordion type="single" collapsible className="w-full">
              {e.tasks.map((t) => (
                <AccordionItem value={t.title} key={t.title}>
                  <AccordionTrigger className="font-bold">
                    {t.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Table className="border">
                      <TableBody>
                        <TableRow>
                          <TableHead>Objectif</TableHead>
                          <TableCell className="whitespace-normal break-words">
                            {t.goal}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Description</TableHead>
                          <TableCell className="whitespace-pre-line break-words">
                            {t.description}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Responsabilités</TableHead>
                          <TableCell className="whitespace-normal break-words">
                            {t.roles.join(", ")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Resultats</TableHead>
                          <TableCell className="whitespace-normal break-words">
                            <ul className="list-disc list-inside">
                              {t.results.map((r) => (
                                <li key={r}>{r}</li>
                              ))}
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Technologies</TableHead>
                          <TableCell className="whitespace-normal break-words">
                            <div className="flex gap-1">
                              <BadgeList items={t.technologies} max={5} />
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TimelineCard>
      ))}
    </div>
  );
}
