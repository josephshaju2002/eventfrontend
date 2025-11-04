import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


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
          <Link to={"/works"}><button className="btn btn-outline-light btn-lg mt-4">Explore Our Work</button></Link>
        </div>
      </section>

 {/* ===== Our Works Section ===== */}
<section id="work" className="work-section py-5 text-light text-center">
  <div className="container">
    <h2 className="fw-bold mb-3">Our Expertise</h2>
    <p className="subtitle mb-5">
      We craft unforgettable experiences filled with style, elegance, and emotion.
    </p>

    <div className="row g-4">
      <div className="col-md-4">
        <div className="card work-card h-100 text-light">
          <div className="card-body">
            <div className="icon mb-3">💍</div>
            <h5 className="card-title">Weddings</h5>
            <p className="card-text">
              Turning vows into memories — with floral dreams, love lights, and unforgettable celebrations.
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
              Classy, impactful, and tailored to your brand — from conferences to product launches.
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
              Parties and moments that shimmer with joy, laughter, and unforgettable decor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== Customer Reviews Section ===== */}
<section id="reviews" className="reviews-section py-5 text-center text-dark">
  <div className="container">
    <h2 className="fw-bold mb-4">What Our Clients Say</h2>
    <p className="review-subtitle mb-5">Real stories from our happy clients 💫</p>

    <div className="row g-4">
      <div className="col-md-4">
        <div className="review-card p-4 h-100 shadow-sm">
          <p className="review-text">
            “EventAra made our wedding a fairytale! The décor and attention to detail were beyond perfect.”
          </p>
          <h6 className="mt-3 text-gold">— Anjali & Rohit</h6>
        </div>
      </div>

      <div className="col-md-4">
        <div className="review-card p-4 h-100 shadow-sm">
          <p className="review-text">
            “Our corporate gala was executed flawlessly. Professional, elegant, and inspiring.”
          </p>
          <h6 className="mt-3 text-gold">— Global Tech Pvt. Ltd.</h6>
        </div>
      </div>

      <div className="col-md-4">
        <div className="review-card p-4 h-100 shadow-sm">
          <p className="review-text">
            “Our anniversary night was magical — EventAra truly knows how to make memories shine.”
          </p>
          <h6 className="mt-3 text-gold">— Meera & Arjun</h6>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
