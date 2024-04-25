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