import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { mapLink } from "@/lib/utils";
import type { TAddress } from "@/schemas/utils";

export function Institution({ url, name }: { url: string; name: string }) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </Link>
  );
}

export function Description({ children }: { children: ReactNode }) {
  return <div className="text-[0.7rem] text-gray-800 italic">{children}</div>;
}

export function Address({ address }: { address: TAddress }) {
  return (
    <Link href={mapLink(address)} target="_blank" rel="noopener noreferrer">
      {address.city}
      {address.country !== "France" && `(${address.country})`}
    </Link>
  );
}

export function InstitutionIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image width={12} height={12} src={src} alt={alt} className="size-3" />
  );
}
