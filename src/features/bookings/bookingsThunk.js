import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookings } from "../../../data/bookings";
import { delayData } from "../delay";
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
    await delayData();
    return id;
})

export const updateBookingThunk = createAsyncThunk("bookings/updateBooking", async (data) => {
    await delayData();
    return data;
})

export const createBookingThunk = createAsyncThunk("bookings/createBooking", async (data) => {
    await delayData();
    return data;
})