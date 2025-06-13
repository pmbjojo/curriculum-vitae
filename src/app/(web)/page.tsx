import { displayInterval } from "@/lib/utils";
import { resume } from "@/data";
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
import {
  Timeline,
  TimelineCard,
  Header,
  Address,
  Content,
  Period,
  Department,
  HeaderAction,
  HeaderDescription,
  HeaderTop,
  Institution,
  Title,
} from "@/components/web/timeline";

export default function ExperienceTab() {
  return (
    <Timeline>
      {resume.experience.map((e, i) => (
        <TimelineCard key={e.address.institution} index={i}>
          <Header>
            <HeaderTop>
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
          <Content>
            <div className="flex flex-col gap-2">
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
            </div>
          </Content>
        </TimelineCard>
      ))}
    </Timeline>
  );
}
