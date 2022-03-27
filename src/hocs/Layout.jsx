/** @format */

import { Container } from "@mui/material";
import React, { Fragment } from "react";
import { ScopedCssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./theme.css";
import Sidebar from "../components/Navbar/Sidebar";

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
