import React from "react";
import PageErrorMessage from "../parts/PageErrorMessage";

import Header from "../parts/Header";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";

function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}

export default NotFound;
