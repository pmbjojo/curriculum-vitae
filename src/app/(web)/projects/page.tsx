"use client";

import { BadgeList } from "@/components/web/badge-list";
import {
  Content,
  Header,
  HeaderAction,
  HeaderDescription,
  HeaderTop,
  Institution,
  Period,
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
      {resume.projects.map((p, i) => (
        <TimelineCard index={i} key={p.title} className="flex flex-col gap-3">
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
              <Period>{p.date.getFullYear().toString()}</Period>
            </HeaderDescription>
          </Header>
          <Content className="flex flex-col gap-2">
            <p>{p.description}</p>
            <BadgeList items={p.technologies} />
          </Content>
        </TimelineCard>
      ))}
    </Timeline>
  );
}
