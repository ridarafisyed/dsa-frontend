/** @format */

import React, { Fragment } from "react";
import { Card, CardMedia, Grid, Typography, Stack } from "@mui/material";

import Image1 from "../../asserts/Asset 5.png";
import Image2 from "../../asserts/Asset 6.png";
import Image3 from "../../asserts/Asset 7.png";
import "./services.css";
const Services = () => {
  return (
    <Fragment>
      <Grid
        container
        className="section-text"
        spacing={5}
        sx={{
          textTransform: "uppercase",
          fontWeight: 700,
          "&	.MuiCard-root": {
            minWidth: "22rem",
            borderRadius: "3rem",
            p: 3,
          },
        }}
      >
        <Grid item xs={12} mt={10}>
          <Typography
            gutterBottom
            component="h2"
            variant="h3"
            color="gray"
            align="center"
          >
            Services
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardMedia align="center">
              <img src={Image1} alt="visual of service one" />
            </CardMedia>
            <Typography
              variant="h6"
              align="center"
              className="Title"
              color="gray"
              mt={5}
              sx={{ textTransform: "uppercase" }}
            >
              Pregnancy care
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardMedia align="center">
              <img src={Image2} alt="visual of service one" />
            </CardMedia>
            <Typography
              variant="h6"
              align="center"
              className="Title"
              color="gray"
              mt={5}
              sx={{ textTransform: "uppercase" }}
            >
              Fertility care
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardMedia align="center">
              <img src={Image3} alt="visual of service one" />
            </CardMedia>
            <Typography
              variant="h6"
              align="center"
              className="Title"
              color="gray"
              mt={5}
              sx={{ textTransform: "uppercase" }}
            >
              Surgical Procedures
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Services;
