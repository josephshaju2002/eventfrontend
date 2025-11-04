import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Brand / About Section */}
          <div className="col-md-2 mb-4">
            <h4 className="fw-bold text-primary">EventAra</h4>
            <p>
              EventAra is your trusted partner in managing memorable events —
              from weddings and corporate meets to concerts and festivals.
            </p>
          </div>
          <div className="col-md-2"></div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/works" className="text-light text-decoration-none">Works</Link></li>
              <li><Link to="/book-event" className="text-light text-decoration-none">Book Event</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><Link to="/admin" className="text-light text-decoration-none">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Follow Us On / Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Follow Us On</h5>
            <p>Stay connected and never miss an update!</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-4" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light fs-4" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-light fs-4" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-light fs-4" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-light fs-4" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} EventAra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
