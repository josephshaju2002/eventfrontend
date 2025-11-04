import React from "react";

function WeddingWorks() {
  const weddingGallery = [
    {
      title: "Beachside Wedding Setup",
      img: "https://live.staticflickr.com/7470/15916368377_d038e75166_b.jpg",
      description:
        "A romantic seaside wedding with a bluish-white sky and elegant floral decor.",
    },
    {
      title: "Royal Palace Theme",
      img: "https://tse3.mm.bing.net/th/id/OIP.Mjo6wTICwZ8_KbuzvEO-VwHaE7?pid=Api&P=0&h=180",
      description:
        "A luxurious palace-style wedding with regal interiors, chandeliers, and grand entryways.",
    },
    {
      title: "Outdoor Wedding Theme",
      img: "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2023/11/Blog-body-04.jpg",
      description:
        "An enchanting outdoor reception with greenary, artifical flowers and plants.",
    },
    {
      title: "Traditional Kerala Wedding",
      img: "https://tse3.mm.bing.net/th/id/OIP.VcxXgW6cFZV3uWUEC3K5igHaE7?pid=Api&P=0&h=180",
      description:
        "A cultural wedding with elegant traditional attire and serene temple ambiance.",
    },
    {
      title: "Modern Hall Wedding",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      description:
        "A modern, classy hall wedding featuring floral walls, LED lighting, and elegant seating.",
    },
    {
      title: "Outdoor Night Reception",
      img: "https://i.pinimg.com/originals/04/99/3b/04993b95dbe80bd16ac19f7879980616.jpg",
      description:
        "A night wedding reception with different light setups.",
    },
    {
      title: "Garden Wedding Bliss",
      img: "https://wallpapers.com/images/hd/garden-wedding-2000-x-1333-wallpaper-gd6jdwkft509eqhe.jpg",
      description:
        "An open garden wedding surrounded by flowers, fairy lights, and a romantic atmosphere.",
    },
    {
      title: "Luxury Indoor Decor",
      img: "https://cdn.shopify.com/s/files/1/0004/4630/0222/files/Statement_Lighting_-_7_Ways_To_Make_a_Statement_In_Your_Living_Room_-_LuxDeco.com.jpg?v=1563185826",
      description:
        "An elegant indoor setup featuring floral ceilings, premium lighting, and stage decor.",
    },
    {
      title: "Destination Wedding Vibes",
      img: "https://tse4.mm.bing.net/th/id/OIP.dAnLl34L_sxzHjBmpNXuogHaE7?pid=Api&P=0&h=180",
      description:
        "A stunning destination wedding setup at a resort with ocean views and tropical themes.",
    }
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#000", minHeight: "100%" }}
    >
      <div className="container text-white">
        <h1 className="text-center fw-bold mb-4 pt-5" style={{ color: "#0d6efd" }}>
          Wedding Works
        </h1>
        <p className="text-center text-secondary mb-5">
          From intimate ceremonies to grand celebrations — EventAra brings your
          dream wedding to life with elegance, precision, and passion.
        </p>

        <div className="row g-4">
          {weddingGallery.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-dark text-light border-0 shadow-lg h-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
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

export default WeddingWorks;
