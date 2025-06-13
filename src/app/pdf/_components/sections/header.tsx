import { resume } from "@/data";
import { differenceInYears } from "date-fns";
import { Mail, Phone, Linkedin, Car, Globe } from "lucide-react";
import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Profile from "@/public/profile.jpg";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Meta({
  Icon,
  children,
  className,
}: {
  Icon: ComponentType<{ className: string }>;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="text-xs">{children}</div>
      <Icon className="size-4 bg-[#80a5d8] rounded-xs p-0.5 stroke-black" />
    </div>
  );
}

export function Header({ color }: { color?: string }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`flex justify-between p-6 items-center text-white`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={Profile}
          alt="Profile"
          className="size-24 rounded-xl object-cover"
        />
        <PersonalDetails />
      </div>
      <div className="text-3xl font-bold">{resume.title}</div>
      <Informations />
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="flex flex-col">
      <span className="text-[1.5rem] font-bold ligne leading-tight">
        {resume.firstName}
      </span>
      <span className="text-[1.25rem] leading-tight">{resume.lastName}</span>
      <span className="text-[0.825rem] font-light leading-tight">
        {differenceInYears(new Date(), new Date(resume.birthday))} ans
      </span>
    </div>
  );
}

function Informations() {
  const linkedin = resume.socials.find((s) => s.name === "LinkedIn");
  return (
    <div className="flex flex-col items-end gap-0.5">
      <Meta Icon={Mail}>
        <Link href={`mailto:${resume.email}`}>{resume.email}</Link>
      </Meta>
      <Meta Icon={Phone}>
        <Link href={`tel:${resume.phone}`}>{resume.phone}</Link>
      </Meta>
      {linkedin && (
        <Meta Icon={Linkedin}>
          <Link href={linkedin.link}>{linkedin.name}</Link>
        </Meta>
      )}
      {resume.website && (
        <Meta Icon={Globe}>
          <Link href={resume.website}>Site web</Link>
        </Meta>
      )}
      {resume.drivingLicense && (
        <Meta Icon={Car}>Permis {resume.drivingLicense}</Meta>
      )}
      {/* <Meta Icon={Home} className="hidden print:flex text-right items-start">
        {meta.address.street}
        <br />
        {meta.address.zip} {meta.address.city}
      </Meta> */}
    </div>
  );
}
