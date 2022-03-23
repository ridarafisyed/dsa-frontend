/** @format */

import React, { Fragment, useState } from "react";

import { Grid, TextField, Stack, Button, Box } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { CONFIG } from "../../utils/Configration";
import { connect } from "react-redux";
import { createAppointment } from "../../actions/appointment";

import "./banners.css";
import axios from "axios";

const Banner2 = () => {
  const [value, setValue] = React.useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    var date = value.toLocaleDateString("YYYY-MM-DD");
    var time = value.toLocaleTimeString("hh:mm:ss");
    const body = JSON.stringify({ name, email, phone, date, time });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/appointment/`, body, CONFIG)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Grid container className="banner2" spacing={2} p={10}>
          <Grid item xs={12} lg={2}>
            <TextField
              name="name"
              type="text"
              value={name}
              onChange={(e) => onChange(e)}
              id="name"
              autoComplete="new_password"
              label="Full Name"
              m={2}
              size="small"
              color="secondary"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <TextField
              name="email"
              type="email"
              value={email}
              onChange={(e) => onChange(e)}
              id="email"
              autoComplete="new_password"
              label="Email"
              size="small"
              m={2}
              color="secondary"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <TextField
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => onChange(e)}
              id="phone"
              autoComplete="new_password"
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
              type="submit"
              sx={{ marginLeft: "1rem", marginTop: "0.2rem" }}
            >
              Book Appontment
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner2;
