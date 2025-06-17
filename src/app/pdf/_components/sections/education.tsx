import { resume } from "@/data";
import { Section } from "../section";
import { displayInterval } from "@/lib/utils";
import { Institution, Description, Address, InstitutionIcon } from "../utils";
import { TEducation } from "@/schemas/education";

export function Education() {
  return (
    <Section title="Formation">
      <ul className="flex flex-col gap-1">
        {resume.education
          .filter((e) => e.pdf)
          .map((e) => (
            <li key={e.address.institution}>
              <EducationHeader education={e} />
            </li>
          ))}
      </ul>
    </Section>
  );
}

export function EducationHeader({ education }: { education: TEducation }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <InstitutionIcon
            src={education.icon}
            alt={education.address.institution}
          />
          <h3 className="text-sm font-bold tracking-tighter">
            {education.degree}
            {education.options && `, option ${education.options.join(", ")}`}
          </h3>
        </div>
        <div>{displayInterval(education.dates, "yyyy")}</div>
      </div>
      <Description>
        <Institution
          url={education.website}
          name={education.address.institution}
        />
        , <Address address={education.address} />
      </Description>
    </div>
  );
}
