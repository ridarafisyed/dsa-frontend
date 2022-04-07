/** @format */

import React, { Fragment } from "react";
import { Container, Typography } from "@mui/material";

import Header from "../components/Header/Header";
import About from "../components/About/About";
import Banner1 from "../components/Banners/Banner1";
import Banner2 from "../components/Banners/Banner2";
import Blogs from "../components/Blogs/Blogs";
import Feedback from "../components/Feedback/Feedback";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <Container>
      <section id="header">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="qoute">
        <Banner1 />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="appointment">
        <Banner2 />
      </section>
      {/* <section id="feedback">
        <Feedback />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
};

export default Home;
