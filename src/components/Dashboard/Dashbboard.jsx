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

const Dashbboard = () => {
  const [appointments, setAppointments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const FetchAppointments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/appointment`, CONFIG)
      .then((res) => {
        console.log(res.data);
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

  useEffect(() => {
    FetchAppointments();
  }, []);
  return (
    <Fragment>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={12} md={4}>
          <Box>
            <Card>
              <CardContent>
                <Typography>Total Appointments</Typography>
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
        <Grid item xs={12} md={4}>
          <Box>
            <Card>
              <CardContent>
                <Typography>Today Appointments</Typography>
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
        <Grid item xs={12} md={4}>
          <Box>
            <Card>
              <CardContent>
                <Typography>Tomorrow Appointments</Typography>
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
          <TableContainer component={Paper} elevation={2}>
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
