/** @format */

import React, { Fragment } from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
import Location from "./Location";

import { Send } from "@mui/icons-material";
const Contact = () => {
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
            m={5}
            sx={{
              "& .MuiTextField-root": { m: 2 },
            }}
          >
            <TextField
              fullWidth
              label="Full Name"
              type="text"
              variant="filled"
            />
            <TextField fullWidth label="Subject" type="text" variant="filled" />
            <TextField fullWidth label="Email" type="email" variant="filled" />
            <TextField
              id="filled-multiline-static"
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
