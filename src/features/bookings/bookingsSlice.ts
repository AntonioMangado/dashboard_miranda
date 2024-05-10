import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { Booking } from '../../../lib/types';
import type { RootState } from '../../app/store';
import { createBookingThunk, deleteBookingThunk, getBookingsThunk, getBookingThunk, updateBookingThunk } from './bookingsThunk';

interface BookingsState {
    data: {
        bookings: Booking[];
        booking: Booking | null;
    };
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
}

const initialState: BookingsState = {
    data: {
        bookings: [],
        booking: null
    },
    status: 'idle',
    error: null
};

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBookingsThunk.fulfilled, (state, action: PayloadAction<Booking[]>) => {
                state.status = "fulfilled";
                state.data.bookings = action.payload;
            })
            .addCase(getBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = "fulfilled";
                state.data.booking = action.payload;
            })
            .addCase(deleteBookingThunk.fulfilled, (state, action: PayloadAction<number>) => {
                state.status = "fulfilled";
                state.data.bookings = state.data.bookings.filter(booking => booking.booking_id !== action.payload);
            })
            .addCase(updateBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = "fulfilled";
                state.data.booking = action.payload;
            })
            .addCase(createBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = "fulfilled";
                state.data.bookings.push(action.payload);
            })
            .addMatcher(
                (action) => 
                    [getBookingsThunk.pending, getBookingThunk.pending, deleteBookingThunk.pending, updateBookingThunk.pending, createBookingThunk.pending].includes(action.type) ||
                    [getBookingsThunk.rejected, getBookingThunk.rejected, deleteBookingThunk.rejected, updateBookingThunk.rejected, createBookingThunk.rejected].includes(action.type),
                (state, action: AnyAction) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            );
    }
});

export const getBookingsData = (state: RootState) => state.bookings.data.bookings;
export const getBookingData = (state: RootState) => state.bookings.data.booking;
export const getBookingsStatus = (state: RootState) => state.bookings.status;
export const getBookingsError = (state: RootState) => state.bookings.error;