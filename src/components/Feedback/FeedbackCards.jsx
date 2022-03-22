/** @format */

import React, { Fragment } from "react";
import { Typography, Card, CardContent, Paper } from "@mui/material";
import { Carousel } from "react-bootstrap";

import "./feedback.css";

const FeedbackCards = () => {
  return (
    <Fragment>
      <Carousel arousel variant="dark" className="slider">
        <Carousel.Item className="item">
          <Card
            component={Paper}
            elevation={20}
            sx={{
              borderRadius: "30px",
              margin: "5rem",
            }}
          >
            <Typography component="span" variant="h3" color="lightgray" m={5}>
              <i class="fa fa-quote-left"></i>
            </Typography>
            <CardContent className="card-message">
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                color="secondary"
                component="h4"
                sx={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                Bob Smith
              </Typography>
              <Typography component="p" align="center" p={5} mx={5}>
                Lorem ipsum dolor sit adipisicing elit. Dolorum quas neque
                cupiditate rem, maiores reiciendis necessitatibus, odio nisi vel
                soluta voluptatum tempore unde eveniet magnam veniam!
              </Typography>
            </CardContent>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card
            component={Paper}
            elevation={20}
            sx={{
              borderRadius: "30px",
              margin: "5rem",
            }}
          >
            <Typography component="span" variant="h3" color="lightgray" m={5}>
              <i class="fa fa-quote-left"></i>
            </Typography>
            <CardContent className="card-message">
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                color="secondary"
                component="h4"
                sx={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                Bob Smith
              </Typography>
              <Typography component="p" align="center" p={5} mx={5}>
                Lorem ipsum dolor sit adipisicing elit. Dolorum quas neque
                cupiditate rem, maiores reiciendis necessitatibus, odio nisi vel
                soluta voluptatum tempore unde eveniet magnam veniam!
              </Typography>
            </CardContent>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card
            component={Paper}
            elevation={20}
            sx={{
              borderRadius: "30px",

              margin: "5rem",
            }}
          >
            <Typography component="span" variant="h3" color="lightgray" m={5}>
              <i class="fa fa-quote-left"></i>
            </Typography>
            <CardContent className="card-message">
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                color="secondary"
                component="h4"
                sx={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                Bob Smith
              </Typography>
              <Typography component="p" align="center" p={5} mx={5}>
                Lorem ipsum dolor sit adipisicing elit. Dolorum quas neque
                cupiditate rem, maiores reiciendis necessitatibus, odio nisi vel
                soluta voluptatum tempore unde eveniet magnam veniam!
              </Typography>
            </CardContent>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default FeedbackCards;
