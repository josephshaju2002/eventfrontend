import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section text-center text-light d-flex flex-column justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4 fw-bold">Where Every Event Tells a Story</h1>
          <p className="lead mt-3">
            EventAra turns your dreams into breathtaking celebrations — elegant, emotional, and unforgettable.
          </p>
          <a href="#work" className="btn btn-outline-light btn-lg mt-4">Explore Our Work</a>
        </div>
      </section>

      {/* Our Work Section */}
     {/* Work Section */}
<section id="work" className="work-section py-5 text-light text-center">
  <div className="container">
    <h2 className="fw-bold mb-3">Our Expertise</h2>
    <p className="subtitle mb-5">
      Crafting unforgettable moments with creativity, precision, and heart.
    </p>

    <div className="row g-4">
      <div className="col-md-4">
        <div className="card work-card h-100 text-light">
          <div className="card-body">
            <div className="icon mb-3">💍</div>
            <h5 className="card-title">Weddings</h5>
            <p className="card-text">
              From intimate vows to grand destinations — we design weddings filled with love, emotion, and elegance.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card work-card h-100 text-light">
          <div className="card-body">
            <div className="icon mb-3">🏢</div>
            <h5 className="card-title">Corporate Events</h5>
            <p className="card-text">
              From brand launches to team galas, we blend sophistication and creativity to elevate your corporate story.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card work-card h-100 text-light">
          <div className="card-body">
            <div className="icon mb-3">🎉</div>
            <h5 className="card-title">Social Gatherings</h5>
            <p className="card-text">
              Elegant parties, milestone celebrations, and moments that leave hearts glowing — we make every event shine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Customer Reviews Section */}
      <section id="reviews" className="reviews-section py-5 text-center text-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Customer Reviews</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="review-card p-4 h-100">
                <p className="review-text">
                  “EventAra made our wedding a dream come true! Every detail was perfect — the decor, the planning, everything.”
                </p>
                <h6 className="mt-3">— Anjali & Rohit</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card p-4 h-100">
                <p className="review-text">
                  “Professional, creative, and caring. They handled our corporate event with such elegance and precision.”
                </p>
                <h6 className="mt-3">— Global Tech Pvt. Ltd.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card p-4 h-100">
                <p className="review-text">
                  “Our anniversary celebration was absolutely magical. The EventAra team truly understands emotions.”
                </p>
                <h6 className="mt-3">— Meera & Arjun</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
