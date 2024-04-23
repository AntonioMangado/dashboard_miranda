import { createSlice } from '@reduxjs/toolkit';

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
    extraReducers: {}
});