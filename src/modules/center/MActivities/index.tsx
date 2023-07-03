const MOCK1 = [
  {
    id: "1",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "2",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "3",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "4",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "5",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
];

const MOCK2 = [
  {
    id: "1",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "2",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "3",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "4",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
  {
    id: "5",
    name: "Danh sách sinh viên K38 và K39 nhận học bổng AMA học kì II năm học 2013-2014",
  },
];

export const MActivities = () => {
  return (
    <section className="mt-16">
      <h3 className="uppercase text-primary text-center font-bold text-[40px] font-serif4 mb-5">
        hoạt động
      </h3>
      <p className="m-auto text-center max-w-[610px] text-sub mb-12">
        Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra,
        risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit
        enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor
      </p>
      <div className="px-5 flex gap-10">
        <div className="flex-1">
          <h6 className="text-white font-bold font-serif4 px-5 py-3 bg-primary rounded-[15px]">
            Nghiên cứu khoa học
          </h6>
          <ul>
            {MOCK1.map((e, i) => (
              <li
                key={e.id}
                className="flex items-center gap-[10px] p-[10px] mb-[5px]"
              >
                <span className="font-raleway min-w-[30px] font-medium text-[32px] leading-[25px] text-primary-red">
                  {i + 1}.
                </span>
                <span className="text-sub2">{e.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h6 className="text-white font-bold font-serif4 px-5 py-3 bg-primary rounded-[15px]">
            Các giải thưởng
          </h6>
          <ul>
            {MOCK2.map((e, i) => (
              <li
                key={e.id}
                className="flex items-center gap-[10px] p-[10px] mb-[5px]"
              >
                <span className="font-raleway min-w-[30px] font-medium text-[32px] leading-[25px] text-primary-red">
                  {i + 1}.
                </span>
                <span className="text-sub2">{e.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
