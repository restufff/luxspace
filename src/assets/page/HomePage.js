import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/HomePage/Sitemap";
import Clients from "../parts/Clients";

function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
    </>
  );
}

export default HomePage;
