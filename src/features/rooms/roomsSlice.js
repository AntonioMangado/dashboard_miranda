import { createSlice } from '@reduxjs/toolkit';
import { getRoomsThunk } from './roomsThunk';

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
    extraReducers: (builder) => {
        builder
            .addCase(getRoomsThunk.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getRoomsThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.rooms = action.payload;
            })
            .addCase(getRoomsThunk.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    }
});

export const getRoomsData = (state) => state.rooms.data.rooms;
export const getRoomData = (state) => state.rooms.data.room;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;