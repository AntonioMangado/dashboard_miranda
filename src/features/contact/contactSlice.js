import { createSlice } from '@reduxjs/toolkit';
import { getReviewsThunk } from './contactThunk';

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        data: {
            reviews: [],
            review: null
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsThunk.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getReviewsThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.reviews = action.payload;
            })
            .addCase(getReviewsThunk.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    }
});

export const getReviewsData = (state) => state.reviews.data.reviews;
export const getReviewData = (state) => state.reviews.data.review;
export const getReviewsStatus = (state) => state.reviews.status;
export const getReviewsError = (state) => state.reviews.error;