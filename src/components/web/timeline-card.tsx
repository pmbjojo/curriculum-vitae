import { motion } from "framer-motion";
import {
  Building,
  Calendar,
  ExternalLink,
  GitBranch,
  MapPin,
} from "lucide-react";
import { TAddress } from "@/schemas";
import { MapLink } from "./map-link";
import { LinkButton } from "./link-button";
import { ReactNode } from "react";

export function TimelineCard({
  title,
  organization,
  address,
  period,
  repository,
  website,
  children,
}: {
  title: string;
  organization: { name: string; url?: string };
  address?: TAddress;
  period: string;
  children: ReactNode;
  website?: string;
  repository?: string;
}) {
  return (
    <motion.div className="relative">
      <motion.div className="absolute -left-[34px] top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-4 border-background bg-primary" />
      <motion.div className="rounded-lg border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
        <Header
          organization={organization}
          period={period}
          title={title}
          address={address}
          repository={repository}
          website={website}
        />

        <div className="text-muted-foreground">{children}</div>
      </motion.div>
    </motion.div>
  );
}

export function Header({
  organization,
  address,
  period,
  title,
  repository,
  website,
}: {
  title: string;
  organization: { name: string; url?: string };
  address?: TAddress;
  period: string;
  website?: string;
  repository?: string;
}) {
  return (
    <div className="flex justify-between">
      <div className="mb-3">
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4" />
            {organization.url ? (
              <LinkButton href={organization.url}>
                {organization.name}
              </LinkButton>
            ) : (
              <span>{organization.name}</span>
            )}
          </div>

          {address && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <MapLink address={address}>{address?.city}</MapLink>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 text-muted-foreground items-start">
        {website && (
          <div className="flex items-center gap-1 ">
            <ExternalLink className="size-4" />
            <LinkButton href={website}>Visit</LinkButton>
          </div>
        )}
        {repository && (
          <div className="flex items-center gap-1">
            <GitBranch className="size-4" />
            <LinkButton href={repository}>Repository</LinkButton>
          </div>
        )}
      </div>
    </div>
  );
}
