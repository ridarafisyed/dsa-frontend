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

const Messages = () => {
  const [appointments, setAppointments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const FetchAppointments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/contact`, CONFIG)
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
      <Grid container>
        <Grid item xs={12} my={5}>
          <TableContainer component={Paper} elevation={2}>
            <Table>
              <TableHead>
                <TableCell>Sr.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Messages</TableCell>
                <TableCell>Timestemp</TableCell>
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
                      <TableCell>{data.subject}</TableCell>
                      <TableCell>
                        <Typography>{data.message}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>
                          <NumberFormat
                            format="####-##-##"
                            placeholder="YYYY-MM-DD"
                            displayType="text"
                            value={data.created_at}
                          />
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>Unread</Typography>
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

export default Messages;
