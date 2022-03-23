/** @format */

import { APPOINTMENT_SUCCESS, APPOINTMENT_FAIL } from "./types";
import { returnErrors } from "./messages";
import { CONFIG } from "../utils/Configration";
import axios from "axios";

// CREATE MESSAGE
export const createAppointment =
  (name, email, phone, date, time) => (dispatch) => {
    const body = JSON.stringify({ name, email, phone, date, time });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/appointment`, body, CONFIG)
      .then((res) => {
        dispatch({
          type: APPOINTMENT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: APPOINTMENT_FAIL,
        });
      });
  };
