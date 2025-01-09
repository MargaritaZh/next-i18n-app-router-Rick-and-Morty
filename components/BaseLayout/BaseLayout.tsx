import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { Header } from "../Header/Header";
import s from "./BaseLayout.module.css"

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className={s.container}>
      <Header />
      {children}
    </div>
  );
};
