import Link from "next/link";

const MOCK = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
];

export const MTraining = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <div className="max-w-2xl m-auto mb-10">
          <h2 className="text-center mb-[10px] uppercase text-primary text-[35px] leading-[48px] font-extrabold font-serif4 ">
            đào tạo
          </h2>
          <p className="text-center text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-wrap mb-10 bg-white relative m-auto items-baseline justify-between p-5 rounded-20px max-w-[850px]">
          <div className="shadow-[15px_15px_60px_rgba(19,70,131,0.1)] absolute rounded-inherit inset-0"></div>
          <div className="w-[130px] text-center">
            <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
              25
            </h3>
            <p className="text-[16px] leading-[20px] text-sub font-montserrat">
              Giáo sư
            </p>
          </div>
          <div className="w-[130px] text-center">
            <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
              25
            </h3>
            <p className="text-[16px] leading-[20px] text-sub font-montserrat">
              Phó giáo sư
            </p>
          </div>
          <div className="w-[130px] text-center">
            <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
              175
            </h3>
            <p className="text-[16px] leading-[20px] text-sub font-montserrat">
              Tiến sĩ
            </p>
          </div>
          <div className="w-[130px] text-center">
            <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
              335
            </h3>
            <p className="text-[16px] leading-[20px] text-sub font-montserrat">
              Thạc sĩ
            </p>
          </div>
          <div className="w-[130px] text-center">
            <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
              150
            </h3>
            <p className="text-[16px] leading-[20px] text-sub font-montserrat">
              Chuyên gia quốc tế
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {MOCK.map((e, i) =>
            i === 0 ? (
              <div
                key={e.id}
                className="col-span-3 rounded-10px grid grid-cols-2"
              >
                <div className="p-5 bg-white rounded-l-inherit relative">
                  <p className="uppercase text-sm text-sub2 mb-[10px]">
                    Đại học chính quy
                  </p>
                  <h4 className="text-primary font-serif4 text-xl mb-5 line-clamp-3 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h4>
                  <p className="line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <Link
                    href="/"
                    className="text-primary absolute bottom-[calc(0px_+_20px)] right-[calc(0px_+_20px)]"
                  >
                    Xem thêm
                  </Link>
                </div>
                <img
                  className="rounded-r-inherit"
                  src="/images/training1.png"
                  alt=""
                />
              </div>
            ) : (
              <div key={e.id} className="bg-white rounded-10px">
                <div className="p-5">
                  <p className="uppercase text-sm text-sub2 mb-[10px]">
                    Đại học chính quy
                  </p>
                  <h4 className="text-primary font-serif4 text-xl line-clamp-3 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h4>
                </div>

                <img
                  src="/images/training2.png"
                  alt=""
                  className="w-full aspect-training-sub object-cover rounded-b-inherit"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
