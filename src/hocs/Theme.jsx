/** @format */

import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import shadows from "./shadow";

const drawerWidth = 240;

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#d37aaf",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#42a870",
      contrastText: "rgba(255,255,255,0.87)",
    },
    error: {
      main: "#f43664",
    },
    warning: {
      main: "#ef5350",
    },
    info: {
      main: "#009688",
    },
    success: {
      main: "#00695c",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 10,
  },

  props: {
    MuiButton: {
      size: "large",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  direction: "rtl",
  typography: {
    h1: {
      fontSize: "4rem",
      lineHeight: 1.2,
      letterSpacing: "0.05em",
    },
    h2: {
      fontSize: "3rem",
      letterSpacing: "0.05em",
    },
    h4: {
      fontSize: "2rem",
      letterSpacing: "0.05em",
    },
    h5: {
      fontSize: "1.8rem",
      letterSpacing: "0.05em",
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 400,
      letterSpacing: "0.05em",
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 200,
      letterSpacing: "0.15em",
    },
    subtitle2: {
      fontSize: "1.5rem",
      lineHeight: 1.76,
      letterSpacing: "0.02em",
    },
    body1: {
      letterSpacing: "0.1em",
      lineHeight: 1.6,
      fontWeight: 300,
    },
    body2: {
      fontSize: "0.9rem",
      fontWeight: 300,
      lineHeight: 1.8,
      letterSpacing: "0.07em",
    },
    caption: {
      fontSize: "0.9rem",
      fontWeight: 300,
      lineHeight: 1.8,
      letterSpacing: "0.07em",
    },
    overline: {
      fontSize: "0.8rem",
      fontWeight: 300,
      lineHeight: 1.8,
      letterSpacing: "0.07em",
    },
    h3: {
      letterSpacing: "0.05em",
      fontWeight: 300,
      lineHeight: 1.8,
      letterSpacing: "0.07em",
    },
  },
});
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
