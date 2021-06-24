import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/HomePage/Sitemap";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import useScrollAcnhor from "../helpers/hooks/useScrollAcnhor";
import useModalDOM from "../helpers/hooks/useModalDOM";

function HomePage(props) {
  useScrollAcnhor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}

export default HomePage;
