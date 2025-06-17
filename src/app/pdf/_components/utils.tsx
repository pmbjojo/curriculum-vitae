import { mapLink } from "@/lib/utils";
import { TAddress } from "@/schemas/utils";
import Link from "next/link";
import { ReactNode } from "react";

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
  return <img src={src} alt={alt} className="size-3" />;
}
