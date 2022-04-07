/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  Box,
  Paper,
  Typography,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  IconButton,
  Container,
  Link,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { mainListItems } from "./listItems";
import { CONFIG } from "../../utils/Configration";

import NumberFormat from "react-number-format";
import { dateFormater } from "../../utils/helperFunctions";
import Messages from "./Messages";

import { Drawer } from "../../hocs/Theme";
import Appointment, { Cards } from "./Appointment";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const DashboardContent = () => {
  const [appointments, setAppointments] = useState([]);
  const [today, setToday] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const FetchAppointments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/get-appointments`, CONFIG)
      .then((res) => {
        setAppointments(res.data);
        setLoading(false);
        setStatus(res.statusText);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };

  const estimateDate = () => {
    let currentDate = dateFormater(today);
    let nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate = dateFormater(nextDate);
    const current = appointments.filter((item) => item.date === currentDate);
    const next = appointments.filter((item) => item.date === nextDate);

    return [current.length, next.length];
  };
  const [current, next] = estimateDate();
  useEffect(() => {
    FetchAppointments();
  }, []);
  return (
    <div>
      {" "}
      <Grid container spacing={3}>
        {/* Chart */}

        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Cards
              today={current}
              tomorrow={next}
              total={appointments.length}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Appointment loading={loading} appointments={appointments} />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Messages />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </div>
  );
};

export function DashboardLayout({ children }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{mainListItems}</List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
