import React from "react";
import { useNavigate } from "react-router-dom";

function Works() {
  const navigate = useNavigate();

  const works = [
    {
      title: "Wedding Events",
      img: "https://i.pinimg.com/originals/54/11/66/541166260720a890f0d0022e0c677a36.jpg",
      text: "Elegant and unforgettable weddings planned with perfection.",
      link: "/works/wedding",
    },
    {
      title: "Birthday Parties",
      img: "https://tse3.mm.bing.net/th/id/OIP.MUmKuDvJiLFgvamXhA6mfgHaE8?pid=Api&P=0&h=180",
      text: "Joyful and colorful birthday celebrations for every age group.",
      link: "/works/birthday",
    },
    {
      title: "Baptism Events",
      img: "https://tse2.mm.bing.net/th/id/OIP.2XeUNn7Pvwcgm3MVRm-e0AHaE8?pid=Api&P=0&h=180",
      text: "Cherished baptism ceremonies arranged with care and grace.",
      link: "/works/baptism",
    },
    {
      title: "Corporate Events",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
      text: "Professional conferences, product launches, and team gatherings.",
      link: "/works/corporate",
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#000", minHeight: "100%" }}
    >
      <div className="container text-white">
        <h1 className="text-center fw-bold mb-5 mt-5" style={{ color: "#0d6efd" }}>
          Our Works
        </h1>

        <div className="row g-4">
          {works.map((work, index) => (
            <div className="col-md-3" key={index}>
              <div className="card bg-dark text-light shadow-lg border-0 h-100">
                <img
                  src={work.img} className="card-img-top" alt={work.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title" style={{ color: "#0d6efd" }}>
                    {work.title}
                  </h4>
                  <p className="card-text flex-grow-1">{work.text}</p>
                  <button
                    className="btn btn-primary mt-3"
                    style={{ borderRadius: "25px" }}
                    onClick={() => navigate(work.link)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
