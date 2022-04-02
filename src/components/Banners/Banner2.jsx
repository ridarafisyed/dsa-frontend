/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button, Box, Select, MenuItem } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { CONFIG } from "../../utils/Configration";

import "./banners.css";
const SLOTS = [
  { id: 0, slot: "12:30 PM – 12:45 PM" },
  { id: 1, slot: "12:45 PM – 01:00 PM" },
  { id: 2, slot: "01:00 PM – 01:15 PM" },
  { id: 3, slot: "01:15 PM – 01:30 PM" },
  { id: 4, slot: "01:30 PM – 01:45 PM" },
  { id: 5, slot: "07:00 PM – 07:15 PM" },
  { id: 6, slot: "07:15 PM – 07:30 PM" },
  { id: 7, slot: "07:30 PM – 07:45 PM" },
  { id: 8, slot: "07:45 PM – 08:00 PM" },
  { id: 9, slot: "08:00 PM – 08:15 PM" },
  { id: 10, slot: "08:15 PM – 08:30 PM" },
  { id: 11, slot: "08:30 PM – 08:45 PM" },
  { id: 12, slot: "08:45 PM – 09:00 PM" },
  { id: 13, slot: "09:00 PM – 09:15 PM" },
  { id: 14, slot: "09:15 PM – 09:30 PM" },
];

const Banner2 = () => {
  const today = new Date();
  const [slots, setSlots] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [value, setValue] = React.useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let availableSlots = [];

  const { name, email, phone } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [selectedSlot, setSelectedSlot] = useState("");

  const handleSelectedSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleChange = (value) => {
    setValue(value);
    fetchSlot(value);
  };
  useEffect(() => {
    fetchSlot(today);
  }, []);

  const fetchSlot = (date) => {
    let month = date.getMonth() + 1;
    let monthFormate = month.toString().padStart(2, "0");
    let dateFormate = date.getDate().toString().padStart(2, "0");
    var confirmDate =
      value.getFullYear() + "-" + monthFormate + "-" + dateFormate;

    console.log(date);
    console.log(confirmDate);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/get-slots/?search=${confirmDate}`,
        CONFIG,
      )
      .then((res) => {
        // console.log(res.data);
        setTimeSlots(res.data);

        timeSlots.length !== 0
          ? timeSlots.map((item) => availableSlots.push(item.timeslot))
          : (availableSlots = slots);
        setSlots(SLOTS.filter((el) => !availableSlots.includes(el.id)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resetForm = () => {
    window.location.reload(true);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let month = value.getMonth() + 1;
    let monthFormate = month.toString().padStart(2, "0");
    let dateFormate = value.getDate().toString().padStart(2, "0");
    var date = value.getFullYear() + "-" + monthFormate + "-" + dateFormate;
    var timeslot = parseInt(selectedSlot);
    const body = JSON.stringify({ name, email, phone, date, timeslot });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/appointment/`, body, CONFIG)
      .then((res) => {
        setTimeSlots(res.data);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Box my={4} component="form" Validate onSubmit={(e) => onSubmit(e)}>
        <Grid container className="banner2" spacing={1} p={10}>
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
          <Grid item xs={12} lg={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                renderInput={(params) => (
                  <TextField
                    m={2}
                    color="secondary"
                    size="small"
                    variant="filled"
                    {...params}
                  />
                )}
                label="Pick the Day"
                value={value}
                onChange={(value) => {
                  handleChange(value);
                }}
                minDate={today}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              id="outlined-select-currency"
              select
              color="secondary"
              size="small"
              variant="filled"
              label="Select"
              value={selectedSlot}
              onChange={handleSelectedSlotChange}
              helperText="Please Select Time Slot"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {slots.map((option) => (
                <MenuItem value={option.id}>
                  <span>
                    <b>Slot {option.id + 1}: </b> {option.slot}
                  </span>
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginLeft: "1rem", marginTop: "0.75rem" }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner2;
