import { ReactElement } from "react";
import PhoneBill from "./projInfo/phonebill";
import HaskellGo from "./projInfo/haskellgo";
import CloudProject from "./projInfo/cloudproject";
import Safe from "./projInfo/safe";
import TriMetPipeline from "./projInfo/TriMetPipeline";
import UnderwayShV3 from "./projInfo/UnderwayShV3";

export interface ExperienceItem {
  id: number;
  title: string;
  dates: string;
  content: ReactElement;
}

const projectInfo: ExperienceItem[] = [
  {
    id: 0,
    title: "underway.sh",
    dates: "February 2025 - March 2025",
    content: <UnderwayShV3 />,
  },
  {
    id: 1,
    title: "TriMet Data Pipeline",
    dates: "April 2024 - June 2024",
    content: <TriMetPipeline />,
  },
  {
    id: 2,
    title: "Video Game Search",
    dates: "November 2023 - December 2023",
    content: <CloudProject />,
  },
  {
    id: 3,
    title: "SAFE",
    dates: "January 2023 - June 2023",
    content: <Safe />,
  },
  {
    id: 4,
    title: "HaskellGo",
    dates: "February 2023 - March 2023",
    content: <HaskellGo />,
  },
  {
    id: 5,
    title: "Phone Bill",
    dates: "August 2022",
    content: <PhoneBill />,
  },
];

export default projectInfo;
