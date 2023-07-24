import { IMPersonInfoProps } from "./types";

export const MPersonInfo = ({ data }: IMPersonInfoProps) => {
  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <img src={data.image} alt="" className="object-cover rounded-2xl" />
      <div className="px-2 md:px-5">
        <div className="mb-2 md:mb-4 text-primary font-serif4 font-semibold text-xl">
          {data.name}
        </div>
        <div className="text-black text-16px font-normal">{data.position}</div>
      </div>
    </div>
  );
};
