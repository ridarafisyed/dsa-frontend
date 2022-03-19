/** @format */

import React, { Fragment } from "react";
import { Typography, Grid, Box } from "@mui/material";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";

const Feedback = () => {
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
            Testomonials
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FeedbackCards />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Feedback;
