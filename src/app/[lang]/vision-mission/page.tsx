import { CFeaturedEvents } from "@/common/components/layouts";
import { MIntroduction, MMission, MSession } from "@/modules/vision_mission";

const vision = {
  title: "Tầm nhìn",
  content:
    "Đến năm 2030, Trường Đại học Sư phạm Thành phố Hồ Chí Minh trở thành Trường Đại học Sư phạm trọng điểm Quốc gia, có uy tín cao trong toàn quốc, ngang tầm với các cơ sở đào tạo trong khu vực Đông Nam Á; là cơ sở giáo dục đại học ảnh hưởng và góp phần vào sự phát triển của các cơ sở đào tạo giáo viên của khu vực phía Nam cũng như của cả nước; là nơi hội tụ đội ngũ nhà khoa học và các chuyên gia, giảng viên có trình độ, nghiệp vụ cao; đảm bảo các điều kiện đào tạo, nghiên cứu khoa học chuyên nghiệp, đảm bảo cho hoạt động nghiên cứu và đào tạo đạt chất lượng cao, người học khi tốt nghiệp có đủ năng lực làm nghề thực tiễn, thích ứng nhanh, sáng tạo và không ngừng phát triển.",
  img: "/images/visson.png",
};

const mission = {
  title: "Giá trị cốt lõi",
  content:
    "CHẤT LƯỢNG - SÁNG TẠO - NHÂN VĂN   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus, in iaculis elit leo sit amet eros. Mauris vitae purus",
  img: "/images/mission.png",
};

const VisonAndMission = () => {
  return (
    <div className="font-montserrat">
      <div className="w-full h-[720px] bg-black"></div>
      <div className="w-full max-w-container m-auto">
        <MIntroduction />
        <MSession
          vision
          title={vision.title}
          content={vision.content}
          img={vision.img}
        />
        <MMission />
        <MSession
          vision={false}
          title={mission.title}
          content={mission.content}
          img={mission.img}
        />
        <CFeaturedEvents />
      </div>
    </div>
  );
};

export default VisonAndMission;
