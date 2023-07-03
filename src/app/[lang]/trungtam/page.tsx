import {
  MActivities,
  MContent,
  MDeanCommittee,
  MFunctionsAndMissions,
  MIntroAndTimeline,
} from "@/modules/center";

const TrungTamPage = () => {
  return (
    <div className="container">
      <MIntroAndTimeline />

      <MContent />

      <MFunctionsAndMissions />

      <MDeanCommittee />

      <MActivities />
    </div>
  );
};

export default TrungTamPage;
