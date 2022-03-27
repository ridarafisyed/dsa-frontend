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
                  Dr Syeda Ali is an experienced Gynaecologist of Multan. She is
                  a gold medalist. She topped in FSc in Multan Board of
                  intermediate education. She topped in MBBS in whole
                  university. She did FCPS in 2005 and since then is employed in
                  Nishtar medical University. She is selected thrice by Punjab
                  Public service comission and always on top merit in Punjab.
                  She has a vast experience of treating all type of difficult
                  Obstetrics and Gynaecology Surgery and dealing every type of
                  emergency. Nowadays She is Associate Professor Obstetrics and
                  Gynaecology and the Head of the OBGY department Ward 17 in
                  Nishtar medical University on regular basis.
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
