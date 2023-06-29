const MOCK_TIMELINE = [
  { id: "1", name: "khoa toán tin", time: "27/08/2010" },
  { id: "2", name: "khoa tin học", time: "27/08/2015" },
  { id: "3", name: "khoa công nghệ thông tin", time: "04/10/2022" },
];

import "./styles.scss";

export const MIntroAndTimeline = () => {
  return (
    <div className="mt-48 department-detail">
      <img
        src="/images/khoa/cntt.png"
        alt=""
        className="m-auto aspect-square w-[194px] mb-10"
      />
      <h3 className="uppercase text-primary text-center font-serif4 text-[40px] font-bold mb-[10px]">
        khoa công nghệ thông tin
      </h3>
      <p className="text-center text-primary-red font-serif4 font-bold text-[25px] mb-24">
        Năng động - Hiện đại - Sáng tạo
      </p>

      <div className="rounded-[10px] mb-32 horizontal-timeline relative h-[5px] w-full bg-[linear-gradient(90deg,_rgba(207,_55,_61,_0.00)_0%,_#CF373D_49.94%,_rgba(207,_55,_61,_0.00)_100%)]">
        <div
          className="flex w-full items-center justify-evenly absolute"
          // Do các node timeline có height: 31px & đường timeline height: 5px
          // Nên vùng chứa node phải translateY = -1 * (heightNode - timelineHeight) / 2
          style={{ transform: "translateY(calc(-1 * (31px - 5px) / 2))" }}
        >
          {MOCK_TIMELINE.map((e) => (
            <div
              key={e.id}
              className="timenode relative h-[31px] w-[31px] bg-primary rounded-full"
            >
              <p
                className="absolute -top-10 left-1/2 whitespace-nowrap font-bold text-lg text-primary font-serif4"
                style={{ transform: "translateX(-50%)" }}
              >
                {e.time}
              </p>
              <p
                className="absolute -bottom-10 left-1/2 whitespace-nowrap uppercase font-bold text-lg text-primary font-serif4"
                style={{ transform: "translateX(-50%)" }}
              >
                {e.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
