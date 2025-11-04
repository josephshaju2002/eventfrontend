import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

// Get all events
export const getAllEventsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/events`, {});
};

// Add new event booking
export const addBookingAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/bookings`, reqBody);
};

// Get all event bookings 
export const getAllBookingsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/bookings`, {});
};

// Update a booking 
export const updateBookingAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${BASEURL}/bookings/${id}`, reqBody);
};

// Delete a booking 
export const deleteBookingAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/bookings/${id}`, {});
};


//  Add new message
export const addMessageAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/messages`, reqBody);
};

//  Get all messages
export const getAllMessagesAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/messages`, {});
};

export const deleteMessageAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/messages/${id}`);
};

// Add new event
export const addEventAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/events`, reqBody);
};

// Delete event
export const deleteEventAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/events/${id}`, {});
};

// Update an event
export const updateEventAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${BASEURL}/events/${id}`, reqBody);
};

