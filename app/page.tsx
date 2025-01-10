"use client"

import Image from "next/image";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {

  return (
    <PageWrapper>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </PageWrapper>
  );
};

export default Home;
