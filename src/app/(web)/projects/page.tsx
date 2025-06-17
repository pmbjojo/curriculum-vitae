"use client";

import { BadgeList } from "@/components/web/badge-list";
import {
  Content,
  Period,
  Header,
  HeaderAction,
  HeaderDescription,
  HeaderTop,
  Institution,
  Repository,
  Timeline,
  TimelineCard,
  Title,
  WebSite,
} from "@/components/web/timeline";
import { resume } from "@/data";

export default function ProjectsTab() {
  return (
    <Timeline>
      {resume.projects
        .toSorted((a, b) => b.year - a.year)
        .map((p, i) => (
          <TimelineCard index={i} key={p.title}>
            <Header>
              <HeaderTop>
                <Title>{p.title}</Title>
                <HeaderAction>
                  {p.website && <WebSite href={p.website} />}
                  {p.repository && <Repository href={p.repository} />}
                </HeaderAction>
              </HeaderTop>
              <HeaderDescription>
                <Institution institution={{ name: p.type }} />
                <Period>{p.year.toString()}</Period>
              </HeaderDescription>
            </Header>
            <Content>
              <div className="flex flex-col gap-2">
                <p>{p.description}</p>
                <BadgeList items={p.technologies} />
              </div>
            </Content>
          </TimelineCard>
        ))}
    </Timeline>
  );
}
