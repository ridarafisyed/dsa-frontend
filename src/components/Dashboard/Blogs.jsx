/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { CONFIG } from "../../utils/Configration";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import { getPostDate } from "../../utils/helperFunctions";
import { useToggle } from "../../utils/useToggle";
import CreatePost from "./CreatePost";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Blogs = () => {
  const [isOpen, setIsOpen] = useToggle(false);
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
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box sx={{ float: "right" }}>
            <Button variant="contained" onClick={() => setIsOpen(isOpen)}>
              Create Post
            </Button>
          </Box>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(isOpen)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {" "}
                Create New Post
              </Typography>
              <CreatePost />
            </Box>
          </Modal>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            align="center"
            variant="h5"
            component="h5"
            sx={{ textTransform: "uppercase" }}
            mt={3}
          >
            Blogs
          </Typography>
          {loading === false ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Summary</TableCell>
                  <TableCell>Featured</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableHead>
                <TableBody>
                  {blogs.length !== 0 ? (
                    blogs?.map((data, index) => (
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <Typography sx={{ textTransform: "uppercase" }}>
                            {data.title}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>
                            {getPostDate(latestBlog.pub_date)}
                          </Typography>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Typography>{data.excerpt}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{data.status}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{data.status}</Typography>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7}>No post</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Blogs;
