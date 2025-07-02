"use client";

import type { VariantProps } from "class-variance-authority";
import { useMemo, useState } from "react";
import { Badge, type badgeVariants } from "../ui/badge";

export function BadgeList({
  items,
  max = 5,
  variant = "default",
  overflowVariant = "outline",
}: {
  items: string[];
  max?: number;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  overflowVariant?: VariantProps<typeof badgeVariants>["variant"];
}) {
  const [showMore, setShowMore] = useState(false);
  const displayedItems = useMemo(
    () => (showMore ? items : items.slice(0, max)),
    [items, max, showMore],
  );
  return (
    <div className="flex flex-wrap gap-1">
      {displayedItems.map((item) => (
        <Badge key={item} variant={variant}>
          {item}
        </Badge>
      ))}
      {items.length > max && (
        <Badge
          className="cursor-pointer"
          variant={overflowVariant}
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Voir moins" : `+${items.length - max} autres`}
        </Badge>
      )}
    </div>
  );
}
