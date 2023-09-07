import { CListMembers } from "@/common/components/others";

const MOCK = [
  {
    id: "1",
    name: "Chuyên viên",
    description:
      "Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra, risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit enim a diam. Estibulum fermentum, sapien vel pulvinar tempor",
    members: [
      { id: "1", name: "ThS. Trần Nhật Minh" },
      { id: "2", name: "ThS. Lê Hùng Cường" },
      { id: "3", name: "ThS. Võ Hoàng Quân" },
      { id: "4", name: "CN. Trương Phương Thanh" },
      { id: "5", name: "CN. Nguyễn Trung Kiên" },
      { id: "6", name: "CN. Võ Thị Như Trí" },
      { id: "7", name: "CN. Nguyễn Thị Mai Hương" },
      { id: "8", name: "ThS. Trần Nhật Minh" },
      { id: "9", name: "ThS. Phan Trọng Bình" },
      { id: "10", name: "ThS. Nguyễn Hữu Hiếu" },
      { id: "11", name: "ThS. Võ Phạm Trí Thiện" },
      { id: "12", name: "CN. Tạ Thị Thắng" },
      { id: "13", name: "CN. Lâm Duy Na" },
      { id: "14", name: "CN. Lê Hồng Quân" },
      { id: "15", name: "CN. Trương Quốc Thắng" },
      { id: "16", name: "ThS. Cao Lê Trúc" },
    ],
  },
  {
    id: "2",
    name: "Giáo viên",
    description:
      "Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra, risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit enim a diam. Estibulum fermentum, sapien vel pulvinar tempor",
    members: [
      { id: "1", name: "ThS. Trần Nhật Minh" },
      { id: "2", name: "ThS. Lê Hùng Cường" },
      { id: "3", name: "ThS. Võ Hoàng Quân" },
      { id: "4", name: "CN. Trương Phương Thanh" },
      { id: "5", name: "CN. Nguyễn Trung Kiên" },
      { id: "6", name: "CN. Võ Thị Như Trí" },
      { id: "7", name: "CN. Nguyễn Thị Mai Hương" },
      { id: "8", name: "ThS. Trần Nhật Minh" },
      { id: "9", name: "ThS. Phan Trọng Bình" },
      { id: "10", name: "ThS. Nguyễn Hữu Hiếu" },
      { id: "11", name: "ThS. Võ Phạm Trí Thiện" },
      { id: "12", name: "CN. Tạ Thị Thắng" },
      { id: "13", name: "CN. Lâm Duy Na" },
      { id: "14", name: "CN. Lê Hồng Quân" },
      { id: "15", name: "CN. Trương Quốc Thắng" },
      { id: "16", name: "ThS. Cao Lê Trúc" },
    ],
  },
];

export const MStaff = () => {
  return (
    <section className="mt-16">
      {MOCK.map((item) => (
        <CListMembers key={item.id} data={item} />
      ))}
    </section>
  );
};
