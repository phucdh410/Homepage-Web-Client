import { CSkeleton } from "@/common/components/others";

export const MLoadingCoopItem = () => {
  return (
    <div>
      <CSkeleton
        isImage
        className="rounded-15px aspect-[409/300] h-[250px] w-full object-cover mb-5"
      />
      <CSkeleton className="leading-26px mb-10px" />
      <CSkeleton className="text-[25px] mb-10px " />
      <CSkeleton className=" leading-26px" count={2} />
    </div>
  );
};
