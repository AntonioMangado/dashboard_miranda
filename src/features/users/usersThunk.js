import { createAsyncThunk } from "@reduxjs/toolkit";
import { staff } from "../../../data/staff";
import { delayData } from "../delay";

export const getStaffThunk = createAsyncThunk("staff/getStaff", async () => {
    const request = await delayData(staff);
    return request;
})

export const getMemberThunk = createAsyncThunk("staff/getMember", async (id) => {
    const request = await delayData(staff.find(member => member.employeeId === id));
    return request;
})

export const createMemberThunk = createAsyncThunk("staff/createMember", async (member) => {
    await delayData();
    return member;
})

export const updateMemberThunk = createAsyncThunk("staff/updateMember", async (member) => {
    await delayData();
    return member;
})

export const deleteMemberThunk = createAsyncThunk("staff/deleteMember", async (id) => {
    await delayData();
    return id;
})