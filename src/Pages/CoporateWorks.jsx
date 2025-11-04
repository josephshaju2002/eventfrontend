import React from "react";

function CorporateWorks() {
  const corporateGallery = [
    {
      title: "Annual Conference Setup",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
      description:
        "A professional annual conference setup with modern stage design, lighting, and AV systems.",
    },
    {
      title: "Product Launch Event",
      img: "https://c8.alamy.com/comp/WA9W52/guests-attend-the-new-product-launch-event-for-huawei-honor-9x-series-smartphones-in-xian-city-northwest-chinas-shaanxi-province-23-july-2019-h-WA9W52.jpg",
      description:
        "A high-impact product launch designed to impress your audience and showcase innovation.",
    },
    {
      title: "Team Building Retreat",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      description:
        "Fun and engaging outdoor team-building events that strengthen bonds and enhance teamwork.",
    },
    {
      title: "Corporate Dinner & Awards",
      img: "https://www.luxuryrestaurantawards.com/wp-content/uploads/sites/9/2023/03/SAT_9326-scaled.jpg",
      description:
        "An elegant corporate dinner night with award ceremonies, fine dining, and premium decor.",
    },
    {
      title: "Business Seminar",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      description:
        "A well-organized seminar setup with professional seating, projection, and sound systems.",
    },
    {
      title: "Office Anniversary Celebration",
      img: "https://images.unsplash.com/photo-1588702547919-26089e690ecc",
      description:
        "Celebrate your company’s milestones with style — we design memorable anniversary events.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#000", minHeight: "100%" }}
    >
      <div className="container text-white pt-5">
        <h1 className="text-center fw-bold mb-4" style={{ color: "#0d6efd" }}>
          Corporate Works
        </h1>
        <p className="text-center text-secondary mb-5">
          <span style={{ color: "#0d6efd" }}>EventAra</span> creates elegant and
          impactful corporate events — from product launches to conferences and
          celebrations, we bring your vision to life with style and precision.
        </p>

        <div className="row g-4">
          {corporateGallery.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
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

export default CorporateWorks;
