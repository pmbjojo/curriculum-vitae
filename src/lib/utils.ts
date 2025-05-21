import { meta } from "@/data";
import { SDates } from "@/schemas/utils";
import { clsx, type ClassValue } from "clsx";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { fr } from "date-fns/locale";
import { twMerge } from "tailwind-merge";
import { z } from "zod/v4";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayDuration(dates: z.infer<typeof SDates>) {
  return formatDuration(
    intervalToDuration({
      start: dates.start,
      end: dates.end,
    }),
    { locale: fr }
  );
}

export function displayInterval(
  dates: z.infer<typeof SDates>,
  formatStr: string = "MMM yyyy"
) {
  return (
    format(dates.start, formatStr, { locale: fr }) +
    " - " +
    format(dates.end, formatStr, { locale: fr })
  );
}

export const fileName = `CV ${
  meta.firstName
} ${meta.lastName.toUpperCase()}.pdf`;
