import Link from "next-intl/link";

import { ICMenuItemProps } from "./types";

export const CMenuItem = ({ data }: ICMenuItemProps) => {
  return data?.children ? (
    <>
      <Link href={data.link || ""}>{data.name}</Link>
      <ul className="ml-5 mb-3 pt-2 font-normal">
        {data.children.map((e) => (
          <li key={e.id} className="mb-2 last:mb-0">
            {e.children ? (
              <CMenuItem data={e} />
            ) : (
              <Link href={e.link || ""}>{e.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <Link href={data.link || ""}>{data.name}</Link>
  );
};
