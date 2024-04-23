import { createAsyncThunk } from "@reduxjs/toolkit";
import { staff } from "../../../data/staff";
import { delayData } from "../delay";

export const getStaffThunk = createAsyncThunk("staff/getStaff", async () => {
    const request = await delayData(staff);
    return request;
})