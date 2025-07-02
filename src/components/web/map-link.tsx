import type { ReactNode } from "react";
import type { z } from "zod/v4";
import { mapLink } from "@/lib/utils";
import type { SAddress } from "@/schemas/utils";
import { LinkButton } from "./link-button";

export function MapLink({
  address,
  children,
}: {
  address: z.infer<typeof SAddress>;
  children: ReactNode;
}) {
  return <LinkButton href={mapLink(address)}>{children}</LinkButton>;
}
