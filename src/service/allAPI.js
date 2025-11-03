import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

// Add new event booking
export const addBookingAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/bookings`, reqBody);
};

// Get all event bookings (for Admin Dashboard)
export const getAllBookingsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/bookings`, {});
};

// Update a booking (if needed later)
export const updateBookingAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${BASEURL}/bookings/${id}`, reqBody);
};

// Delete a booking (if needed later)
export const deleteBookingAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/bookings/${id}`, {});
};
