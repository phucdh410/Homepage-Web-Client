import { CDetailAndBlackSide } from "@/common/components/others";

const MOCK = [
  {
    id: "1",
    name: "trung tâm tiếng Pháp châu Á - Thái Bình Dương",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "1.5",
    name: "trung tâm tin học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "2",
    name: "trung tâm ngoại ngữ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "3",
    name: "trung tâm phát triển kỹ năng sư phạm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "4",
    name: "trường thpt thực hành",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "5",
    name: "trung tâm stem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "6",
    name: "trung tâm thuận an",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "7",
    name: "trung tâm hỗ trợ sinh viên và phát triển khởi nghiệp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "8",
    name: "trung tâm khảo thí",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
  {
    id: "9",
    name: "nhà xuất bản đại học sư phạm Tp. hồ chí minh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/centers-and-institutes/123",
  },
];

export const MListCenters = () => {
  return (
    <CDetailAndBlackSide data={MOCK} backgroundImage="/images/centers.png" />
  );
};
