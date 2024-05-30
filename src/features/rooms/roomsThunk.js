import { createAsyncThunk } from "@reduxjs/toolkit";
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
    const request = await fetchData(`/room/${id}`, 'DELETE');
    return request;
})

export const updateRoomThunk = createAsyncThunk("rooms/updateRoom", async (id, data) => {
    const request = await fetchData(`/room/${id}`, 'PATCH', data);
    return request;
})

export const createRoomThunk = createAsyncThunk("rooms/createRoom", async (data) => {
    const request = await fetchData(`/rooms`, 'POST', data);
    return request;
})
