import { MLead, MMembers } from "@/modules/council";
import { MSubmenu } from "@/modules/introduction-submenu";

const SchoolCouncil = () => {
  return (
    <div className="font-montserrat">
      <div className="w-full min-h-[430px] bg-black" />

      <MSubmenu />

      <div className="w-full max-w-container m-auto mb-20 px-4 md:px-30px">
        <MLead />

        <MMembers />
      </div>
    </div>
  );
};

export default SchoolCouncil;
