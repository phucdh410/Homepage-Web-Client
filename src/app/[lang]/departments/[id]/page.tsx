import {
  MActivities,
  MContent,
  MDeanCommittee,
  MIntroAndTimeline,
  MQuality,
  MQualityTeacher,
  MSubjects,
  MTimelineTag,
  MTrainingDisciplines,
  MTrainingGoal,
} from "@/modules/department-detail";

const DepartmentDetailPage = () => {
  return (
    <div className="container">
      <MIntroAndTimeline />

      <MContent />

      <MQuality />

      <MQualityTeacher />

      <MTrainingGoal />

      <MTrainingDisciplines />

      <MDeanCommittee />

      <MSubjects />

      <MActivities />

      <MTimelineTag />
    </div>
  );
};

export default DepartmentDetailPage;
