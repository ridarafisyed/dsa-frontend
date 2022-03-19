/** @format */

import React, { Fragment } from "react";
import { Grid, CardMedia, Typography, Button, Stack } from "@mui/material";
import "./header.css";
import mainImage from "../../asserts/main.png";

const Header = () => {
  return (
    <Fragment>
      <Grid container spacing={2} py={8} my={2} className="container">
        <Grid item xs={12} md={6} className="left-side">
          <Typography component="h1" variant="h3" my={4} mx={2}>
            Dr. Syeda Ali
          </Typography>
          <Typography component="h4" variant="h5" my={4} mx={2}>
            The best Gynecologiests in Multan
          </Typography>
          <Typography component="p" variant="p" my={4} mx={2}>
            If you have any Question regarding your OBGYN health. Please book an
            appointment or Leave a message.
          </Typography>
          <Stack spacing={2} direction="row">
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
