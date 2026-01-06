import React, { useState } from "react";
import Swal from "sweetalert2";
import { addMessageAPI } from "../service/allAPI";

const Contactus = () => {
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
    <section
      className="py-5 mt-5"
      style={{
        background: "linear-gradient(135deg, #fffaf3, #fdf6ee)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        className="container bg-white p-5 rounded-4 shadow"
        style={{ maxWidth: "1100px" }}
      >
        <h2 className="text-center fw-bold mb-2" style={{ color: "rgb(36,36,224)", fontSize: "36px" }}>
          Contact Us
        </h2>

        <p className="text-center text-muted mb-5">
          We’d love to hear from you! Reach out for event bookings, partnerships, or any queries.
        </p>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-6">
            <h4 className="mb-3" style={{ color: "#2e8b57" }}>
              Get In Touch
            </h4>

            <p className="mb-2 text-secondary">
              <strong>Email:</strong> info@eventara.com
            </p>
            <p className="mb-2 text-secondary">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-3 text-secondary">
              <strong>Address:</strong> EventAra HQ, Kochi, Kerala
            </p>

            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-decoration-none" style={{ color: "#c45a2b" }}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-decoration-none" style={{ color: "#c45a2b" }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-decoration-none" style={{ color: "#c45a2b" }}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" className="text-decoration-none" style={{ color: "#c45a2b" }}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg rounded-3"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className="form-control form-control-lg rounded-3"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="5"
                className="form-control form-control-lg rounded-3"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-lg text-white rounded-3"
                style={{ backgroundColor: "rgb(36,36,224)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
