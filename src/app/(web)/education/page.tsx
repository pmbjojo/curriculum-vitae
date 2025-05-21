import { displayInterval } from "@/lib/utils";
import { resume } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Address,
  Content,
  Period,
  Header,
  HeaderDescription,
  HeaderTop,
  Institution,
  Timeline,
  TimelineCard,
  Title,
} from "@/components/web/timeline";

export default function EducationTab() {
  return (
    <Timeline>
      {resume.education.map((e, i) => (
        <TimelineCard key={e.degree} index={i}>
          <Header>
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
          <Content>
            <div className="flex flex-col gap-2">
              <p>{e.description}</p>
              {e.highlights && (
                <div className="flex gap-3 flex-col lg:flex-row">
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
          </Content>
        </TimelineCard>
      ))}
    </Timeline>
  );
}
