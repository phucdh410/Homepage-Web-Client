import { ICFeaturedEvents } from "./types";

import "./styles.scss";

export const CFeaturedEvents: React.FC<ICFeaturedEvents> = ({ background }) => {
  return (
    <div className="pt-[130px]">
      <div className="pl-30px ">
        <div
          className={`pl-30px pt-12 font-serif4 text-40px font-bold text-sub border-l-4 border-[#D9D9D9] items-end flex ${
            background ? "background-event" : ""
          }`}
        >
          Sự kiện nổi bật
        </div>
      </div>
      <div className="px-30px mt-10 flex flex-col lg:flex-row gap-10 m-auto">
        <div className="max-w-[834px] w-full">
          <img
            src="/images/news4.png"
            alt=""
            className="object-cover"
            width={834}
            height={915}
          />
          <div>
            <div className="font-serif4 font-bold text-primary text-40px text-center  max-w-[570px] m-auto line-clamp-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div className="text-black text-16px text-center tracking-[.32px] line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra, risus non lobortis feugiat, eros nisi gravida libero, a
              laoreet velit enim a diam. Vestibulum fermentum, sapien vel
              pulvinar tempor, ligula justo vestibulum lectus, in iaculis elit
              leo sit amet eros. Mauris vitae purus neque. Maecenas rhoncus
              vulputate neque, vel dignissim odio lacinia gravida. Donec sed
              ullamcorper sapien. Suspendisse hendrerit velit id velit dapibus
              pretium. Vestibulum eu feugiat massa.
            </div>
          </div>
        </div>
        <div className="lg:flex flex-col grid grid-cols-2 gap-10 m-auto text-16px sm:text-25px font-serif4 text-primary text-center font-semibold">
          <div>
            <img
              src="/images/news5.png"
              alt=""
              className="object-cover mb-30px  m-auto"
            />

            <div className="  lg:min-h-[120px] line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div>
            <img
              src="/images/news5.png"
              alt=""
              className="object-cover mb-30px  m-auto"
            />

            <div className=" lg:min-h-[120px] line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
