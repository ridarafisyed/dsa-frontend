/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { CONFIG } from "../../utils/Configration";
import { Editor } from "@tinymce/tinymce-react";
import {
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { convertToSlug } from "../../utils/helperFunctions";
const Input = styled("input")({
  display: "none",
});

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    excerpt: "",
    content: "",
    featured: false,
    status: "draft",
  });
  const [value, setValue] = useState(new Date());

  const { title, thumbnail, excerpt, content, featured, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const resetForm = () => {
    window.location.reload(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let month = value.getMonth() + 1;
    let monthFormate = month.toString().padStart(2, "0");
    let dateFormate = value.getDate().toString().padStart(2, "0");
    let pub_date = value.getFullYear() + "-" + monthFormate + "-" + dateFormate;
    let slug = convertToSlug(title);
    const body = JSON.stringify({
      title,
      thumbnail,
      excerpt,
      content,
      featured,
      status,
      pub_date,
    });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/blog/posts/`, body, CONFIG)
      .then((res) => {
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      my={10}
      component="form"
      Validate
      onSubmit={(e) => onSubmit(e)}
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField
        mb={2}
        fullWidth
        id="title"
        label="Title of the Post"
        variant="outlined"
        value={title}
        onChange={(e) => onChange(e)}
        name="title"
      />
      <lable htmlFor="contained-button-file" style={{ float: "right" }}>
        <Input
          accept="image/*"
          id="contained-button-file"
          value={thumbnail}
          onChange={(e) => onChange(e)}
          multiple
          type="file"
        />
        <Button
          variant="contained"
          color="secondary"
          component="span"
          endIcon={<PhotoCamera />}
        >
          Upload
        </Button>
      </lable>
      <TextField
        mb={2}
        fullWidth
        multiline
        rows={4}
        id="excerpt"
        label="Excerpt of the Post"
        variant="outlined"
        value={excerpt}
        onChange={(e) => onChange(e)}
        name="excerpt"
      />
      <TextField
        component={Editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        apiKey={process.env.TINY_API_KEY}
        init={{
          height: 500,
          menubar: false,
        }}
        value={content}
        onEditorChange={(e) => onChange(e)}
      />
      <Stack spacing={2}>
        <FormControlLabel
          mb={2}
          control={
            <Switch
              id="featured"
              variant="outlined"
              value={featured}
              onChange={(e) => onChange(e)}
              name="featured"
            />
          }
          label="Featured Post"
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={(e) => onChange(e)}
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="publish">Publish</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
      <Button
        size="large"
        variant="contained"
        color="primary"
        type="submit"
        sx={{ marginLeft: "1rem", marginTop: "0.75rem", float: "right" }}
      >
        Save
      </Button>
    </Box>
  );
};

export default CreatePost;
