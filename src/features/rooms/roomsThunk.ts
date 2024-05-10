import { createAsyncThunk } from "@reduxjs/toolkit";
import { rooms } from "../../../data/rooms";
import { Room } from '../../../lib/types';
import { delayData } from "../delay";

export const getRoomsThunk = createAsyncThunk("rooms/getRooms", async (): Promise<Room[]> => {
    const request = await delayData(rooms);
    return request;
})

export const getRoomThunk = createAsyncThunk("rooms/getRoom", async (id: string): Promise<Room> => {
    const request = await delayData(rooms.find(room => room.roomID == id));
    return request;
})

export const deleteRoomThunk = createAsyncThunk("rooms/deleteRoom", async (id: string): Promise<string> => {
    await delayData(id);
    return id;
})

export const updateRoomThunk = createAsyncThunk("rooms/updateRoom", async (room: Room): Promise<Room> => {
    await delayData(room);
    return room;
})

export const createRoomThunk = createAsyncThunk("rooms/createRoom", async (room: Room): Promise<Room> => {
    await delayData(room);
    return room;
})
