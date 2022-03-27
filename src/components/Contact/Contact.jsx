/** @format */

import React, { Fragment, useState } from "react";
import axios from "axios";
import { Grid, Box, TextField, Button } from "@mui/material";
import Location from "./Location";
import { CONFIG } from "../../utils/Configration";
import { Send } from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit button hit");
    const body = JSON.stringify({ name, email, subject, message });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contact/`, body, CONFIG)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <Location />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            Validate
            m={5}
            sx={{
              "& .MuiTextField-root": { m: 2 },
            }}
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              fullWidth
              label="Full Name"
              type="text"
              variant="filled"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              id="name"
              autoComplete="new_password"
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="filled"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              id="email"
              autoComplete="new_password"
            />
            <TextField
              fullWidth
              label="Subject"
              type="text"
              variant="filled"
              name="subject"
              value={subject}
              onChange={(e) => onChange(e)}
              id="subject"
              autoComplete="new_password"
            />
            <TextField
              name="message"
              type="text"
              value={message}
              onChange={(e) => onChange(e)}
              id="message"
              autoComplete="new_password"
              multiline
              fullWidth
              rows={4}
              label="Message"
              variant="filled"
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
              endIcon={<Send />}
              sx={{ m: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Contact;
