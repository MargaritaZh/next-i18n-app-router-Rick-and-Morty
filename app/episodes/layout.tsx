import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <BaseLayout>
      {/*обязательно передать children дальше*/}
      {children}
    </BaseLayout>
  );
};

export default Layout;