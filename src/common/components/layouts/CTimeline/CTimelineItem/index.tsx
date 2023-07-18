export const CTimelineItem = () => {
  return (
    <div className="grid grid-cols-11 timeline-item w-full h-full">
      <div className="flex md:justify-between justify-center w-full order-1 info col-span-5">
        <div className="md:flex hidden avatar">
          <div className="w-32 h-32 p-2">
            <img
              src="/images/avatar.png"
              width={"111px"}
              height={"111px"}
              alt=""
              className="object-cover "
            />
          </div>
        </div>
        <div className="h-max rounded-30px text-white text-16px font-semibold uppercase font-montserrat bg-red py-4 px-30px">
          10/2020 - Nay
        </div>
      </div>
      <div className="col-span-1 dot flex justify-center z-10">
        <div className="bg-primary flex justify-center items-center">
          <span className="bg-white content-'' w-4 h-4 rounded-full z-20 block"></span>
        </div>
      </div>
      <div className="col-span-5 description flex">
        <div className="rounded-30px overflow-hidden bg-white h-max w-max text-16px">
          <div className="bg-primary rounded-b-10px px-30px py-4 font-serif4 font-bold text-white">
            Trưởng khoa: TS. Nguyễn Viết Hưng
          </div>
          <div className="flex flex-col gap-4 px-30px py-5 bg-white shadow-xl font-montserrat text-des content">
            <div>Phó Trưởng khoa: TS. Nguyễn Viết Hưng</div>
            <div>Phó Trưởng khoa: ThS. Trịnh Huy Hoàng</div>
          </div>
        </div>
      </div>
    </div>
  );
};
