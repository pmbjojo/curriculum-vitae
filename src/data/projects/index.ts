import { sigl } from "./sigl";
import { obelisk } from "./obelisk";
import { flashmobiles } from "./flashmobiles";
import { vodkify } from "./vodkify";
import { TProject } from "@/schemas/project";
import { beAnArtist } from "./be-an-artist";
import { cybersecurityLab } from "./cybersecurity-lab";
import { coinrankingApp } from "./coinranking-app";
import { drawingCompetitionManagement } from "./drawing-competition-management";
import { minesweeper } from "./minesweeper";
import { oracleLab } from "./oracle-lab";
// import { jetpackComposeCourse } from "./jetpack-compose-for-android-developers";
// import { dokkan } from "./dokkan";

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
  // dokkan,
  // jetpackComposeCourse,
];
