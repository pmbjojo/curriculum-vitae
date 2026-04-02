import type { TExperience } from "@/schemas/experience";
import { amtech } from "./amtech";
import { kropman } from "./kropman";
import { qstomize } from "./qstomize";
import { sdel } from "./sdel";

export const experience: TExperience[] = [sdel, kropman, amtech, qstomize].sort((a, b) => {
    return (b.dates.end?.getTime() ?? Date.now()) - (a.dates.end?.getTime() ?? Date.now())
});
