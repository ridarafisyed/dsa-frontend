/** @format */

import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    featured: false,
  });
  let availableSlots = [];

  const { title, category, excerpt, content, featured } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = () => {
    console.log("form submitted");
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
      <TextField
        mb={2}
        fullWidth
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
