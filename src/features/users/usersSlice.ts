import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { Staff } from '../../../lib/types';
import type { RootState } from '../../app/store';
import { createMemberThunk, deleteMemberThunk, getMemberThunk, getStaffThunk, updateMemberThunk } from './usersThunk';

interface UsersState {
    data: {
        users: Staff[];
        user: Staff | null;
    };
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
}

const initialState: UsersState = {
    data: {
        users: [],
        user: null
    },
    status: 'idle',
    error: null
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStaffThunk.fulfilled, (state, action: PayloadAction<Staff[]>) => {
                state.status = "fulfilled";
                state.data.users = action.payload;
            })
            .addCase(getMemberThunk.fulfilled, (state, action: PayloadAction<Staff>) => {
                state.status = "fulfilled";
                state.data.user = action.payload;
            })
            .addCase(createMemberThunk.fulfilled, (state, action: PayloadAction<Staff>) => {
                state.status = "fulfilled";
                state.data.users.push(action.payload);
            })
            .addCase(updateMemberThunk.fulfilled, (state, action: PayloadAction<Staff>) => {
                state.status = "fulfilled";
                state.data.user = action.payload;
            })
            .addCase(deleteMemberThunk.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "fulfilled";
                state.data.users = state.data.users.filter(user => user.employeeId !== action.payload);
            })
            .addMatcher(
                (action) => 
                    [getStaffThunk.pending, getMemberThunk.pending, createMemberThunk.pending, updateMemberThunk.pending, deleteMemberThunk.pending].includes(action.type) ||
                    [getStaffThunk.rejected, getMemberThunk.rejected, createMemberThunk.rejected, updateMemberThunk.rejected, deleteMemberThunk.rejected].includes(action.type),
                (state, action: AnyAction) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            );
    }
});

export const getUsersData = (state: RootState) => state.users.data.users;
export const getUserData = (state: RootState) => state.users.data.user;
export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersError = (state: RootState) => state.users.error;