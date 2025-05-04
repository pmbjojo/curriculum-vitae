import { cn } from "@/lib/utils";

export function Anchor({
  id,
  children,
  level,
  className,
}: {
  id: string;
  children: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) {
  const Tag = level;
  return (
    <Tag className={cn("relative group", className)} id={id}>
      <a href={`#${id}`} aria-label={`Lien vers : ${children}`}>
        <span>{children}</span>
        <span className="ml-1 opacity-0 transition-opacity group-hover:opacity-100 text-muted-foreground">
          #
        </span>
      </a>
    </Tag>
  );
}
