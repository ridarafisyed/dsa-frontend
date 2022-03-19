/** @format */

import React, { Fragment } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import "./blog.css";

const Blogs = () => {
  return (
    <Fragment>
      <Box>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          className="Title"
          color="gray"
          mt={5}
          sx={{ textTransform: "uppercase", fontWeight: 700 }}
        >
          Latest Blogs
        </Typography>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} md={4}>
            <Card className="card" elevation={0}>
              <CardMedia>
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
                  alt="blog visual"
                  className="blogImage"
                />
              </CardMedia>

              <CardContent className="cardContent">
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  className="cardTitle"
                  mt={10}
                  mb={2}
                >
                  Title of the Post
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card" elevation={0}>
              <CardMedia>
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
                  alt="blog visual"
                  className="blogImage"
                />
              </CardMedia>

              <CardContent className="cardContent">
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  className="cardTitle"
                  mt={10}
                  mb={2}
                >
                  Title of the Post
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card" elevation={0}>
              <CardMedia>
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
                  alt="blog visual"
                  className="blogImage"
                />
              </CardMedia>

              <CardContent className="cardContent">
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  className="cardTitle"
                  mt={10}
                  mb={2}
                >
                  Title of the Post
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card" elevation={0}>
              <CardMedia>
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
                  alt="blog visual"
                  className="blogImage"
                />
              </CardMedia>

              <CardContent className="cardContent">
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  className="cardTitle"
                  mt={10}
                  mb={2}
                >
                  Title of the Post
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card" elevation={0}>
              <CardMedia>
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
                  alt="blog visual"
                  className="blogImage"
                />
              </CardMedia>

              <CardContent className="cardContent">
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  className="cardTitle"
                  mt={10}
                  mb={2}
                >
                  Title of the Post
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card" elevation={0}>
              <CardMedia>
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
                  alt="blog visual"
                  className="blogImage"
                />
              </CardMedia>

              <CardContent className="cardContent">
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  className="cardTitle"
                  mt={10}
                  mb={2}
                >
                  Title of the Post
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Blogs;
