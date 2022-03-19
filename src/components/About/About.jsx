/** @format */

import React, { Fragment } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const About = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} m={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Card sx={{ maxWidth: "90%" }}>
              <CardMedia
                component="iframe"
                width="260"
                height="550"
                src="https://www.youtube.com/embed/PDIDqGtq0-M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Who is Dr. Syeda Ali?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dr. Syeda Ali is an experienced Gynecologiest of Multan. She
                  completed her F.Sc. in Multan Board of intermediate education
                  with distinction. she was the gold medalist in MBBS Nishtar
                  Medical College & Hospital, completed her FCPS in 2005, and
                  started her medical journey at Nishtar Medical University. She
                  is selected thrice by the Punjab Public service commission and
                  is Head of the OBGY department Ward 16
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;
