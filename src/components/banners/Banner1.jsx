/** @format */

import React from "react";
import { Grid, Typography } from "@mui/material";
import "./banners.css";

const Banner1 = () => {
  return (
    <Grid container className="banner1">
      <Typography component="p" variant="h4" py={5} px={15}>
        <Typography component="span" variant="h2" color="primary" m={3}>
          <i class="fas fa-quote-left"></i>
        </Typography>
        My whole professional life has been dedicated to improving access,
        affordability, quality, and health care choice.
      </Typography>
    </Grid>
  );
};

export default Banner1;
