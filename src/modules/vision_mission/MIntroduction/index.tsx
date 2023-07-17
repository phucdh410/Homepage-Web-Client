export const MIntroduction = () => {
  return (
    <div className="px-30px relative sm:flex h-full">
      <div className="bg-bg py-6 px-30px w-auto max-w-[650px]  lg:mt-[-103px] h-full">
        <div className="text-sub text-xs mb-10px">Giới thiệu</div>
        <div className="text-primary font-bold text-40px font-serif4">
          Tầm nhìn, Sứ mạng, &{" "}
          <span className="lg:whitespace-nowrap"> Giá trị cốt lõi</span>
        </div>
        <div className="mt-[26px] text-16px text-sub flex flex-col gap-[10px]">
          <div className="text-red font-bold">Đi đến:</div>
          <div>Tầm nhìn</div>
          <div>Sứ mạng</div>
          <div>Giá trị cốt lõi</div>
        </div>
      </div>
      <div className="bg-white py-6 px-30px lg:absolute right-[30px] w-auto sm:max-w-[60%] bottom-0 top-0">
        <div className="text-primary mb-5 text-25px font-serif4 lg:line-clamp-2">
          Lorem ipsum dolor sit amet, coonsectetur adipiscing elit. Nulla
          viverra risus non lobortis feugiat, eros nisi
        </div>
        <div className="text-16px lg:line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          viverra, risus non lobortis feugiat, eros nisi gravida libero, a
          laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar
          tempor, ligula justo vestibulum lectus, in iaculis elit leo sit amet
          eros. Mauris vitae purusv
        </div>
      </div>
    </div>
  );
};
