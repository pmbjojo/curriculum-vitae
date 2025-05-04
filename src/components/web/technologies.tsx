import { BadgeList } from "./badge-list";

export function Technologies({ technologies }: { technologies: string[] }) {
  return (
    <p className="text-sm font-medium flex gap-1">
      Technologies :<BadgeList items={technologies}></BadgeList>
    </p>
  );
}
