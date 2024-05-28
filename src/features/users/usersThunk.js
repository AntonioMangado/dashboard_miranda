import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayData } from "../delay";
import { fetchData } from "../../utils/fetchData";

export const getStaffThunk = createAsyncThunk("staff/getStaff", async () => {
    const request = await fetchData('/staff');
    return request;
})

export const getMemberThunk = createAsyncThunk("staff/getMember", async (id) => {
    const request = await fetchData(`/staff/${id}`);
    return request;
})

export const createMemberThunk = createAsyncThunk("staff/createMember", async (id) => {
    const request = await fetchData(`/staff/${id}`, 'DELETE');
    return request;
})

export const updateMemberThunk = createAsyncThunk("staff/updateMember", async (id, data) => {
    const request = await fetchData(`/staff/${id}`, 'PATCH', data);
    return request;
})

export const deleteMemberThunk = createAsyncThunk("staff/deleteMember", async (data) => {
    const request = await fetchData(`/staff`, 'POST', data);
    return request;
})