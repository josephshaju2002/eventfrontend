import React from "react";

function BirthdayWorks() {
  const birthdayGallery = [
    {
      title: "Kids Birthday Theme",
      img: "http://jccannarbor.org/wp-content/uploads/2015/06/Birthday-Party-Picture-2.jpg",
      description:
        "A fun-filled kids’ birthday celebration with colorful balloons, games, and themed decor.",
    },
    {
      title: "Elegant Adult Party",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      description:
        "A sophisticated evening party with elegant lighting, live music, and dinner setup.",
    },
    {
      title: "Outdoor Garden Celebration",
      img: "https://cdn.greenvelope.com/blog/wp-content/uploads/colorful-outdoor-party-decor.jpeg",
      description:
        "An open-air birthday celebration surrounded by lights, laughter, and nature.",
    },
    {
      title: "Surprise Party Setup",
      img: "https://www.organizedmom.net/wp-content/uploads/2022/12/how-to-plan-a-surprise-birthday-party-000.jpg",
      description:
        "A secret surprise party with amazing decor, cake cutting, and fun moments.",
    },
    {
      title: "Milestone Birthday Event",
      img: "https://andrewrobyevents.com/wp-content/uploads/2022/04/milestone-birthday-andrew-roby-events-3-1024x683.jpg",
      description:
        "Celebrate milestone birthdays in style with customized themes and entertainment.",
    },
    {
      title: "Luxury Indoor Birthday",
      img: "https://cdn.larrywalshe.com/wp-content/uploads/2022/11/17132236/larry_walshe_studios_extravagent_birthday_party_austin_powers_groovy_baby_fun_playful_theme_flowers_london_8.jpg",
      description:
        "An elegant indoor birthday celebration with classy decor and fine dining experience.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#000", minHeight: "100vh" }}
    >
      <div className="container text-white pt-5">
        <h1 className="text-center fw-bold mb-4" style={{ color: "#0d6efd" }}>
          Birthday Works
        </h1>
        <p className="text-center text-secondary mb-5">
          At <span style={{ color: "#0d6efd" }}>EventAra</span>, we make
          birthdays unforgettable — from themed kids’ parties to elegant adult
          celebrations.
        </p>

        <div className="row g-4">
          {birthdayGallery.map((item, index) => (
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

export default BirthdayWorks;
