import ErrorIcon from "@atlaskit/icon/glyph/error";
import PageHeader from "@atlaskit/page-header";
import React from "react";
import LayoutCenterPage from "./LayoutCenterPage";

const ErrorPage = () => {
  return (
    <LayoutCenterPage>
      <ErrorIcon label="Service unavailable" size="xlarge" />
      <PageHeader>{"Service unavailable"}</PageHeader>
    </LayoutCenterPage>
  );
};

export default ErrorPage;
