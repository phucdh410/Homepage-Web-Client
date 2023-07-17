import { CFooter } from "./CFooter";
import { CHeader } from "./CHeader";
import { CMobileHeader } from "./CMobileHeader";

export const CMainLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <CHeader />
      <CMobileHeader />
      <main className="overflow-hidden">{children}</main>
      <CFooter />
    </>
  );
};
