/** @format */

import React from "react";
import { Grid, Typography } from "@mui/material";
import "./banners.css";
import { Box } from "@mui/system";

const Banner1 = () => {
  return (
    <Grid container className="banner1">
      <Grid item m={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography component="p" variant="h4" py={5} px={15}>
            <Typography component="span" variant="h3" color="primary" m={3}>
              <i class="fa fa-quote-left"></i>
            </Typography>
            My whole professional life has been dedicated to improving access,
            affordability, quality, and health care choice.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner1;
