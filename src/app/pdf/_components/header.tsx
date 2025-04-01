import { meta } from "@/data";
import { differenceInYears } from "date-fns";
import { Mail, Phone, Linkedin, Car, Globe } from "lucide-react";
import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Profile from "@/public/profile.jpg";
import Link from "next/link";

export function Meta({
  Icon,
  children,
}: {
  Icon: ComponentType<{ className: string }>;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-1">
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
      <div className="text-3xl font-bold">{meta.title}</div>
      <Informations />
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="flex flex-col">
      <span className="text-[1.5rem] font-bold ligne leading-tight">
        {meta.firstName}
      </span>
      <span className="text-[1.25rem] leading-tight">{meta.lastName}</span>
      <span className="text-[0.825rem] font-extralight leading-tight">
        {differenceInYears(new Date(), new Date(meta.birthday))} ans
      </span>
    </div>
  );
}

function Informations() {
  const linkedin = meta.socials.find((s) => s.name === "LinkedIn");
  return (
    <div className="flex flex-col items-end gap-0.5">
      <Meta Icon={Mail}>
        <Link href={`mailto:${meta.email}`}>{meta.email}</Link>
      </Meta>
      <Meta Icon={Phone}>
        <Link href={`tel:${meta.phone}`}>{meta.phone}</Link>
      </Meta>
      {linkedin && (
        <Meta Icon={Linkedin}>
          <Link href={linkedin.link}>{linkedin.name}</Link>
        </Meta>
      )}
      {meta.website && (
        <Meta Icon={Globe}>
          <Link href={meta.website}>Website</Link>
        </Meta>
      )}
      {meta.drivingLicense && (
        <Meta Icon={Car}>Permis {meta.drivingLicense}</Meta>
      )}
    </div>
  );
}
