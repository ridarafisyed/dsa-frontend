/** @format */

import { APPOINTMENT_SUCCESS, APPOINTMENT_FAIL } from "./types";

// CREATE MESSAGE
export const createAppointment = (msg) => {
  return {
    type: APPOINTMENT_SUCCESS,
    payload: msg,
  };
};

// RETURN ERRORS
// export const returnErrors = (msg, status) => {
//   return {
//     type: GET_ERRORS,
//     payload: { msg, status },
//   };
// };
