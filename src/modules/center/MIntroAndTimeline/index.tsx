const MOCK_TIMELINE = [
  { id: "1", name: "phòng giáo vụ", time: "27/08/2010" },
  { id: "2", name: "phòng đào tạo", time: "27/08/2015" },
];

import { CNodeTimeline } from "@/common/components/others";

export const MIntroAndTimeline = () => {
  return (
    <div className="mt-28 md:-mt-36 lg:mt-48 department-detail">
      <img
        src="/images/khoa/cntt.png"
        alt=""
        className="m-auto aspect-square w-[194px] mb-10"
      />
      <h3 className="uppercase text-primary text-center font-serif4 text-clamp-section-title font-bold mb-10px">
        Trung tiếng pháp châu á - thái bình dương
      </h3>
      <p className="text-center text-primary-red font-serif4 font-bold text-[25px] mb-24">
        Subtitle goes hereeee!
      </p>

      <CNodeTimeline timelines={MOCK_TIMELINE} />
    </div>
  );
};
