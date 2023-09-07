import { CDetailAndBlackSide } from "@/common/components/others";

const MOCK = [
  {
    id: "1",
    name: "thư viện",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "1.5",
    name: "tổ chức hành chính",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "2",
    name: "kế hoạch - tài chính",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "3",
    name: "công tác chính trị & học sinh sinh viên",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "4",
    name: "hợp tác quốc tế",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "5",
    name: "đào tạo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "6",
    name: "sau đại học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "7",
    name: "thanh tra đào tạo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "8",
    name: "ký túc xá",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
  {
    id: "9",
    name: "khảo thí & đảm bảo chất lượng",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/line-department/123",
  },
];

export const MListDepartments = () => {
  return (
    <CDetailAndBlackSide
      data={MOCK}
      backgroundImage="/images/phongbanchucnang.png"
    />
  );
};
