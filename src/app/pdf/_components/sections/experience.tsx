import Markdown from "react-markdown";
import { resume } from "@/data";
import { displayInterval } from "@/lib/utils";
import type { TExperience } from "@/schemas/experience";
import { Section } from "../section";
import { Address, Description, Institution, InstitutionIcon } from "../utils";

export function Experience() {
  return (
    <Section title="Expérience">
      <ul className="flex flex-col gap-1">
        {resume.experience.map((e) => (
          <li key={e.website}>
            <ExperienceHeader experience={e} />
            <ul className="list-inside list-disc">
              {e.tasks.map((t) =>
                t.skills.map((s) => (
                  <li key={s} className="text-xs">
                    <Markdown
                      components={{
                        p(props) {
                          return (
                            <span className="text-xs">{props.children}</span>
                          );
                        },
                      }}
                    >
                      {s}
                    </Markdown>
                  </li>
                )),
              )}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ExperienceHeader({ experience }: { experience: TExperience }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <InstitutionIcon
            src={experience.icon}
            alt={experience.address.institution}
          />
          <h3 className="text-sm font-bold">
            <Institution
              url={experience.website}
              name={experience.address.institution}
            />{" "}
            - {experience.title}
          </h3>
        </div>
        <div>{displayInterval(experience.dates)}</div>
      </div>
      <Description>
        <Address address={experience.address} />,{" "}
        <span>{experience.department}</span>
      </Description>
    </div>
  );
}
