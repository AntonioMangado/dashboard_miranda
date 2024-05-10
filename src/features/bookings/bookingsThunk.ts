import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookings } from "../../../data/bookings";
import { delayData } from "../delay";
import { Booking } from '../../../lib/types';

export const getBookingsThunk = createAsyncThunk("bookings/getBookings", async (): Promise<Booking[]> => {
    const request = await delayData(bookings);
    return request;
})

export const getBookingThunk = createAsyncThunk("bookings/getBooking", async (id: number): Promise<Booking> => {
    const request = await delayData(bookings.find(booking => booking.booking_id == id));
    return request;
})

export const deleteBookingThunk = createAsyncThunk("bookings/deleteBooking", async (id: number): Promise<number> => {
    await delayData(id);
    return id;
})

export const updateBookingThunk = createAsyncThunk("bookings/updateBooking", async (data: Booking): Promise<Booking> => {
    await delayData(data);
    return data;
})

export const createBookingThunk = createAsyncThunk("bookings/createBooking", async (data: Booking): Promise<Booking> => {
    await delayData(data);
    return data;
})