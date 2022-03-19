/** @format */

import React from "react";

import { Grid, TextField, Stack, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import "./banners.css";

const Banner2 = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <Grid container className="banner2" spacing={2} p={10}>
      <Grid item xs={12} lg={2}>
        <TextField
          label="Full Name"
          m={2}
          size="small"
          color="secondary"
          variant="filled"
        />
      </Grid>
      <Grid item xs={12} lg={2}>
        <TextField
          label="Email"
          size="small"
          m={2}
          color="secondary"
          variant="filled"
        />
      </Grid>
      <Grid item xs={12} lg={2}>
        <TextField
          label="Phone"
          m={2}
          size="small"
          color="secondary"
          variant="filled"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(params) => (
              <TextField
                m={2}
                color="secondary"
                size="small"
                variant="filled"
                {...params}
              />
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
        <Button
          size="large"
          variant="contained"
          color="primary"
          sx={{ marginLeft: "1rem", marginTop: "0.2rem" }}
        >
          Book Appontment
        </Button>
      </Grid>
    </Grid>
  );
};

export default Banner2;
