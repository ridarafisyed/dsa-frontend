/** @format */

import React, { Fragment } from "react";
import { Typography, Grid, Box, Fab } from "@mui/material";
import NumberFormat from "react-number-format";
import "./footer.css";

const Copyright = () => {
  return (
    <footer>
      <a href="/">Copyright &copy; 2022 Rida Rafi Syed</a> All rights reserved |
      this website is made by <a href="https://www.aurteck.com"> @aurteck</a>
    </footer>
  );
};

const Footer = () => {
  return (
    <Fragment>
      <Grid
        container
        sx={{ backgroundColor: "#d37aaf", color: "white", padding: 4 }}
      >
        <Grid item xs={12} md={4}>
          <Typography variant="h3" component="h4" mt={3}>
            Dr. Syeda Ali
          </Typography>
          <Typography variant="h5" component="h6" mt={3}>
            The Best Gynecologiest in Multan
          </Typography>
          <Typography variant="p" component="p" mt={3}>
            Social Media Links
          </Typography>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab size="small" aria-label="add" mx={1}>
              <i className="fab fa-facebook-f"></i>
            </Fab>

            <Fab size="small" aria-label="add" mx={1}>
              <i className="fab fa-instagram"></i>
            </Fab>
            <Fab size="small" aria-label="add" mx={1}>
              <i className="fab fa-whatsapp"></i>
            </Fab>
            <Fab size="small" aria-label="add" mx={1}>
              <i className="fab fa-linkedin-in"></i>
            </Fab>
            <Fab size="small" aria-label="add" mx={1}>
              <i className="fab fa-youtube"></i>
            </Fab>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <Typography>IMPORTANT LINKS</Typography>
          <ul className="footer-links">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testomonial">Testomonial</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>FIND ME</Typography>

          <Typography component="p" mb={5}>
            <i className="fas fa-at"></i> contactme@drsyeadaali.com
          </Typography>
          <Typography component="p" mb={5}>
            <i className="fas fa-phone-alt"></i>
            <NumberFormat
              value="3239876543"
              format=" +92 (###) ###-####"
              displayType={"text"}
            />
          </Typography>

          <Typography component="p" mb={5}>
            <i className="fas fa-map-marker-alt"></i> Liberty, Lahore, Punjab,
            Pakistan
            <br />
            54000
          </Typography>
        </Grid>
        <Copyright />
      </Grid>
    </Fragment>
  );
};

export default Footer;
