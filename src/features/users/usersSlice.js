import { createSlice } from '@reduxjs/toolkit';

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
    extraReducers: {}
});