/** @format */

import { Container } from "@mui/material";
import React, { Fragment } from "react";
import { ScopedCssBaseline } from "@mui/material";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./theme.css";

// import { ThemeProvider } from "@mui/material/styles";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ScopedCssBaseline>
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </ScopedCssBaseline>
    </Fragment>
  );
};
export default Layout;
