/** @format */

import React, { Fragment } from "react";
import { Card, CardMedia, Grid, Typography, Stack } from "@mui/material";

import Image1 from "../../asserts/Asset 5.png";
import Image2 from "../../asserts/Asset 6.png";
import "./services.css";
const Services = () => {
  return (
    <Fragment>
      <Grid container className="section-text">
        <Grid item xs={12} mt={10}>
          <Typography
            gutterBottom
            component="h2"
            variant="h3"
            color="gray"
            align="center"
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            Services
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx={{
              "&	.MuiCard-root": {
                minWidth: "20rem",
                borderRadius: "3rem",

                p: 3,
              },
            }}
          >
            <Card elevation={2}>
              <CardMedia align="center">
                <img src={Image1} alt="visual of service one" />
              </CardMedia>
              <Typography
                component="h5"
                variant="h5"
                align="center"
                className="Title"
                color="gray"
                mt={5}
                sx={{ textTransform: "uppercase" }}
              >
                Pregnancy care
              </Typography>
            </Card>
            <Card elevation={2}>
              <CardMedia align="center">
                <img src={Image2} alt="visual of service one" />
              </CardMedia>
              <Typography
                component="h5"
                variant="h5"
                align="center"
                className="Title"
                color="gray"
                mt={5}
                sx={{ textTransform: "uppercase" }}
              >
                Fertility care
              </Typography>
            </Card>
            <Card elevation={2}>
              <CardMedia align="center">
                <img src={Image1} alt="visual of service one" />
              </CardMedia>
              <Typography
                component="h5"
                variant="h5"
                align="center"
                className="Title"
                color="gray"
                mt={5}
                sx={{ textTransform: "uppercase" }}
              >
                Surgical Procedures
              </Typography>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Services;
