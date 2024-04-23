import { createSlice } from '@reduxjs/toolkit';
import { getStaffThunk } from './usersThunk';

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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStaffThunk.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getStaffThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.users = action.payload;
            })
            .addCase(getStaffThunk.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    }
});

export const getUsersData = (state) => state.users.data.users;
export const getUserData = (state) => state.users.data.user;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;