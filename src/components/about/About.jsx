/** @format */

import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Fragment>
      <Grid container m={5}>
        <div style={{ alignItems: "center", textAlign: "center" }}>
          {/* <CardMedia
            component="video"
            autoPlay
            controls
            sx={{ width: 800, align: "cent" }}
            video="https://www.youtube.com/watch?v=PDIDqGtq0-M"
          /> */}
          <iframe
            width="460"
            height="250"
            src="https://www.youtube.com/embed/PDIDqGtq0-M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Typography component="h3" variant="h4" my={5} mx={7}>
            Who is Dr. Syeda Ali?
          </Typography>
          <Typography component="p" variant="p" my={5} mx={9}>
            Dr. Syeda Ali is an experienced Gynecologiest of Multan. She
            completed her F.Sc. in Multan Board of intermediate education with
            distinction. she was the gold medalist in MBBS Nishtar Medical
            College & Hospital, completed her FCPS in 2005, and started her
            medical journey at Nishtar Medical University. She is selected
            thrice by the Punjab Public service commission and is Head of the
            OBGY department Ward 16
          </Typography>
        </div>
      </Grid>
    </Fragment>
  );
};

export default About;
