import { CMainLayout } from "@/common/components/layouts";
import { IPageProps } from "@/types/page";

import { montserrat, sourceSerif4 } from "../fonts";

import "./globals.css";

//#region Metadata
export const metadata = {
  title: "Cái web của tui",
  description: "Generated by create next app",
};
//#endregion

interface IRootLayoutProps extends IPageProps {
  children: React.ReactNode;
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  return (
    <html
      lang={params.lang}
      className={`${sourceSerif4.variable} ${montserrat.variable}`}
    >
      <body>
        <CMainLayout>{children}</CMainLayout>
      </body>
    </html>
  );
}
