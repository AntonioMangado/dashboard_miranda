import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookings } from "../../../data/bookings";
import { delayData } from "../delay";

export const getBookingsThunk = createAsyncThunk("bookings/getBookings", async () => {
    const request = await delayData(bookings);
    return request;
})

export const getBookingThunk = createAsyncThunk("bookings/getBooking", async (id) => {
    const request = await delayData(bookings.find(booking => booking.booking_id == id));
    console.log(request)
    return request;
})

export const deleteBookingThunk = createAsyncThunk("bookings/deleteBooking", async (id) => {
    await delayData();
    return id;
})