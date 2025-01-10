import { Metadata, NextPage } from "next";
import { PropsWithChildren } from "react";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";

export const metadata:Metadata={
  //название нашей странички в браузере
  title:"Characters",
  description:"jjherjgnrjnh"
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <BaseLayout>
      {/*обязательно передать children дальше*/}
      {children}
    </BaseLayout>
  );
};

export default Layout;