import { createSlice } from '@reduxjs/toolkit';
import { createBookingThunk, deleteBookingThunk, getBookingsThunk, getBookingThunk, updateBookingThunk } from './bookingsThunk';

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        data: {
            bookings: [],
            booking: null
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBookingsThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.bookings = action.payload;
            })
            .addCase(getBookingThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.booking = action.payload;
            })
            .addCase(deleteBookingThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.bookings = state.data.bookings.filter(booking => booking.booking_id !== action.payload);
            })
            .addCase(updateBookingThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.booking = action.payload;
            })
            .addCase(createBookingThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.bookings.push(action.payload);
            })
            .addCase(getBookingsThunk.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addMatcher(
                (action) => 
                    [getBookingsThunk.pending, getBookingThunk.pending, deleteBookingThunk.pending, updateBookingThunk.pending, createBookingThunk.pending].includes(action.type) ||
                    [getBookingThunk.rejected, deleteBookingThunk.rejected, updateBookingThunk.rejected, createBookingThunk.rejected].includes(action.type),
                (state, action) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            );
    }
});

export const getBookingsData = (state) => state.bookings.data.bookings;
export const getBookingData = (state) => state.bookings.data.booking;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;