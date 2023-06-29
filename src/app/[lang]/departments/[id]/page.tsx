import {
  MContent,
  MIntroAndTimeline,
  MQuality,
} from "@/modules/department-detail";

const DepartmentDetailPage = () => {
  return (
    <div className="container">
      <MIntroAndTimeline />

      <MContent />

      <MQuality />
    </div>
  );
};

export default DepartmentDetailPage;
