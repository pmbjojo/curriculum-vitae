import { SAddress } from "@/schemas";
import { z } from "zod";
import { LinkButton } from "./link-button";

export function MapLink({
  address,
  children,
}: {
  address: z.infer<typeof SAddress>;
  children: string;
}) {
  const href = `https://www.google.com/maps/search/?api=1&query=${address.street}+${address.city}+${address.state}+${address.zip}+${address.country}`;
  return <LinkButton href={href}>{children}</LinkButton>;
}
