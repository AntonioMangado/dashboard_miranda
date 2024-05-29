import { createSlice } from '@reduxjs/toolkit';
import { createMemberThunk, deleteMemberThunk, getMemberThunk, getStaffThunk, updateMemberThunk } from './usersThunk';

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: {
            users: [],
            user: null
        },
        status: 'idle',
        error: null
    },
    reducers: {
        resetErrorU: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStaffThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.users = action.payload;
            })
            .addCase(getMemberThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.user = action.payload;
            })
            .addCase(createMemberThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.users.push(action.payload);
            })
            .addCase(updateMemberThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.user = action.payload;
            })
            .addCase(deleteMemberThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.users = state.data.users.filter(user => user.employeeId !== action.payload);
            })
            .addCase(getStaffThunk.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addMatcher(
                (action) => 
                    [getStaffThunk.pending, getMemberThunk.pending, createMemberThunk.pending, updateMemberThunk.pending, deleteMemberThunk.pending].includes(action.type) ||
                    [getMemberThunk.rejected, createMemberThunk.rejected, updateMemberThunk.rejected, deleteMemberThunk.rejected].includes(action.type),
                (state, action) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            );
    }
});

export const { resetErrorU } = usersSlice.actions;
export const getUsersData = (state) => state.users.data.users;
export const getUserData = (state) => state.users.data.user;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;