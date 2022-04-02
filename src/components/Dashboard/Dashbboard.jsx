/** @format */

import {
  Card,
  Grid,
  Box,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { CONFIG } from "../../utils/Configration";
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Messages from "./Messages";

const Dashbboard = () => {
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
  const dateFormater = (data) => {
    let month = data.getMonth() + 1;
    let monthFormate = month.toString().padStart(2, "0");
    let dateFormate = data.getDate().toString().padStart(2, "0");
    let date = data.getFullYear() + "-" + monthFormate + "-" + dateFormate;
    return date;
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
    <Fragment>
      <Typography
        align="center"
        variant="h5"
        component="h5"
        sx={{ textTransform: "uppercase" }}
        mt={3}
      >
        Appointments
      </Typography>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={12} md={4}>
          <Box>
            <Card
              component={Paper}
              elevation={4}
              sx={{
                boxShadow:
                  "0px 2px 4px -1px rgba(211, 122, 175, 0.4), 0px 4px 5px 0px rgba(211, 122, 175, 0.4), 0px 1px 10px 0px rgba(211, 122, 175, 0.4)",
              }}
            >
              <CardContent>
                <Typography
                  color="primary"
                  sx={{ textTransform: "uppercase", fontWeight: "500" }}
                >
                  Today
                </Typography>
                <Typography variant="h3" component="h2">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    thousandSeparator={true}
                    displayType={"text"}
                    value={current}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Card
              component={Paper}
              elevation={4}
              sx={{
                boxShadow:
                  "0px 2px 4px -1px rgba(66, 168, 112, 0.4), 0px 4px 5px 0px rgba(66, 168, 112, 0.4), 0px 1px 10px 0px rgba(66, 168, 112, 0.4)",
              }}
            >
              <CardContent>
                <Typography
                  color="secondary"
                  sx={{ textTransform: "uppercase", fontWeight: "500" }}
                >
                  Tomorrow{" "}
                </Typography>
                <Typography variant="h3" component="h2">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    thousandSeparator={true}
                    displayType={"text"}
                    value={next}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Card
              component={Paper}
              elevation={4}
              sx={{
                boxShadow:
                  "0px 2px 4px -1px rgba(150,150,150, 0.4), 0px 4px 5px 0px rgba(150,150,150, 0.4), 0px 1px 10px 0px rgba(150,150,150, 0.4)",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ textTransform: "uppercase", fontWeight: "500" }}
                >
                  Total
                </Typography>
                <Typography variant="h3" component="h2">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    thousandSeparator={true}
                    displayType={"text"}
                    value={appointments.length}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} my={5}>
          <Typography
            align="center"
            variant="h5"
            component="h5"
            sx={{ textTransform: "uppercase" }}
            mt={3}
          >
            Messages
          </Typography>
          <Messages />
        </Grid>
        <Grid item xs={12} my={5}>
          <Typography
            align="center"
            variant="h5"
            component="h5"
            sx={{ textTransform: "uppercase" }}
            mt={3}
          >
            Appointments
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableCell>Sr.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Status</TableCell>
              </TableHead>
              <TableBody>
                {!loading ? (
                  appointments?.map((data, index) => (
                    <TableRow>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <Typography sx={{ textTransform: "uppercase" }}>
                          {data.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.email}</Typography>
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          thousandsGroupStyle="thousand"
                          format="+92 (###) ###-####"
                          mask="_"
                          thousandSeparator={true}
                          displayType={"text"}
                          value={data.phone}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography>{data.date}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.time}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>Confirmed</Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <h1>Loading ...</h1>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Dashbboard;
