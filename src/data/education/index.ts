import type { TEducation } from "@/schemas/education";
import { bac } from "./bac";
import { eseo } from "./eseo";
import { geii } from "./geii";

export const education: TEducation[] = [eseo, geii, bac].sort((a, b) => {
    return (b.dates.end?.getTime() ?? Date.now()) - (a.dates.end?.getTime() ?? Date.now())
});
