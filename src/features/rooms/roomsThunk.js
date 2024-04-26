import { createAsyncThunk } from "@reduxjs/toolkit";
import { rooms } from "../../../data/rooms";
import { delayData } from "../delay";

export const getRoomsThunk = createAsyncThunk("rooms/getRooms", async () => {
    const request = await delayData(rooms);
    return request;
})

export const getRoomThunk = createAsyncThunk("rooms/getRoom", async (id) => {
    const request = await delayData(rooms.find(room => room.roomID == id));
    return request;
})

export const deleteRoomThunk = createAsyncThunk("rooms/deleteRoom", async (id) => {
    await delayData();
    return id;
})

export const updateRoomThunk = createAsyncThunk("rooms/updateRoom", async (room) => {
    await delayData();
    return room;
})

export const createRoomThunk = createAsyncThunk("rooms/createRoom", async (room) => {
    await delayData();
    return room;
})
