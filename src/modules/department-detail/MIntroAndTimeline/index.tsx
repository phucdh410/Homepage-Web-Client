import { CNodeTimeline } from "@/common/components/others";

const MOCK_TIMELINE = [
  { id: "1", name: "khoa toán tin", time: "27/08/2010" },
  { id: "2", name: "khoa tin học", time: "27/08/2015" },
  { id: "3", name: "khoa công nghệ thông tin", time: "04/10/2022" },
];

export const MIntroAndTimeline = () => {
  return (
    <div className="mt-48 department-detail">
      <img
        src="/images/khoa/cntt.png"
        alt=""
        className="m-auto aspect-square w-[194px] mb-10"
      />
      <h3 className="uppercase text-primary text-center font-serif4 text-clamp-section-title font-bold mb-[10px]">
        khoa công nghệ thông tin
      </h3>
      <p className="text-center text-primary-red font-serif4 font-bold text-[25px] mb-24">
        Năng động - Hiện đại - Sáng tạo
      </p>

      <CNodeTimeline timelines={MOCK_TIMELINE} />
    </div>
  );
};
