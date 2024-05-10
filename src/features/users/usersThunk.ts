import { createAsyncThunk } from "@reduxjs/toolkit";
import { staff } from "../../../data/staff";
import { delayData } from "../delay";
import { Staff } from '../../../lib/types';

export const getStaffThunk = createAsyncThunk("staff/getStaff", async () => {
    const request = await delayData(staff);
    return request;
})

export const getMemberThunk = createAsyncThunk("staff/getMember", async (id: string) => {
    const request = await delayData(staff.find(member => member.employeeId == id));
    return request;
})

export const createMemberThunk = createAsyncThunk("staff/createMember", async (member: Staff) => {
    await delayData(member);
    return member;
})

export const updateMemberThunk = createAsyncThunk("staff/updateMember", async (member: Staff) => {
    await delayData(member);
    return member;
})

export const deleteMemberThunk = createAsyncThunk("staff/deleteMember", async (id: string) => {
    await delayData(id);
    return id;
})