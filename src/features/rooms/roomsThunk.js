import { createAsyncThunk } from "@reduxjs/toolkit";
import { rooms } from "../../../data/rooms";
import { delayData } from "../delay";
import { fetchData } from "../../utils/fetchData";

export const getRoomsThunk = createAsyncThunk("rooms/getRooms", async () => {
    const request = await fetchData('/rooms');
    return request;
})

export const getRoomThunk = createAsyncThunk("rooms/getRoom", async (id) => {
    const request = await fetchData(`/room/${id}`);
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
