/** @format */

import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Menu,
  MenuItem,
  Divider,
  Fade,
  IconButton,
  Button,
  Badge,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import {
  Person,
  Logout,
  Mail,
  Dashboard,
  EventAvailable,
} from "@mui/icons-material/";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import "./nav.css";
import Sidebar from "./Sidebar";

const Navbar = ({ isAuthenticated, logout }) => {
  const [redirect, setRedirect] = useState(false);

  const [settingAcnchorEl, setSettingAcnchorEl] = useState(null);

  const openSetting = Boolean(settingAcnchorEl);
  const handleClick = (event) => {
    setSettingAcnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSettingAcnchorEl(null);
  };

  const logout_user = () => {
    logout();
    setRedirect(true);
  };
  const moveTo = () => {
    <Redirect to="/home" />;
  };
  return (
    <Fragment>
      <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start">
        <button
          className="navbar-toggler float-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between align-items-center w-100"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav mx-auto text-md-center text-left">
            <li className="nav-item">
              <a className="nav-link" href="/#header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" underline="none" href="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#appointment">
                Appointment
              </a>
            </li>
            <li className="nav-item my-auto">
              <Link
                underline="none"
                className="nav-link navbar-brand active mx-0 d-none d-md-inline"
                href="/"
              >
                Dr. Syeda Ali
              </Link>
            </li>
            <li className="nav-item">
              <Link underline="none" className="nav-link" href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#qoute">
                Quote
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/#feedback">
                Testomonial
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                FindMe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                ContactMe
              </a>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls="long-menu"
                    aria-expanded={openSetting ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="primary"
                  >
                    <Avatar>S</Avatar>
                  </IconButton>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={settingAcnchorEl}
                    open={openSetting}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <Person fontSize="small" />
                      </ListItemIcon>
                      <Button> Profile</Button>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Badge badgeContent={4} color="secondary">
                          <Mail color="action" />
                        </Badge>
                      </ListItemIcon>

                      <Button color="primary"> Messages</Button>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Badge badgeContent={4} color="secondary">
                          <EventAvailable color="action" />
                        </Badge>
                      </ListItemIcon>

                      <Button color="primary"> Appointments</Button>
                    </MenuItem>
                    <MenuItem
                      sx={{
                        ".MuiButtonBase-root": {
                          color: "primary",
                          "&:hover": { color: "#42a870" },
                        },
                      }}
                    >
                      <ListItemIcon>
                        <Dashboard fontSize="small" />
                      </ListItemIcon>
                      <Link
                        component={Button}
                        variant="text"
                        href="/dashboard"
                        sx={{
                          color: "#d37aaf",
                          "&:hover": { color: "#42a870" },
                        }}
                      >
                        <span
                          style={{
                            color: "#d37aaf",
                            "&:hover": { color: "#42a870" },
                          }}
                        >
                          Dashboard
                        </span>
                      </Link>
                    </MenuItem>

                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      <Button onClick={logout_user}>Logout</Button>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <a className="nav-link" href="/login">
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps, { logout })(Navbar);
