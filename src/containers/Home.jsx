/** @format */

import React, { Fragment } from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Banner1 from "../components/banners/Banner1";
import Banner2 from "../components/banners/Banner2";
import Blogs from "../components/blogs/Blogs";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Banner1 />
      <Blogs />
      <Banner2 />
    </Fragment>
  );
};

export default Home;
