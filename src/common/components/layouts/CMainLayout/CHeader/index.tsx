"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CLanguageIcon } from "@/common/components/icons";

import "./styles.scss";

//#region MOCK
const MOCK = [
  { id: "1", name: "Tân sinh viên", link: "/" },
  { id: "2", name: "Alumni HCMUE", link: "/" },
  { id: "3", name: "ETEP", link: "/" },
  { id: "4", name: "Phân hiệu Long An", link: "/" },
  { id: "5", name: "Phân hiệu Gia Lai", link: "/" },
];

const MOCK1 = [
  { id: "1", name: "Trang chủ", link: "" },
  { id: "2", name: "Giới thiệu", link: "/introduction" },
  { id: "3", name: "Tin tức - Sự kiện", link: "/news" },
  { id: "4", name: "Tuyển sinh", link: "/employ" },
  { id: "5", name: "Đào tạo", link: "/training" },
  { id: "6", name: "Nghiên cứu", link: "/research" },
  { id: "7", name: "Bảo đảm chất lượng giáo dục", link: "/ensure" },
  { id: "8", name: "Hợp tác và phục vụ cộng đồng", link: "/coop" },
];
//#endregion

export const CHeader = () => {
  //#region Data
  const pathname = usePathname();
  //#endregion

  //#region Event
  const isActive = (path: string) => {
    return pathname.replace("/vi", "").replace("/en", "") === path;
  };
  //#endregion

  //#region Render
  return (
    <header className="fixed z-10 top-0 w-full h-header hidden xl:block">
      <div className="container">
        <div className="flex px-[10rem] py-[7px] bg-[#124874] items-center justify-between">
          <ul className="flex items-center gap-10 text-white">
            {MOCK.map((e) => (
              <li key={e.id}>
                <Link href={e.link}>{e.name}</Link>
              </li>
            ))}
          </ul>
          <button>
            <CLanguageIcon />
          </button>
        </div>
        <div
          className="flex px-[2rem] py-[8px] items-center gap-5"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.2) 53.37%, rgba(255, 255, 255, 0.06) 100%)",
            boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <img src="/images/logo.png" alt="" />
          <ul className="flex items-center gap-6 text-white font-serif4">
            {MOCK1.map((e) => (
              <li key={e.id}>
                <Link
                  href={e.link || "/"}
                  className={isActive(e.link) ? "activated font-bold" : ""}
                >
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
  //#endregion
};
