/** @format */

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { CONFIG } from "../../utils/Configration";
import "./blog.css";
import { getPostDate } from "../../utils/helperFunctions";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const fetchFeaturedPost = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blog/featured/`, CONFIG)
      .then((res) => {
        setFeaturedBlog(res.data[0]);

        // setStatus(res.statusText);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setError(err.message);
      });
  };
  const fetchLatestPost = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blog/latest/`, CONFIG)
      .then((res) => {
        setLatestBlog(res.data[0]);

        // setStatus(res.statusText);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setError(err.message);
      });
  };

  const fetchBlogs = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blog/posts/`, CONFIG)
      .then((res) => {
        setBlogs(res.data);

        setLoading(false);
        // setStatus(res.statusText);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setError(err.message);
      });
  };

  useEffect(() => {
    fetchFeaturedPost();
    fetchLatestPost();
    fetchBlogs();
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item className="bannerImage" xs={12} p={10}>
          <Typography
            align="center"
            variant="h2"
            color="white"
            sx={{ fontWeight: 500 }}
          >
            Blog Posts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h5"
            variant="h6"
            className="Title"
            color="gray"
            mt={5}
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            Feature Blog
          </Typography>
          {featuredBlog.length === 0 ? (
            <Typography>No Post</Typography>
          ) : (
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  src={featuredBlog.thumbnail}
                  alt="blog visual"
                  height="255"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography
                    component="h3"
                    variant="h5"
                    className="cardTitle"
                    mb={3}
                  >
                    {featuredBlog.title}
                  </Typography>
                  <Typography component="p" variant="caption" mb={3}>
                    {getPostDate(featuredBlog.pub_date)}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="text.secondary"
                  >
                    {featuredBlog.excerpt}
                  </Typography>
                  <Link
                    to={`/blog/${featuredBlog.slug}`}
                    className="text-white font-weight-bold"
                  >
                    Continue reading...
                  </Link>
                </CardContent>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h5"
            variant="h6"
            className="Title"
            color="gray"
            mt={5}
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            Latest Blog
          </Typography>
          {latestBlog.length === 0 ? (
            <Typography>No Post</Typography>
          ) : (
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  src={latestBlog.thumbnail}
                  alt="blog visual"
                  height="255"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography
                    component="h3"
                    variant="h5"
                    className="cardTitle"
                    mb={3}
                  >
                    {latestBlog.title}
                  </Typography>
                  <Typography component="p" variant="caption" mb={3}>
                    {getPostDate(latestBlog.pub_date)}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="text.secondary"
                  >
                    {latestBlog.excerpt}
                  </Typography>
                  <Link
                    to={`/blog/${latestBlog.slug}`}
                    className="text-white font-weight-bold"
                  >
                    Continue reading...
                  </Link>
                </CardContent>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={5} my={10}>
        {loading === false && blogs.length !== 0 ? (
          blogs.map((blogPost) => (
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  src={blogPost.thumbnail}
                  alt="blog visual"
                  height="194"
                />
                <CardContent>
                  <Typography
                    component="h4"
                    variant="h5"
                    className="cardTitle"
                    mb={3}
                  >
                    {blogPost.title}
                  </Typography>
                  <Typography component="p" variant="caption" mb={3}>
                    {blogPost.month} {blogPost.day}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="text.secondary"
                  >
                    {blogPost.excerpt}
                  </Typography>
                  <Link
                    to={`/blog/${blogPost.slug}`}
                    className="stretched-link"
                  >
                    Continue reading
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No Post </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default BlogList;
