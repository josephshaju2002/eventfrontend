import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import Swal from "sweetalert2";
import { addBookingAPI, getAllEventsAPI } from "../service/allAPI";

function BookEvent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    requirements: "",
  });

  // ✅ Fetch events from JSON server
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const result = await getAllEventsAPI();
        if (result.status >= 200 && result.status < 300) {
          setEvents(result.data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };
    fetchEvents();
  }, []);

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

    try {
      const result = await addBookingAPI(bookingData);
      if (result.status >= 200 && result.status < 300) {
        Swal.fire({
          title: "Success!",
          text: "Event booked successfully!",
          icon: "success",
          confirmButtonColor: "#2a9d8f",
        });
        handleCloseModal();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to book event. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Connection Error!",
        text: "Could not connect to server.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <>
      <div
        className="container py-5 mt-5"
        style={{ backgroundColor: "white" }}
      >
        <h2 className="text-center fw-bold mb-5 text-dark">
          <span className="text-primary">Book</span> Your Event
        </h2>

        {/* Event Cards */}
        <div className="row g-4">
          {events.length > 0 ? (
            events.map((event) => (
              <div className="col-md-4" key={event.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    },
                    height: "100%",
                    border: "none",
                    backgroundColor: "white",
                  }}
                  className="text-center"
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: "center", pb: 2 }}
                    className="pb-3"
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleOpenModal(event.title)}
                      className="btn btn-primary"
                      sx={{
                        textTransform: "none",
                        px: 3,
                        borderRadius: "20px",
                        fontWeight: "bold",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#0d6efd",
                          boxShadow: "0 4px 10px rgba(13,110,253,0.4)",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">Loading events...</p>
          )}
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
                        type={
                          field === "date"
                            ? "date"
                            : field === "email"
                              ? "email"
                              : "text"
                        }
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
