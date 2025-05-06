import { TAddress } from "@/schemas/utils";
import {
  Building,
  MapPin,
  GitFork,
  Calendar,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import { LinkButton } from "../link-button";
import { MapLink } from "../map-link";

export function Institution({
  institution,
}: {
  institution: { name: string; url?: string };
}) {
  return (
    <div className="flex items-center gap-1">
      <Building className="h-4 w-4" />
      {institution.url ? (
        <LinkButton href={institution.url}>{institution.name}</LinkButton>
      ) : (
        <span>{institution.name}</span>
      )}
    </div>
  );
}

export function Address({ address }: { address: TAddress }) {
  return (
    <div className="flex items-center gap-1">
      <MapPin className="size-4" />
      <MapLink address={address}>
        {address?.city}
        {address?.country !== "France" && `, ${address?.country}`}
      </MapLink>
    </div>
  );
}

export function Department({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-1">
      <GitFork className="size-4" />
      <span>Service {children}</span>
    </div>
  );
}

export function Period({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-1">
      <Calendar className="size-4" />
      <span>{children}</span>
    </div>
  );
}

export function WebSite({ href }: { href: string }) {
  return (
    <div className="flex items-center gap-1 ">
      <ExternalLink className="size-4" />
      <LinkButton href={href}>Visit</LinkButton>
    </div>
  );
}

export function Repository({ href }: { href: string }) {
  return (
    <div className="flex items-center gap-1">
      <GitBranch className="size-4" />
      <LinkButton href={href}>Repository</LinkButton>
    </div>
  );
}
