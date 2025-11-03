import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addBookingAPI } from "../service/allAPI";

function BookEvent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    requirements: "",
  });

  const events = [
    {
      id: 1,
      title: "Wedding Ceremony",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
      description: "Plan your dream wedding with premium arrangements.",
    },
    {
      id: 2,
      title: "Birthday Party",
      image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=60",
      description: "Make birthdays unforgettable with fun themes and decor.",
    },
    {
      id: 3,
      title: "Baptism Event",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=60",
      description: "Organize a peaceful and joyous baptism ceremony.",
    },
    {
      id: 4,
      title: "Corporate Event",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=60",
      description: "Professional event planning for conferences and meetings.",
    },
  ];

  const handleOpenModal = (eventName) => {
    setSelectedEvent(eventName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      venue: "",
      requirements: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = { ...formData, event: selectedEvent };

    const result = await addBookingAPI(bookingData);

    if (result.status >= 200 && result.status < 300) {
      alert("✅ Event booked successfully!");
      handleCloseModal();
    } else {
      alert("❌ Failed to book event. Please try again.");
    }
  };

  return (
    <>
      <div className="container py-5 mt-5" style={{ backgroundColor: "white" }}>
        <h2 className="text-center fw-bold mb-5 text-dark">
          <span className="text-primary">Book</span> Your Event
        </h2>

        {/* Event Cards */}
        <div className="row g-4">
          {events.map((event) => (
            <div className="col-md-3" key={event.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="card-text text-muted">{event.description}</p>
                  <button
                    className="btn btn-primary text-light"
                    onClick={() => handleOpenModal(event.title)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-dark text-light">
                <h5 className="modal-title">Book {selectedEvent}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {["name", "email", "phone", "date", "venue"].map((field) => (
                    <div className="mb-3" key={field}>
                      <label className="form-label fw-semibold text-capitalize">
                        {field === "date" ? "Event Date" : field}
                      </label>
                      <input
                        type={field === "date" ? "date" : field === "email" ? "email" : "text"}
                        name={field}
                        className="form-control"
                        value={formData[field]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))}

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Additional Requirements
                    </label>
                    <textarea
                      name="requirements"
                      className="form-control"
                      rows="3"
                      value={formData.requirements}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookEvent;
