import { CELearningIcon, CSmartLibraryIcon } from "@/common/components/icons";

export const MCooperation = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <div className="max-w-2xl m-auto mb-10">
          <h2 className="text-center mb-[10px] uppercase text-primary text-[35px] leading-[48px] font-extrabold font-serif4 ">
            hợp tác và phục vụ cộng đồng
          </h2>
          <p className="text-center text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10 mb-28">
          <div className="basis-1/2 rounded-20px relative shadow-custom">
            <img
              src="/images/coop.png"
              alt=""
              className="aspect-coop w-full object-cover rounded-inherit"
            />
            <div className="absolute w-full bottom-0 bg-white text-center p-[15px] rounded-b-inherit">
              <h5 className="text-primary font-serif4 text-xl uppercase font-bold rounded-b-inherit">
                hợp tác trong nước
              </h5>
            </div>
          </div>
          <div className="basis-1/2 rounded-20px relative shadow-custom">
            <img
              src="/images/coop.png"
              alt=""
              className="aspect-coop w-full object-cover rounded-inherit"
            />
            <div className="absolute w-full bottom-0 bg-white text-center p-[15px] rounded-b-inherit">
              <h5 className="text-primary font-serif4 text-xl uppercase font-bold rounded-b-inherit">
                hợp tác quốc tế
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/images/ensure.png')] bg-no-repeat bg-center bg-cover p-12 mb-24">
        <div className="max-w-2xl m-auto mb-10">
          <h2 className="text-center mb-[10px] uppercase text-white text-[35px] leading-[48px] font-extrabold font-serif4 ">
            bảo đảm chất lượng giáo dục
          </h2>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10 max-w-[892px] m-auto">
          <div className="basis-1/2 rounded-20px flex flex-col items-center justify-between gap-5 py-5 px-4 shadow-custom bg-white">
            <h5 className="text-primary text-3xl font-serif4 font-bold text-center leading-10">
              Kiểm định cấp
              <br />
              Cơ sở đào tạo
            </h5>
            <p className="text-sub text-center px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <button className="text-white bg-primary rounded-[15px] px-5 py-3">
              Xem thêm
            </button>
          </div>
          <div className="basis-1/2 rounded-20px flex flex-col items-center justify-between gap-5 py-5 px-4 shadow-custom bg-white">
            <h5 className="text-primary text-3xl font-serif4 font-bold text-center leading-10">
              Kiểm định cấp
              <br />
              Chương trình đào tạo
            </h5>
            <p className="text-sub text-center px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <button className="text-white bg-primary rounded-[15px] px-5 py-3">
              Xem thêm
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 max-w-[892px] m-auto min-h-[321px]">
        <div className="basis-1/2 min-h-[inherit] rounded-20px flex flex-col items-center justify-center gap-5 py-5 px-4 shadow-custom bg-white">
          <CSmartLibraryIcon />
          <h5 className="font-serif4 font-bold text-primary text-3xl text-center">
            Smart Library
          </h5>
          <p className="text-sub text-center px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="basis-1/2 min-h-[inherit] rounded-20px flex flex-col items-center justify-center gap-5 py-5 px-4 shadow-custom bg-white">
          <CELearningIcon />
          <h5 className="font-serif4 font-bold text-primary-red text-3xl text-center">
            E-Learning
          </h5>
          <p className="text-sub text-center px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </section>
  );
};
