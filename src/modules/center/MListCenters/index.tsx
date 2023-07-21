import Link from "next-intl/link";

const MOCK = [
  { id: "1", name: "trung tâm tin học" },
  { id: "2", name: "trung tâm ngoại ngữ" },
  { id: "3", name: "trung tâm phát triển kỹ năng sư phạm" },
  { id: "4", name: "trường thpt thực hành" },
  { id: "5", name: "trung tâm stem" },
  { id: "6", name: "trung tâm thuận an" },
  { id: "7", name: "trung tâm hỗ trợ sinh viên và phát triển khởi nghiệp" },
  { id: "8", name: "trung tâm khảo thí" },
  { id: "9", name: "nhà xuất bản đại học sư phạm Tp. hồ chí minh" },
];

export const MListCenters = () => {
  return (
    <section className="container">
      <div
        className="flex items-center justify-between h-[720px] !bg-no-repeat !bg-cover !bg-[50% center] !text-white "
        style={{
          background:
            "linear-gradient(91deg, rgba(0, 0, 0, 0.00) 52.34%, rgba(0, 0, 0, 0.80) 100%), url('/images/centers.png'), lightgray 50% / cover no-repeat",
        }}
      >
        <div className="ml-10 max-w-xl">
          <h3 className="uppercase font-serif4 text-clamp-section-title font-bold mb-10px">
            trung tâm tiếng Pháp châu Á - Thái Bình Dương
          </h3>
          <p className="mb-[50px] tracking-[0.64px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            viverra, risus non lobortis feugiat, eros nisi gravida libero, a
            laoreet velit enim a diam. Vestibulum fermentum
          </p>
          <button className="rounded-10px backdrop-blur-[7.5px] bg-[rgba(255,_255,_255,_0.40)] py-4 px-20">
            <Link href="centers/123">Xem chi tiết</Link>
          </button>
        </div>
        <div className="bg-black p-5 mt-[104px] self-stretch overflow-y-hidden hover:overflow-y-scroll">
          <ul>
            {MOCK.map((e) => (
              <li
                key={e.id}
                className="mb-[15px] last:mb-0 max-w-[277px] p-10px uppercase text-right font-serif4 font-bold text-xl"
              >
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
