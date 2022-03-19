/** @format */

import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
const Services = () => {
  return (
    <Fragment>
      <Grid container className="section-text">
        <Grid item xs={12} mt={10}>
          <Typography
            gutterBottom
            variant="h4"
            color="gray"
            align="center"
            component="h4"
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            Services
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Services;
