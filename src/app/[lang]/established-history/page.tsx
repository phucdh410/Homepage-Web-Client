import { MTimeline } from "@/modules/established-history";
import { MSubmenu } from "@/modules/introduction-submenu";

const EstablishedHistoryPage = () => {
  return (
    <>
      <div className="bg-black w-full min-h-[430px]">Banner</div>

      <MSubmenu />

      <MTimeline />
    </>
  );
};

export default EstablishedHistoryPage;
