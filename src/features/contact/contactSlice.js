import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: "contact",
    initialState: {
        data: {
            reviews: [],
            review: null
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: {}
});