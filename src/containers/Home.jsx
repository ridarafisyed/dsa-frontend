/** @format */

import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Banner1 from "../components/Banners/Banner1";
import Banner2 from "../components/Banners/Banner2";
import Blogs from "../components/Blogs/Blogs";
import Feedback from "../components/Feedback/Feedback";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Banner1 />
      <Services />
      <Blogs />
      <Banner2 />
      <Feedback />
    </Fragment>
  );
};

export default Home;
