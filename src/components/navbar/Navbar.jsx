/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
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
            <Link className="nav-link" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Appointment
            </Link>
          </li>
          <li className="nav-item my-auto">
            <Link
              className="nav-link navbar-brand active mx-0 d-none d-md-inline"
              to="#"
            >
              Dr. Syeda Ali
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Quote
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Testomonial
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              FindMe
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              ContactMe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
