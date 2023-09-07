import {
  MActivities,
  MContent,
  MDeanCommittee,
  MFunctionsAndMissions,
  MIntroAndTimeline,
  MStaff,
} from "@/modules/center";
import { MTimelineTag } from "@/modules/department-detail";

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
