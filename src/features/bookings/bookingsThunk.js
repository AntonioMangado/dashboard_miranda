import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/fetchData";

export const getBookingsThunk = createAsyncThunk("bookings/getBookings", async () => {
    const request = await fetchData('/bookings');
    return request;
})

export const getBookingThunk = createAsyncThunk("bookings/getBooking", async (id) => {
    const request = await fetchData(`/booking/${id}`);
    return request;
})

export const deleteBookingThunk = createAsyncThunk("bookings/deleteBooking", async (id) => {
    const request = await fetchData(`/booking/${id}`, 'DELETE');
    return request;
})

export const updateBookingThunk = createAsyncThunk("bookings/updateBooking", async (id, data) => {
    const request = await fetchData(`/booking/${id}`, 'PATCH', data);
    return request;
})

export const createBookingThunk = createAsyncThunk("bookings/createBooking", async (data) => {
    const request = await fetchData(`/bookings`, 'POST', data);
    return request;
})