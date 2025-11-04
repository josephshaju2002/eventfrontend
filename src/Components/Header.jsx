import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiEventstore } from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <SiEventstore className="fw-bold fs-1" /> <span className="text-primary">Event</span>Ara
        </Link>

        {/* Toggle Button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Tooltip title="Click to learn more about EventAra" arrow>
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </Tooltip>

            </li>
            <li className="nav-item">
               <Tooltip title="Click here to know more about our works" arrow>
              <NavLink to="/works" className="nav-link">
                Works
              </NavLink>
              </Tooltip>
            </li>
            <li className="nav-item">
              <NavLink to="/book-event" className="nav-link">
                Book Event
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link">
                Admin Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
