import { SAddress } from "@/schemas/utils";
import { z } from "zod/v4";
import { LinkButton } from "./link-button";
import { ReactNode } from "react";

export function MapLink({
  address,
  children,
}: {
  address: z.infer<typeof SAddress>;
  children: ReactNode;
}) {
  const href = `https://www.google.com/maps/search/?api=1&query=${address.street}+${address.city}+${address.state}+${address.zip}+${address.country}`;
  return <LinkButton href={href}>{children}</LinkButton>;
}
