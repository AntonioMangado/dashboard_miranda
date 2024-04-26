import { createSlice } from '@reduxjs/toolkit';
import { createReviewThunk, deleteReviewThunk, getReviewsThunk, getReviewThunk, updateReviewThunk } from './contactThunk';

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
            .addCase(getReviewsThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.reviews = action.payload;
            })
            .addCase(getReviewThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.review = action.payload;
            })
            .addCase(createReviewThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.reviews.push(action.payload);
            })
            .addCase(deleteReviewThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.reviews = state.data.reviews.filter(review => review.orderId !== action.payload);
            })
            .addCase(updateReviewThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.review = action.payload;
            })
            .addMatcher(
                (action) => 
                    [getReviewsThunk.pending, getReviewThunk.pending, createReviewThunk.pending, deleteReviewThunk.pending, updateReviewThunk.pending].includes(action.type) ||
                    [getReviewsThunk.rejected, getReviewThunk.rejected, createReviewThunk.rejected, deleteReviewThunk.rejected, updateReviewThunk.rejected].includes(action.type),
                (state, action) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            );
    }
});

export const getReviewsData = (state) => state.reviews.data.reviews;
export const getReviewData = (state) => state.reviews.data.review;
export const getReviewsStatus = (state) => state.reviews.status;
export const getReviewsError = (state) => state.reviews.error;