import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import {
  CFacebookIcon,
  CGoogleIcon,
  CInstagramIcon,
  CLinkedinIcon,
  CTwitterIcon,
  CYoutubeIcon,
} from "@/common/components/icons";

const ADDRESS_MOCK = [
  {
    id: "1",
    name: "280 An Dương Vương, Phường 4, Quận 5, Thành phố Hồ Chí Minh.",
  },
  {
    id: "2",
    name: "222 Lê Văn Sỹ, Phường 14, Quận 3, Thành phố Hồ Chí Minh.",
  },
  {
    id: "3",
    name: "351A Lạc Long Quân, Phường 5, Quận 11, Thành phố Hồ Chí Minh.",
  },
  {
    id: "4",
    name: "115 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.",
  },
  {
    id: "5",
    name: "Á Nơ Trang Long, Phường 13, Quận Bình Thạnh, Thành phố Hồ Chí Minh.",
  },
  {
    id: "6",
    name: "B43 Khu phố Bình Đức 2, Phường Lái Thiêu, Thành phố Thuận An, Tỉnh Bình Dương.",
  },
];

const MOCK = [
  {
    id: "1",
    name: "Giới thiệu về trường",
    list: [
      { name: "Giới thiệu về Trường" },
      { name: "Tầm nhìn - Sứ mạng" },
      { name: "Triết lý giáo dục" },
      { name: "Cơ cấu giáo dục" },
      { name: "Chỉ đường" },
    ],
  },
  {
    id: "2",
    name: "Viên chức & Người lao động",
    list: [
      { name: "Lịch công tác" },
      { name: "Thông báo" },
      { name: "E-Office" },
      { name: "Webmail" },
    ],
  },
  {
    id: "3",
    name: "Người học",
    list: [
      { name: "Đăng ký học phần" },
      { name: "Thanh toán học phí" },
      { name: "Chấm điểm rèn luyện" },
      { name: "Webmail" },
      { name: "Chuyên trang hoạt động Đoàn - Hội" },
      { name: "Đăng ký giấy chứng nhận" },
      { name: "Đào tạo trực tuyến - VLE" },
    ],
  },
  {
    id: "4",
    name: "Cựu người học",
    list: [{ name: "Alumni HCMUE" }, { name: "Fanpage" }],
  },
  {
    id: "5",
    name: "Khách",
    list: [
      { name: "Báo cáo Ba công khai" },
      { name: "Liên hệ" },
      { name: "Phản hồi" },
    ],
  },
];

const SOCIAL_BUTTONS = [
  { id: "1", icon: <CFacebookIcon />, href: "https://facebook.com" },
  { id: "2", icon: <CTwitterIcon />, href: "https://twitter.com" },
  { id: "3", icon: <CLinkedinIcon />, href: "https://linkedin.com" },
  { id: "4", icon: <CGoogleIcon />, href: "https://google.com" },
  { id: "5", icon: <CYoutubeIcon />, href: "https://youtube.com" },
  { id: "6", icon: <CInstagramIcon />, href: "https://instagram.com" },
];

export const CFooter = () => {
  //#region Data
  const d = useTranslations("footer");
  //#endregion
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="bg-white rounded-t-[20px] p-30px pb-3 flex flex-col md:flex-row shadow-custom">
          <div className="mb-5 md:mb-0 md:mr-5 xl:mr-[50px] basis-1/3 md:basis-1/2 lg:basis-1/3">
            <div className="flex items-center gap-[15px] md:gap-2 lg:gap-[15px] mb-3">
              <img src="/images/logo.png" alt="" className="" />
              <h6 className="uppercase text-primary font-serif4 font-bold select-none">
                trường đại học sư phạm <br /> thành phố hồ chí minh
              </h6>
            </div>
            <p className="text-sub text-sm">{d("address")}:</p>
            <ul className="list-disc py-2 px-5">
              {ADDRESS_MOCK.map((e, i) => (
                <li key={e.id}>
                  {`${d("base")} ${i + 1}: `}
                  <span>
                    <Link
                      href={`https://google.com/maps/place/${e.name}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="cursor-[url('/icons/location.png')_10_17,_auto] hover:underline"
                    >
                      {e.name}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sub text-sm mb-10px">
              {d("phone")}: (+84) - (28) - 38352020
            </p>
            <p className="text-sub text-sm mb-3">
              Fax: (+84) - (28) - 38398946
            </p>
            <div className="h-[1px] bg-primary opacity-10 min-w-full" />
            <h6 className="text-primary font-bold font-serif4 mb-5 pt-3 select-none">
              {d("connect-with-us")}:
            </h6>
            <ul className="flex items-center gap-30px mb-3">
              {SOCIAL_BUTTONS.map((e) => (
                <li key={e.id} className="hover:scale-150 transition-all">
                  <Link href={e.href} target="_blank" rel="noopener noreferrer">
                    {e.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:basis-1/2 lg:basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-3 lg:gap-2 xl:gap-5">
            {MOCK.map((e) => (
              <div key={e.id}>
                <h6 className="text-primary font-serif4 font-bold h-6 md:h-[44px] mb-10px select-none">
                  {e.name}
                </h6>
                <ul>
                  {e.list.map((el, i) => (
                    <li key={i} className="text-sm text-sub mb-10px last:mb-0">
                      <a href="">{el.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <img
        src="/images/footer-banner.png"
        alt=""
        className="w-full h-auto object-cover"
      /> */}
    </footer>
  );
};
