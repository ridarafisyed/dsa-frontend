/** @format */

import React from "react";
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
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Appointment
            </a>
          </li>
          <li className="nav-item my-auto">
            <a
              className="nav-link navbar-brand active mx-0 d-none d-md-inline"
              href="#"
            >
              Dr. Syeda Ali
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Quote
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Testomonial
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FindMe
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ContactMe
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
