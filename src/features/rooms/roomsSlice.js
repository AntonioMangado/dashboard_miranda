import { createSlice } from '@reduxjs/toolkit';
import { createRoomThunk, deleteRoomThunk, getRoomsThunk, getRoomThunk, updateRoomThunk } from './roomsThunk';

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
    reducers: {
        resetErrorR: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRoomsThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.rooms = action.payload;
            })
            .addCase(getRoomThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.room = action.payload;
            })
            .addCase(deleteRoomThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(updateRoomThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.room = action.payload;
            })
            .addCase(createRoomThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getRoomsThunk.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addMatcher(
                (action) =>
                    [getRoomsThunk.pending, getRoomThunk.pending, deleteRoomThunk.pending, updateRoomThunk.pending, createRoomThunk.pending].includes(action.type) ||
                    [getRoomThunk.rejected, deleteRoomThunk.rejected, updateRoomThunk.rejected, createRoomThunk.rejected].includes(action.type),
                (state, action) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            )
    }
});

export const { resetErrorR } = roomsSlice.actions;
export const getRoomsData = (state) => state.rooms.data.rooms;
export const getRoomData = (state) => state.rooms.data.room;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;