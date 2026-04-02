import { type ClassValue, clsx } from "clsx";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { fr } from "date-fns/locale";
import { twMerge } from "tailwind-merge";
import type { z } from "zod";
import { resume } from "@/data";
import type { SDates, TAddress } from "@/schemas/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayDuration(dates: z.infer<typeof SDates>) {
  return formatDuration(
    intervalToDuration({
      start: dates.start,
      end: dates.end ?? Date.now(),
    }),
    { locale: fr },
  );
}

export function displayInterval(
  dates: z.infer<typeof SDates>,
  formatStr: string = "MMM yyyy",
) {
  if (!dates.end)
    return format(dates.start, formatStr, { locale: fr }) + " - Aujourd'hui";
  return (
    format(dates.start, formatStr, { locale: fr }) +
    " - " +
    format(dates.end, formatStr, { locale: fr })
  );
}

export const fileName = `CV ${
  resume.firstName
} ${resume.lastName.toUpperCase()}.pdf`;

export const mapLink = (address: TAddress) =>
  `https://www.google.com/maps/search/?api=1&query=${address.street}+${address.city}+${address.state}+${address.zip}+${address.country}`;
