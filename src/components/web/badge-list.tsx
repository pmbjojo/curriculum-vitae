"use client";

import { useState, useMemo } from "react";
import { Badge } from "../ui/badge";

export function BadgeList({
  items,
  max = 5,
}: {
  items: string[];
  max?: number;
}) {
  const [showMore, setShowMore] = useState(false);
  const displayedItems = useMemo(
    () => (showMore ? items : items.slice(0, max)),
    [items, max, showMore]
  );
  return (
    <div className="flex flex-wrap gap-1">
      {displayedItems.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
      {items.length > max && (
        <Badge
          className="cursor-pointer"
          variant="outline"
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
