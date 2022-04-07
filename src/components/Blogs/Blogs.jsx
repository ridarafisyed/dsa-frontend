/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { CONFIG } from "../../utils/Configration";

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
  const [latestBlog, setLatestBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchLatestPost = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blog/latest/`, CONFIG)
      .then((res) => {
        setLatestBlog(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchLatestPost();
  }, []);
  return (
    <Fragment>
      {loading !== true && latestBlog.length !== 0 ? (
        <Box my={5}>
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
            {latestBlog.map((post) => {
              <Grid item xs={12} md={4}>
                <Card className="card" elevation={0}>
                  <CardMedia>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
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
                      {post.title}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      align="center"
                      color="text.secondary"
                    >
                      {post.except}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>;
            })}
          </Grid>
        </Box>
      ) : null}
    </Fragment>
  );
};

export default Blogs;
