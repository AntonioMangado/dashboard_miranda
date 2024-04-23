import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        data: {
            rooms: [],
            room: null
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: {}
});