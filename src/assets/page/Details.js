import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumbs";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import Sitemap from "../parts/HomePage/Sitemap";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";

function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}

export default Details;
