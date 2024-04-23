import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookings } from "../../../data/bookings";
import { delayData } from "../delay";

export const getBookingsThunk = createAsyncThunk("bookings/getBookings", async () => {
    const request = await delayData(bookings);
    return request;
})