import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookings } from "../../../data/bookings";
import { delayData } from "../delay";
import { Booking } from '../../../lib/types';

export const getBookingsThunk = createAsyncThunk("bookings/getBookings", async () => {
    const request = await delayData(bookings);
    return request;
})

export const getBookingThunk = createAsyncThunk("bookings/getBooking", async (id: number) => {
    const request = await delayData(bookings.find(booking => booking.booking_id == id));
    return request;
})

export const deleteBookingThunk = createAsyncThunk("bookings/deleteBooking", async (id: number) => {
    await delayData(id);
    return id;
})

export const updateBookingThunk = createAsyncThunk("bookings/updateBooking", async (data: Booking) => {
    await delayData(data);
    return data;
})

export const createBookingThunk = createAsyncThunk("bookings/createBooking", async (data: Booking) => {
    await delayData(data);
    return data;
})