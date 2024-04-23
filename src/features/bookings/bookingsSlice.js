import { createSlice } from '@reduxjs/toolkit';
import { getBookingsThunk } from './bookingsThunk';

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
            .addCase(getBookingsThunk.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getBookingsThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.bookings = action.payload;
            })
            .addCase(getBookingsThunk.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    }
});

export const getBookingsData = (state) => state.bookings.data.bookings;
export const getBookingData = (state) => state.bookings.data.booking;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;