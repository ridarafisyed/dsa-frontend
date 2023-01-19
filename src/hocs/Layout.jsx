/** @format */

import { Container } from "@mui/material";
import React, { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./theme.css";
import Sidebar from "../components/Navbar/Sidebar";

// import { ThemeProvider } from "@mui/material/styles";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline>
      <Navbar />
        <Container>
        
        {children}
       
        </Container>
        <Footer />
      </CssBaseline>
      
    </Fragment>
  );
};
export default Layout;
