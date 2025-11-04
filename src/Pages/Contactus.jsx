import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import { addMessageAPI } from "../service/allAPI";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire("Oops!", "Please fill out all fields!", "warning");
      return;
    }

    try {
      const result = await addMessageAPI(formData);
      if (result.status >= 200 && result.status < 300) {
        Swal.fire("Sent!", "Your message has been sent successfully.", "success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      Swal.fire("Error", "Failed to send message.", "error");
    }
  };

  return (
    <section className="contact-section mt-5">
      <div className="contact-container">
        <h2 className="title">Contact Us</h2>
        <p className="subtitle">
          We’d love to hear from you! Reach out for event bookings, partnerships, or any queries.
        </p>

        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p><strong>Email:</strong> info@eventara.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> EventAra HQ, Kochi, Kerala</p>

            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
