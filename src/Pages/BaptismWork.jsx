import React from "react";

function BaptismWorks() {
  const baptismGallery = [
    {
      title: "Classic Church Baptism",
      img: "https://www.peerspace.com/resources/wp-content/uploads/Intimate-and-Warm-Church-Sanctuary-washington-dc-rental-1024x684.jpg",
      description:
        "A beautiful church baptism ceremony setup with floral arrangements and soft lighting.",
    },
    {
      title: "Outdoor Baptism Celebration",
      img: "https://livingchurch.org/wp-content/uploads/2024/04/Outdoor-Baptism.jpg",
      description:
        "An elegant open-air baptism event surrounded by greenery, family, and joy.",
    },
    {
      title: "Modern Indoor Baptism",
      img: "https://i.ytimg.com/vi/3Gr5GO0F0vE/maxresdefault.jpg",
      description:
        "A cozy indoor baptism ceremony with stylish decor, different colour theme, and refreshments.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#000", minHeight: "100vh" }}
    >
      <div className="container text-white pt-5">
        <h1 className="text-center fw-bold mb-4" style={{ color: "#0d6efd" }}>
          Baptism Works
        </h1>
        <p className="text-center text-secondary mb-5">
          At <span style={{ color: "#0d6efd" }}>EventAra</span>, we help you
          celebrate this sacred moment with love, warmth, and elegance.
        </p>

        <div className="row g-4">
          {baptismGallery.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-dark text-light border-0 shadow-lg h-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#0d6efd" }}>
                    {item.title}
                  </h5>
                  <p className="card-text text-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BaptismWorks;
