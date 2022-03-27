/** @format */

import React, { Fragment } from "react";
import { Fab, Button } from "@mui/material";
import { useToggle } from "../../utils/useToggle";
import { Menu, Close } from "@mui/icons-material";

import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  //   const openNav = () => {
  //     document.getElementById("mySidenav").style.width = "250px";
  //     document.getElementById("main").style.marginLeft = "250px";
  //   };
  //   const closeNav = () => {
  //     document.getElementById("mySidenav").style.width = "0";
  //     document.getElementById("main").style.marginLeft = "0";
  //   };
  return (
    <Fragment>
      <Fab
        style={{ fontSize: "30px", cursor: "pointer", top: "-4rem" }}
        onClick={() => setIsOpen(isOpen)}
      >
        {isOpen ? <Close /> : <Menu />}
      </Fab>
      <div
        id="mySidenav"
        className="sidenav"
        style={isOpen ? { width: "250px" } : { width: "0" }}
      >
        <Button className="closebtn" onClick={() => setIsOpen(isOpen)}>
          <Close />
        </Button>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div
        id="main"
        style={isOpen ? { marginLeft: "250px" } : { marginLeft: "0" }}
      ></div>
    </Fragment>
  );
};

export default Sidebar;
