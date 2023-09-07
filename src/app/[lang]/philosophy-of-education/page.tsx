import { MSubmenu } from "@/modules/introduction-submenu";
import { MPhilosophyEduPage } from "@/modules/philosophy-of-education";

const PhilosophyOfEducationPage = () => {
  return (
    <div>
      <div className="w-full min-h-[430px] bg-black"></div>

      <MSubmenu />

      <MPhilosophyEduPage />
      {/* <video src="/videos/mobile.mp4#t=1" controls></video> */}
    </div>
  );
};

export default PhilosophyOfEducationPage;
