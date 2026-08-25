import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Address,
  Content,
  Header,
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

export default function EducationTab() {
  return (
    <Timeline>
      {resume.education.map((e, i) => (
        <TimelineCard key={e.degree} index={i} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              width={32}
              height={32}
              src={e.icon}
              alt={e.address.institution}
              className="size-8"
            />
            <Header className="w-full">
              <HeaderTop>
                <Title>{e.degree}</Title>
              </HeaderTop>
              <HeaderDescription>
                <Institution
                  institution={{ name: e.address.institution, url: e.website }}
                />
                <Address address={e.address} />
                <Period>{displayInterval(e.dates)}</Period>
              </HeaderDescription>
            </Header>
          </div>
          <Content className="flex flex-col gap-2">
            <p>{e.description}</p>
            {e.highlights && (
              <div className="flex flex-col gap-3 lg:flex-row">
                {e.highlights.map((p) => (
                  <div key={p.title}>
                    <div className="font-bold">{p.title}</div>
                    <p>{p.description}</p>
                  </div>
                ))}
              </div>
            )}
            <Accordion multiple>
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
                        <ul className="list-inside list-disc">
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
          </Content>
        </TimelineCard>
      ))}
    </Timeline>
  );
}
