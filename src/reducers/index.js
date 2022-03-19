/** @format */

import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  auth,
  errors,
  messages,
});
