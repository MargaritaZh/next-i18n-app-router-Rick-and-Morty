"use client"

import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "pages/_app";

const Custom404: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <h1>404 - Page Not Found</h1>;
    </PageWrapper>
  );
};

export default Custom404;

