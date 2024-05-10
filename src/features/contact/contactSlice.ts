import { createSlice, PayloadAction, AnyAction  } from '@reduxjs/toolkit';
import { Review } from '../../../lib/types';
import type { RootState } from '../../app/store';
import { createReviewThunk, deleteReviewThunk, getReviewsThunk, getReviewThunk, updateReviewThunk } from './contactThunk';

interface ReviewsState {
    data: {
        reviews: Review[];
        review: Review | null;
    };
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
}

const initialState: ReviewsState = {
    data: {
        reviews: [],
        review: null
    },
    status: 'idle',
    error: null
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsThunk.fulfilled, (state, action: PayloadAction<Review[]>) => {
                state.status = "fulfilled";
                state.data.reviews = action.payload;
            })
            .addCase(getReviewThunk.fulfilled, (state, action: PayloadAction<Review>) => {
                state.status = "fulfilled";
                state.data.review = action.payload;
            })
            .addCase(createReviewThunk.fulfilled, (state, action: PayloadAction<Review>) => {
                state.status = "fulfilled";
                state.data.reviews.push(action.payload);
            })
            .addCase(deleteReviewThunk.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "fulfilled";
                state.data.reviews = state.data.reviews.filter(review => review.orderId !== action.payload);
            })
            .addCase(updateReviewThunk.fulfilled, (state, action: PayloadAction<Review>) => {
                state.status = "fulfilled";
                state.data.review = action.payload;
            })
            .addMatcher(
                (action) => 
                    [getReviewsThunk.pending, getReviewThunk.pending, createReviewThunk.pending, deleteReviewThunk.pending, updateReviewThunk.pending].includes(action.type) ||
                    [getReviewsThunk.rejected, getReviewThunk.rejected, createReviewThunk.rejected, deleteReviewThunk.rejected, updateReviewThunk.rejected].includes(action.type),
                (state, action: AnyAction) => {
                    state.status = action.type.includes('pending') ? "pending" : "rejected";
                    if (action.type.includes('rejected')) {
                        state.error = action.error.message;
                    }
                }
            );
    }
});

export const getReviewsData = (state: RootState) => state.reviews.data.reviews;
export const getReviewData = (state: RootState) => state.reviews.data.review;
export const getReviewsStatus = (state: RootState) => state.reviews.status;
export const getReviewsError = (state: RootState) => state.reviews.error;