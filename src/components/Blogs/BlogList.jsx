/** @format */

import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BannerImage from "../../asserts/Asset10.png";
import { CONFIG } from "../../utils/Configration";
import "./blog.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blog/featured`, CONFIG)
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

  const fetchBlogs = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blog/`, CONFIG)
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
    fetchData();
    fetchBlogs();
  }, []);

  return (
    <Fragment>
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
          {
            featuredBlog.length === 0 ? (
              <Typography>No Post</Typography>
            ) : (
              console.log("data in feature")
            )
            // <Grid container>
            //   <Grid item xs={12} md={6}>
            //     <CardMedia
            //       component="img"
            //       src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
            //       alt="blog visual"
            //       height="255"
            //     />
            //   </Grid>
            //   <Grid item xs={12} md={6}>
            //     <CardContent>
            //       <Typography
            //         component="h3"
            //         variant="h5"
            //         className="cardTitle"
            //         mb={3}
            //       >
            //         {featuredBlog.title}
            //       </Typography>
            //       <Typography component="p" variant="caption" mb={3}>
            //         31 Dec 2022
            //       </Typography>
            //       <Typography
            //         component="p"
            //         variant="body2"
            //         color="text.secondary"
            //       >
            //         {featuredBlog.excerpt}
            //       </Typography>
            //       <Link
            //         to={`/blog/${featuredBlog.slug}`}
            //         className="text-white font-weight-bold"
            //       >
            //         Continue reading...
            //       </Link>
            //     </CardContent>
            //   </Grid>
            // </Grid>
          }
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
          <Grid container>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?cs=srgb&dl=pexels-mart-production-7089401.jpg&fm=jpg"
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
                  Title of the Post
                </Typography>
                <Typography component="p" variant="caption" mb={3}>
                  31 Dec 2022
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis aspernatur non cumque debitis incidunt vero ab
                  quisquam sint consequatur, labore sequi necessitatibus magnam
                  fuga temporibus magni maxime expedita aperiam. Ducimus.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
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
    </Fragment>
  );
};

export default BlogList;
