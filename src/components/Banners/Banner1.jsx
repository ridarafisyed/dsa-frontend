/** @format */

import React from "react";
import { Grid, Typography } from "@mui/material";
import "./banners.css";
import { Box } from "@mui/system";

const Banner1 = () => {
  return (
    <Grid container className="banner1" my={5}>
      <Grid item m={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography component="p" variant="h4" py={8} px={20}>
            <Typography component="span" variant="h4" color="primary" m={3}>
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
