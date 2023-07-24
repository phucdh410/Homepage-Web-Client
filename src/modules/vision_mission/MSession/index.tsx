import { IMSessionProps } from "./types";

export const MSession: React.FC<IMSessionProps> = ({
  title,
  content,
  vision,
  img,
  id,
}) => {
  return (
    <div
      id={id}
      className="grid grid-cols-11 px-30px pt-50px pb-60px scroll-mt-[104px]"
    >
      <div className="md:col-span-3 col-span-11 text-left my-auto text-40px text-primary font-bold font-serif4">
        {title}
      </div>
      <div className="md:col-span-4 col-span-6 text-16px text-sub  my-auto">
        {content}
      </div>
      <div
        className={`md:col-span-4 col-span-5 ${
          vision && "pl-4 md:pl-16"
        } flex items-center `}
      >
        <img
          src={img}
          width={"100%"}
          height={"100%"}
          alt=""
          className={`object-cover my-auto ${vision && " rounded-[15px]"}`}
        />
      </div>
    </div>
  );
};
