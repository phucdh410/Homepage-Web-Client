"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { CButton } from "@/common/components/controls";
import { delay } from "@/utils/funcs";

import { MLoadingCoopItem } from "./loading";
import { MCoopItem } from "./MCoopItem";
import { IMListProps } from "./types";

const MAX_TOTAL = 20;

const TABS = [
  { id: 0, name: "Tất cả" },
  { id: 1, name: "Hợp tác trong nước" },
  { id: 2, name: "Hợp tác quốc tế" },
];

const MOCK = [
  {
    id: 1,
    name: "Dịch vụ SEO",
    description:
      "Hình thức MKT tạo ROI cao nhất, chi phí chỉ vài chục triệu, giá trị cao bền vững",
  },
  {
    id: 2,
    name: "Remarketing Ads",
    description: "Tăng doanh số với chi phí thấp",
  },
  {
    id: 3,
    name: "Tối ưu Website chuyển đổi khách hàng",
    description: "Chiến lược bài bản, phương pháp hiện đại",
  },
  {
    id: 4,
    name: "Quản lý điều hành các kênh Mạng Xã Hội",
    description: "Đội ngũ riêng, hiểu rõ nền tảng social",
  },
  {
    id: 5,
    name: "Các gói đồng hành chăm sóc website toàn diện",
    description: "Tối ưu chất lượng, tỷ lệ chuyển đổi cao",
  },
  {
    id: 6,
    name: "Xây dựng chiến lược Email Marketing",
    description:
      "Tiếp cận khách hàng mục tiêu, tăng nhận diện, gắn kết với khách hàng",
  },
  {
    id: 7,
    name: "Multi - Platform Ads - Quản lý quảng cáo đa nền tảng",
    description: "Google, Facebook, Zalo, Tiktok, Youtube,...",
  },
];
const MOCK2 = [
  {
    id: 1,
    name: "Câu chuyện thành công của 300+ doanh nghiệp",
  },
  { id: 2, name: "Câu chuyện Mona - 3 năm thống lĩnh 3 ngành hàng" },
  { id: 3, name: "Vì sao cần làm SEO/Digital MKT?" },
  { id: 4, name: "Chọn marketing inhouse hay Agency" },
];

export const MUi = ({ data }: IMListProps) => {
  //#region Data
  const d = useTranslations("global");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const tab = searchParams.get("tab");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentTab, setCurrentTab] = useState<-0 | 1 | 2>(
    tab ? (Number(tab) as 0 | 1 | 2) : 0
  );
  const [page, setPage] = useState<number>(1);

  const _data = useMemo(() => {
    if (currentTab === 0) return data;
    else if (currentTab === 1) return data.filter((e) => e.type === 1);
    else if (currentTab === 2) return data.filter((e) => e.type === 2);
  }, [data, currentTab]);
  //#endregion

  //#region Event
  const onTabChange = (newTab: number) => {
    setCurrentTab(newTab as 0 | 1 | 2);
    setPage(1);

    router.replace(`${pathname}?tab=${newTab}`);
  };

  const onLoadMore = async () => {
    setIsLoading(true);
    delay(() => {
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 3000);
  };
  //#endregion

  useEffect(() => {
    if (!pathname.includes("?tab=")) {
      router.replace(`${pathname}?tab=${currentTab}`);
    }
  }, [pathname, currentTab, router]);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const onMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    overlayRef.current?.classList.add("active");
    const currentItem = e.currentTarget.getBoundingClientRect();

    if (overlayRef.current) {
      overlayRef.current.style.top = currentItem.top + "px";
      overlayRef.current.style.left = currentItem.left + "px";
      overlayRef.current.style.height = currentItem.height + "px";
      overlayRef.current.style.width = currentItem.width + "px";
    }

    e.currentTarget.classList.add("active");
  };

  const onMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    overlayRef.current?.classList.remove("active");
    e.currentTarget.classList.remove("active");
  };

  //#region Render
  return (
    <section className="mt-16">
      <div className="container">
        <div className="rounded-10px p-6 bg-[#F8F1FE] flex gap-5 max-w-[1072px] divide-x">
          <div className="flex-1 shrink-0">
            <h4 className="font-semibold text-[#5f5f5f] mb-3">Dịch vụ chính</h4>
            <div
              ref={overlayRef}
              className="overlay absolute opacity-0 transition-all duration-300 [&.active]:opacity-100 z-1 bg-white rounded-10px"
            ></div>
            <div className="grid grid-cols-2">
              {MOCK.map((item, i) => (
                <div
                  key={item.id}
                  className="p-4 max-w-[440px] z-10 [&.active>h3]:text-[#F41E92]"
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                >
                  <h3 className="font-semibold text-[#3a3a3a] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#8b8b8b]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-white pl-4 max-w-[350px]">
            <h4 className="font-semibold text-[#5f5f5f] mb-3">
              Các nội dung liên quan khác
            </h4>
            <ul className="list-disc list-inside marker:text-[#F41E92] mb-8">
              {MOCK2.map((item) => (
                <li key={item.id} className="py-2 whitespace-pre-wrap">
                  {item.name}
                </li>
              ))}
            </ul>
            <img
              src="https://mona.media/template/assets/images/header/mega-menu-banner-10.jpg"
              alt=""
              className="rounded-10px"
            />
          </div>
        </div>

        {/* <div className="max-w-2xl m-auto mb-10 px-5">
          <h2 className="text-center mb-10px uppercase text-primary text-clamp-home-section-title leading-48px font-extrabold font-serif4 ">
            hợp tác và phục vụ cộng đồng
          </h2>
          <p className="text-center text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mx-2 lg:mx-5 2xl:mx-10">
          <Tab.Group selectedIndex={currentTab} onChange={onTabChange}>
            <Tab.List className="flex flex-col md:flex-row items-center gap-8 mb-12">
              {TABS.map((tab) => (
                <Tab key={tab.id} as={Fragment}>
                  {({ selected }) => (
                    <button className="relative bg-[#f5f5f5] hover:bg-[#51a2f821] outline-none min-w-[189px] rounded-10px px-5 py-2 font-bold font-serif4`">
                      <span
                        className={classNames(
                          selected ? "text-white" : " text-primary",
                          "z-10 relative transition-colors duration-500"
                        )}
                      >
                        {tab.name}
                      </span>
                      {selected && (
                        <motion.span
                          layoutId="bubble"
                          className="absolute rounded-inherit inset-0 z-1 !bg-primary"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.5,
                          }}
                        />
                      )}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 mb-20">
            {_data &&
              _data.length > 0 &&
              _data.map((item) => <MCoopItem key={item.id} data={item} />)}
            {isLoading &&
              Array(3)
                .fill("")
                .map((e, i) => (
                  <MLoadingCoopItem key={i.toString() + new Date().toString} />
                ))}
          </div>

          <div className="text-center mb-20">
            {_data?.length === MAX_TOTAL ? (
              <div className="inline-block text-2xl px-10 py-3 select-none font-semibold rounded-xl  text-primary">
                {d("full-download-more")}
              </div>
            ) : (
              <CButton
                disabled={isLoading}
                className="rounded-10px bg-primary text-white py-4 px-5 min-w-[189px] font-bold font-serif4"
                onClick={onLoadMore}
              >
                {`${d("download-more")}${isLoading ? " ..." : ""}`}
              </CButton>
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
  //#endregion
};
