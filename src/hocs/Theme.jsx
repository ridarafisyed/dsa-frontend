/** @format */

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d37aaf",
      contrastText: "#fefefe",
    },
    secondary: {
      main: "#42a870",
      contrastText: "#fefefe",
    },
  },
  spacing: 7,
});
