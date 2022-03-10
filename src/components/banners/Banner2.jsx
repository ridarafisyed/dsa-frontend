/** @format */

import React from "react";

import { Grid, TextField, Box, Stack, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import "./banners.css";

const Banner2 = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <Grid container className="banner2" py={7} px={3}>
      <Stack spacing={2} direction="row" m="auto">
        <TextField
          label="Full Name"
          m={2}
          color="secondary"
          variant="filled"
          focused
        />
        <TextField label="email" m={2} color="secondary" variant="filled" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(params) => (
              <TextField m={2} color="secondary" variant="filled" {...params} />
            )}
            label="Book Appointment"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minDate={value}
            minTime={value}
            maxTime={new Date(0, 0, 0, 21, 55)} //need to work on it
          />
        </LocalizationProvider>
        <Button variant="contained" color="primary">
          Book Appontment
        </Button>
      </Stack>
    </Grid>
  );
};

export default Banner2;
