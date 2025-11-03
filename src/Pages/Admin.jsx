import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { FaEnvelope, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import Swal from "sweetalert2";
import { getAllBookingsAPI, deleteBookingAPI } from "../service/allAPI"; // ✅ both APIs

function Admin() {
  const [view, setView] = useState("home");
  const [bookings, setBookings] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", image: "" });

  // ✅ Fetch all bookings
  const getAllBookings = async () => {
    try {
      const result = await getAllBookingsAPI();
      if (result.status >= 200 && result.status < 300) {
        setBookings(result.data);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  // ✅ Delete (Confirm) booking
  const handleConfirmBooking = async (id) => {
    Swal.fire({
      title: "Confirm this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteBookingAPI(id);
          if (res.status >= 200 && res.status < 300) {
            Swal.fire("Confirmed!", "Booking has been confirmed.", "success");
            getAllBookings(); // refresh after delete
          }
        } catch (error) {
          Swal.fire("Error", "Failed to confirm booking.", "error");
          console.error(error);
        }
      }
    });
  };

  // Fetch bookings only when Bookings view is active
  useEffect(() => {
    if (view === "bookings") {
      getAllBookings();
    }
  }, [view]);

  // Dummy events for now
  const events = [
    {
      id: 1,
      name: "Music Fest",
      date: "2025-12-20",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Birthday Bash",
      date: "2026-01-10",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        className="fw-bold"
        variant="h3"
        sx={{ textAlign: "center", mb: 5, pt: 5, mt: 5 }}
      >
        ADMIN DASHBOARD
      </Typography>

      {/* HOME */}
      {view === "home" && (
        <Box sx={{ mt: 5, px: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Messages */}
            <Grid item xs={12} sm={6} md={4}>
              <Box className="shadow rounded p-5 text-center">
                <FaEnvelope className="fs-1 mb-2 text-primary" />
                <Typography sx={{ mt: 2 }} variant="h5" fontWeight="bold">
                  MESSAGES
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  View messages from users.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#2620efff",
                    "&:hover": { backgroundColor: "#1a0c86ff" },
                  }}
                  onClick={() => setView("messages")}
                >
                  Go to Messages
                </Button>
              </Box>
            </Grid>

            {/* BOOKINGS */}
            <Grid item xs={12} sm={6} md={4}>
              <Box className="shadow rounded p-5 text-center">
                <FaCalendarAlt className="fs-1 mb-2 text-success" />
                <Typography sx={{ mt: 2 }} variant="h5" fontWeight="bold">
                  BOOKINGS
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Check all event bookings.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#2620efff",
                    "&:hover": { backgroundColor: "#1a0c86ff" },
                  }}
                  onClick={() => setView("bookings")}
                >
                  Go to Bookings
                </Button>
              </Box>
            </Grid>

            {/* EVENTS */}
            <Grid item xs={12} sm={6} md={4}>
              <Box className="shadow rounded p-5 text-center">
                <FaClipboardList className="fs-1 mb-2 text-warning" />
                <Typography sx={{ mt: 2 }} variant="h5" fontWeight="bold">
                  MANAGE EVENTS
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Add, edit or delete upcoming events.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#2620efff",
                    "&:hover": { backgroundColor: "#1a0c86ff" },
                  }}
                  onClick={() => setView("events")}
                >
                  Go to Events
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* BOOKINGS SECTION */}
      {view === "bookings" && (
       <Box>
  <Button variant="contained" sx={{ mb: 3 }} onClick={() => setView("home")}>
    ← Back
  </Button>
  <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
    All Bookings
  </Typography>

  {bookings.length === 0 ? (
    <Typography textAlign="center">No bookings found.</Typography>
  ) : (
    bookings.map((booking) => (
      <Card
        key={booking.id}
        sx={{
          mb: 2,
          p: 2,
          border: "2px solid #4842edff",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography variant="h6">{booking.name}</Typography>
          <Typography>Email: {booking.email}</Typography>
          <Typography>Phone: {booking.phone}</Typography>
          <Typography>Event: {booking.event}</Typography>
          <Typography>Date: {booking.date}</Typography>
          <Typography>Venue: {booking.venue}</Typography>
          <Typography>Requirements: {booking.requirements}</Typography>

          {/* ✅ Confirm Button aligned to right */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleConfirmBooking(booking.id)}
            >
              Confirm Booking
            </Button>
          </Box>
        </CardContent>
      </Card>
    ))
  )}
</Box>

      )}

      {/* EVENTS SECTION */}
      {view === "events" && (
        <Box>
          <Button variant="contained" sx={{ mb: 3 }} onClick={() => setView("home")}>
            ← Back
          </Button>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
            Add New Event
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 3, gap: 2 }}>
            <TextField
              label="Event Name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
            <TextField
              label="Date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <TextField
              label="Image URL"
              value={newEvent.image}
              onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
            />
            <Button variant="contained">Add Event</Button>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {events.map((e) => (
              <Grid item xs={12} sm={6} md={4} key={e.id}>
                <Card sx={{ p: 2, border: "1px solid #ddd", borderRadius: "15px" }}>
                  <Typography variant="h6">{e.name}</Typography>
                  <Typography>Date: {e.date}</Typography>
                  <img
                    src={e.image}
                    alt={e.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginTop: "10px",
                    }}
                  />
                  <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                    <Button variant="contained" color="error" fullWidth>
                      Delete
                    </Button>
                    <Button variant="contained" fullWidth>
                      Edit
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Admin;
