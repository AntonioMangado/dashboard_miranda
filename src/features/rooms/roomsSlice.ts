import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { Room } from '../../../lib/types';
import type { RootState } from '../../app/store';
import { createRoomThunk, deleteRoomThunk, getRoomsThunk, updateRoomThunk, getRoomThunk } from './roomsThunk';

interface RoomsState {
    data: {
        rooms: Room[];
        room: Room | null;
    };
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
}

const initialState: RoomsState = {
    data: {
        rooms: [],
        room: null
    },
    status: 'idle',
    error: null
};

export const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRoomsThunk.fulfilled, (state, action: PayloadAction<Room[]>) => {
                state.status = "fulfilled";
                state.data.rooms = action.payload;
            })
            .addCase(getRoomThunk.fulfilled, (state, action: PayloadAction<Room>) => {
                state.status = "fulfilled";
                state.data.room = action.payload;
            })
            .addCase(deleteRoomThunk.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "fulfilled";
                state.data.rooms = state.data.rooms.filter(room => room.roomID !== action.payload);
            })
            .addCase(updateRoomThunk.fulfilled, (state, action: PayloadAction<Room>) => {
                state.status = "fulfilled";
                state.data.room = action.payload;
            })
            .addCase(createRoomThunk.fulfilled, (state, action: PayloadAction<Room>) => {
                state.status = "fulfilled";
                state.data.rooms.push(action.payload);
            })
            .addMatcher(
                (action) =>
                    [getRoomsThunk.pending, getRoomThunk.pending, deleteRoomThunk.pending, updateRoomThunk.pending, createRoomThunk.pending].includes(action.type) ||
                    [getRoomsThunk.rejected, getRoomThunk.rejected, deleteRoomThunk.rejected, updateRoomThunk.rejected, createRoomThunk.rejected].includes(action.type),
                (state, action: AnyAction) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            )
    }
});

export const getRoomsData = (state: RootState) => state.rooms.data.rooms;
export const getRoomData = (state: RootState) => state.rooms.data.room;
export const getRoomsStatus = (state: RootState) => state.rooms.status;
export const getRoomsError = (state: RootState) => state.rooms.error;