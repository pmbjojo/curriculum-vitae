import { SAddress } from "@/schemas/utils";
import { z } from "zod/v4";
import { LinkButton } from "./link-button";
import { ReactNode } from "react";
import { mapLink } from "@/lib/utils";

export function MapLink({
  address,
  children,
}: {
  address: z.infer<typeof SAddress>;
  children: ReactNode;
}) {
  return <LinkButton href={mapLink(address)}>{children}</LinkButton>;
}
