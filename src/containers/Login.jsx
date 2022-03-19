/** @format */

import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../actions/auth";

import {
  Avatar,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  TextField,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(username, email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "60vh" }}
    >
      <Grid item xs={3}>
        <Box
          p={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            Validate
            sx={{ mt: 1 }}
            onSubmit={(e) => onSubmit(e)}
          >
            {/* csrf_token */}
            <TextField
              margin="normal"
              required
              fullWidth
              variant="standard"
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
              autoComplete="new-password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              variant="standard"
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              variant="standard"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              id="password"
              minLength="6"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link
                to="/"
                underline="none"
                color="primary"
                sx={{
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/signup"
                underline="none"
                color="primary"
                sx={{
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
