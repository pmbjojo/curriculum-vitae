import type { TProject } from "@/schemas/project";
import { beAnArtist } from "./be-an-artist";
import { coinrankingApp } from "./coinranking-app";
import { cybersecurityLab } from "./cybersecurity-lab";
import { dokkan } from "./dokkan";
import { drawingCompetitionManagement } from "./drawing-competition-management";
import { flashmobiles } from "./flashmobiles";
import { jetpackCompose } from "./jetpack-compose";
import { minesweeper } from "./minesweeper";
import { obelisk } from "./obelisk";
import { oracleLab } from "./oracle-lab";
import { sigl } from "./sigl";
import { vodkify } from "./vodkify";

export const projects: TProject[] = [
  sigl,
  coinrankingApp,
  cybersecurityLab,
  drawingCompetitionManagement,
  minesweeper,
  oracleLab,
  obelisk,
  flashmobiles,
  vodkify,
  beAnArtist,
  dokkan,
  jetpackCompose,
];
