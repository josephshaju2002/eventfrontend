import React from "react";

function About() {
  return (
    <section
      className="text-white py-5"
      style={{ backgroundColor: "#000", minHeight: "100vh" }}
    >
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "blue" }}>
            About EventAra
          </h1>
          <p className="lead text-secondary">
            Turning your moments into unforgettable memories.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt=""
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-semibold mb-3" style={{ color: "#0d6efd" }}>
              Who We Are
            </h2>
            <p className="text-light mb-4">
              EventAra is a full-service event management company dedicated to
              planning and executing extraordinary events. From corporate
              conferences and product launches to weddings and cultural shows,
              we bring ideas to life with creativity, precision, and passion.
            </p>

            <h2 className="fw-semibold mb-3" style={{ color: "#0d6efd" }}>
              Our Mission
            </h2>
            <p className="text-light mb-4">
              Our mission is to create seamless, impactful, and memorable
              experiences that reflect your brand, your story, and your dreams.
              Every event we craft blends innovation, technology, and artistry.
            </p>

            <h2 className="fw-semibold mb-3" style={{ color: "#0d6efd" }}>
              Why Choose EventAra?
            </h2>
            <ul className="text-light">
              <li>Professional and experienced event planners</li>
              <li>Customized solutions for every occasion</li>
              <li>Creative designs with modern technology</li>
              <li>Commitment to quality and on-time delivery</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-5">
          
        </div>
      </div>
    </section>
  );
}

export default About;

