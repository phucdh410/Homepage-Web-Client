import {
  MActivities,
  MContent,
  MDeanCommittee,
  MFunctionsAndMissions,
  MIntroAndTimeline,
} from "@/modules/center";
import { MTimelineTag } from "@/modules/department-detail";
import { MStaff } from "@/modules/line-department";

const CenterPage = () => {
  return (
    <div className="container">
      <MIntroAndTimeline />

      <MContent />

      <MFunctionsAndMissions />

      <MDeanCommittee />

      <MStaff />

      <MActivities />

      <MTimelineTag />
    </div>
  );
};

export default CenterPage;
