/** @format */

import React, { Fragment } from "react";
import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";

import Image1 from "../../asserts/Asset 5.png";
import Image2 from "../../asserts/Asset 6.png";
import Image3 from "../../asserts/Asset 7.png";
import "./services.css";

const Services = () => {
  return (
    <Fragment>
      <Box m={5}>
       <Typography
            gutterBottom
            component="h2"
            variant="h3"
            color="gray"
            align="center"
          >
            Services
          </Typography>
          </Box>
      <Grid
        container
        className="section-text"
        spacing={5}
        
        mb={10}
        sx={{
          textTransform: "uppercase",
          fontWeight: 700,
          "&	.MuiCard-root": {
            minWidth: "20rem",
            borderRadius: "1rem",
            p: 3,
          },
        }}
      >
      
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardMedia align="center">
              <img src={Image1} alt="Visual of Pregnancy Care" style={{width: "8em"}}/>
            </CardMedia>
            <Typography
              variant="h6"
              align="center"
              className="Title"
              color="gray"
              mt={5}
              mb={3}
              sx={{ textTransform: "uppercase" }}
            >
              Pregnancy care
            </Typography>
           
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardMedia align="center">
              <img src={Image2} alt="visual of Fertility Care" style={{width: "8em"}} />
            </CardMedia>
            <Typography
              variant="h6"
              align="center"
              className="Title"
              color="gray"
              mt={5}
              mb={3}
              sx={{ textTransform: "uppercase" }}
            >
              Fertility care
            </Typography>
           
          </Card>
        </Grid>
        <Grid item xs={12} md={4} >
          <Card elevation={2}>
            <CardMedia align="center">
              <img src={Image3} alt="visual of Sugical Procdures" style={{width: "8em"}} />
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
