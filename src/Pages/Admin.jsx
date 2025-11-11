import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FaEnvelope, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import Swal from "sweetalert2";
import {
  getAllBookingsAPI,
  deleteBookingAPI,
  getAllMessagesAPI,
  deleteMessageAPI,
  getAllEventsAPI,
  addEventAPI,
  updateEventAPI,
  deleteEventAPI,
} from "../service/allAPI";

function Admin() {
  const [view, setView] = useState("home"); // home | bookings | messages | events
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [events, setEvents] = useState([]);

  // event form / edit modal state
  const [newEvent, setNewEvent] = useState({
    title: "",
    image: "",
    description: "",
  });
  const [editEvent, setEditEvent] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const getAllBookings = async () => {
    try {
      const result = await getAllBookingsAPI();
      if (result?.status >= 200 && result?.status < 300) {
        setBookings(result.data);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const getAllMessages = async () => {
    try {
      const result = await getAllMessagesAPI();
      if (result?.status >= 200 && result?.status < 300) {
        setMessages(result.data);
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  const getAllEvents = async () => {
    try {
      const result = await getAllEventsAPI();
      if (result?.status >= 200 && result?.status < 300) {
        setEvents(result.data);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  // Load relevant data when view changes
  useEffect(() => {
    if (view === "bookings") getAllBookings();
    else if (view === "messages") getAllMessages();
    else if (view === "events") getAllEvents();
  }, [view]);

  // ---------------- Bookings ----------------
  const handleConfirmBooking = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Confirm this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm it!",
    });

    if (!isConfirmed) return;

    try {
      const res = await deleteBookingAPI(id); 
      if (res?.status >= 200 && res?.status < 300) {
        Swal.fire("Confirmed!", "Booking has been confirmed.", "success");
        getAllBookings();
      } else {
        Swal.fire("Error", "Failed to confirm booking.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to confirm booking.", "error");
    }
  };

  // ---------------- Messages ----------------
  const handleDeleteMessage = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "This message will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!isConfirmed) return;

    try {
      const res = await deleteMessageAPI(id);
      if (res?.status >= 200 && res?.status < 300) {
        Swal.fire("Deleted!", "Message has been deleted.", "success");
        getAllMessages();
      } else {
        Swal.fire("Error", "Failed to delete message.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to delete message.", "error");
    }
  };

  // ---------------- Events: Add / Edit / Delete ----------------
  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.image || !newEvent.description) {
      Swal.fire("Missing fields", "Please fill all event fields.", "warning");
      return;
    }

    try {
      const res = await addEventAPI({
        title: newEvent.title,
        image: newEvent.image,
        description: newEvent.description,
      });

      if (res?.status >= 200 && res?.status < 300) {
        Swal.fire("Added!", "Event created successfully.", "success");
        setNewEvent({ title: "", image: "", description: "" });
        getAllEvents();
      } else {
        Swal.fire("Error", "Failed to add event.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to add event.", "error");
    }
  };

  const openEdit = (eventObj) => {
    setEditEvent({ ...eventObj }); // copy object to local state
    setOpenEditModal(true);
  };

  const closeEdit = () => {
    setEditEvent(null);
    setOpenEditModal(false);
  };

  const handleSaveEdit = async () => {
    if (!editEvent?.title || !editEvent?.image || !editEvent?.description) {
      Swal.fire("Missing fields", "Please fill all event fields.", "warning");
      return;
    }

    try {
      const res = await updateEventAPI(editEvent.id, {
        title: editEvent.title,
        image: editEvent.image,
        description: editEvent.description,
      });

      if (res?.status >= 200 && res?.status < 300) {
        Swal.fire("Saved!", "Event updated successfully.", "success");
        closeEdit();
        getAllEvents();
      } else {
        Swal.fire("Error", "Failed to update event.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update event.", "error");
    }
  };

  const handleDeleteEvent = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Delete this event?",
      text: "This event will be removed permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!isConfirmed) return;

    try {
      const res = await deleteEventAPI(id);
      if (res?.status >= 200 && res?.status < 300) {
        Swal.fire("Deleted!", "Event removed.", "success");
        getAllEvents();
      } else {
        Swal.fire("Error", "Failed to delete event.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to delete event.", "error");
    }
  };

  // ---------------- UI ----------------
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

            {/* Bookings */}
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

            {/* Events */}
            <Grid item xs={12} sm={6} md={4}>
              <Box className="shadow rounded p-5 text-center">
                <FaClipboardList className="fs-1 mb-2 text-warning" />
                <Typography sx={{ mt: 2 }} variant="h5" fontWeight="bold">
                  MANAGE EVENTS
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Add, edit or delete events.
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

      {/* BOOKINGS */}
      {view === "bookings" && (
        <Box>
          <Button
            variant="contained"
            sx={{ mb: 3 }}
            onClick={() => setView("home")}
          >
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
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                  >
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

      {/* MESSAGES */}
      {view === "messages" && (
        <Box>
          <Button
            variant="contained"
            sx={{ mb: 3 }}
            onClick={() => setView("home")}
          >
            ← Back
          </Button>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
            User Messages
          </Typography>
          {messages.length === 0 ? (
            <Typography textAlign="center">No messages found.</Typography>
          ) : (
            messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  mb: 2,
                  p: 2,
                  border: "2px solid #2620efff",
                  borderRadius: "20px",
                }}
              >
                <Typography variant="h6">{msg.name}</Typography>
                <Typography>Email: {msg.email}</Typography>
                <Typography>Message: {msg.message}</Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteMessage(msg.id)}
                  >
                    Delete Message
                  </Button>
                </Box>
              </Box>
            ))
          )}
        </Box>
      )}

      {/* EVENTS (Add / View / Edit / Delete) */}
      {view === "events" && (
        <Box>
          <Button
            variant="contained"
            sx={{ mb: 3 }}
            onClick={() => setView("home")}
          >
            ← Back
          </Button>
          <Typography
            className="mb-5"
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={3}
          >
            Manage All Events
          </Typography>

          {/* Add event form */}
          <Box
            sx={{
              border: "2px solid black",
              borderRadius: "20px",
              p: 3,
              mb: 5,
              mx:5,
              backgroundColor: "#f9f9ff",
            }}
          >
            <Typography
              className="py-3 fw-bold"
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Add New Event....
            </Typography>

            <Grid container spacing={7} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Event Title"
                  variant="outlined"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Image URL"
                  variant="outlined"
                  value={newEvent.image}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, image: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={1} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    height: "56px",
                    backgroundColor: "#2620efff",
                    "&:hover": { backgroundColor: "#1a0c86ff" },
                  }}
                  onClick={handleAddEvent}
                >
                  Add As New Event
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Event list */}
          {events.length === 0 ? (
            <Typography textAlign="center">No events found.</Typography>
          ) : (
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="stretch"
              sx={{ maxWidth: "1200px", margin: "0 auto" }}
            >
              {events.map((e) => (
                <Grid item xs={12} sm={6} md={6} key={e.id}>
                  <Card
                    sx={{
                      p: 2,
                      border: "1px solid #ddd",
                      borderRadius: "15px",
                      textAlign: "center",
                      height: 420,
                      width: "500px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ mb: 1, fontWeight: "bold" }}
                      >
                        {e.title}
                      </Typography>

                      <img
                        src={e.image}
                        alt={e.title}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginBottom: "10px",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: "text.secondary",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {e.description}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                      <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={() => handleDeleteEvent(e.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => openEdit(e)}
                      >
                        Edit
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}

      {/* Edit Event Dialog */}
      <Dialog open={openEditModal} onClose={closeEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Event</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              label="Title"
              fullWidth
              value={editEvent?.title || ""}
              onChange={(e) =>
                setEditEvent({ ...editEvent, title: e.target.value })
              }
            />
            <TextField
              label="Image URL"
              fullWidth
              value={editEvent?.image || ""}
              onChange={(e) =>
                setEditEvent({ ...editEvent, image: e.target.value })
              }
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={editEvent?.description || ""}
              onChange={(e) =>
                setEditEvent({ ...editEvent, description: e.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEdit}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSaveEdit}
            sx={{
              backgroundColor: "#2620efff",
              "&:hover": { backgroundColor: "#1a0c86ff" },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Admin;
