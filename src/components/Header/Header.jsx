/** @format */

import React, { Fragment } from "react";
import { Grid, CardMedia, Typography, Button, Stack } from "@mui/material";
import "./header.css";
import { useMediaQuery } from "@mui/material";
import mainImage from "../../asserts/main.png";

const Header = () => {
   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
   const h2Props = {
     variant: isSmallScreen ? "h5" : "h4",
     my: isSmallScreen ? 0: 4,
     mx: isSmallScreen ? 0:2,
   };
   const h1Props = {
     variant: isSmallScreen ? "h3" : "h1",
     my: isSmallScreen ? 0 : 4,
     mx: isSmallScreen ? 0 : 2,
   };

  return (
    <Fragment>
      <Grid container spacing={2} py={8} my={2} className="container">
        <Grid item xs={12} md={6} className="left-side">
          <Typography {...h1Props}>Dr. Syeda Ali</Typography>
          <Typography {...h2Props}>The best Gynaecologist in Multan</Typography>
          <Typography component="p" variant="p" my={4} mx={2}>
            If you have any Questions regarding your OBGYN health, Please book
            an appointment or Leave a message.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button variant="contained" color="primary">
              Book Appointment
            </Button>
            <Button variant="contained" color="secondary">
              Contact Me
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} className="right-side">
          <CardMedia
            component="img"
            height="394"
            image={mainImage}
            alt="Paella dish"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Header;
