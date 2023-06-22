import { CFooter } from "./CFooter";
import { CHeader } from "./CHeader";

export const CMainLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <CHeader />
      <main>{children}</main>
      <CFooter />
    </>
  );
};
