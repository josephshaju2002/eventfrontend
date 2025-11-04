import React from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <section className="contact-section mt-5">
      <div className="contact-container">
        <h2 className="title">Contact Us</h2>
        <p className="subtitle">
          We’d love to hear from you! Reach out for event bookings, partnerships, or any queries.
        </p>

        <div className="contact-content">
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

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
