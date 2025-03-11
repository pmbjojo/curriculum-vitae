import Link from "next/link";
import { ElementType } from "react";

export function SocialLink({
  name,
  link,
  Icon,
}: {
  name: string;
  link: string;
  Icon: ElementType;
}) {
  return (
    <Link
      key={name}
      href={link}
      target="_blank"
      className="text-muted-foreground hover:text-foreground transition-colors relative group"
    >
      <Icon className="h-5 w-5 transition-transform group-hover:scale-110"></Icon>
      {/* <Github  /> */}
      <span className="sr-only">{name}</span>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
    </Link>
  );
}
