import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { BadgeList } from "@/components/web/badge-list";
import {
  Address,
  Content,
  Department,
  Header,
  HeaderAction,
  HeaderDescription,
  HeaderTop,
  Institution,
  Period,
  Timeline,
  TimelineCard,
  Title,
} from "@/components/web/timeline";
import { resume } from "@/data";
import { displayInterval } from "@/lib/utils";

export default function ExperienceTab() {
  return (
    <Timeline>
      {resume.experience.map((e, i) => (
        <TimelineCard
          key={e.address.institution}
          index={i}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <Image
              width={32}
              height={32}
              src={e.icon}
              alt={e.address.institution}
              className="size-8"
            />
            <Header className="w-full">
              <HeaderTop className="flex-col sm:flex-row">
                <Title>{e.title}</Title>
                <HeaderAction>{e.contract}</HeaderAction>
              </HeaderTop>
              <HeaderDescription>
                <Institution
                  institution={{ name: e.address.institution, url: e.website }}
                />
                <Address address={e.address} />
                <Department>{e.department}</Department>
                <Period>{displayInterval(e.dates)}</Period>
              </HeaderDescription>
            </Header>
          </div>
          <Content className="flex flex-col gap-2">
            <p>{e.description}</p>
            {e.methodologies.length > 0 && (
              <div>Méthodologies : {e.methodologies.join(", ")}</div>
            )}
            <Accordion type="multiple">
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
                          <TableCell className="break-words whitespace-normal">
                            {t.goal}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Description</TableHead>
                          <TableCell className="break-words whitespace-pre-line">
                            {t.description}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Responsabilités</TableHead>
                          <TableCell className="break-words whitespace-normal">
                            {t.roles.join(", ")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Résultats</TableHead>
                          <TableCell className="break-words whitespace-normal">
                            <ul className="list-inside list-disc">
                              {t.results.map((r) => (
                                <li key={r}>{r}</li>
                              ))}
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHead>Technologies</TableHead>
                          <TableCell className="break-words whitespace-normal">
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
          </Content>
        </TimelineCard>
      ))}
    </Timeline>
  );
}
