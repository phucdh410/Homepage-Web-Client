import {
  MActivities,
  MContent,
  MDeanCommittee,
  MIntroAndTimeline,
  MQuality,
  MQualityTeacher,
  MSubjects,
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
    </div>
  );
};

export default DepartmentDetailPage;
