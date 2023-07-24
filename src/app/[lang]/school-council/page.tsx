import { MLead, MMembers } from "@/modules/council";

const SchoolCouncil = () => {
  return (
    <div className="font-montserrat">
      <div className="w-full h-[720px] bg-black"></div>
      <div className="w-full max-w-container m-auto px-4 md:px-30px">
        <MLead />

        <MMembers />
      </div>
    </div>
  );
};

export default SchoolCouncil;
