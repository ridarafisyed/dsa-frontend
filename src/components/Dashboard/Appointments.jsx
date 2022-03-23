/** @format */

import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import NumberFormat from "react-number-format";

const Appointments = (appointments) => {
  console.log(Appointments);
  return (
    <Fragment>
      <TableContainer>
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
            {appointments?.map((data, index) => (
              <TableRow>
                <TableCell>{index}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Appointments;
