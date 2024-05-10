import { createAsyncThunk } from "@reduxjs/toolkit";
import { reviews } from "../../../data/reviews";
import { delayData } from "../delay";
import { Review } from '../../../lib/types';

export const getReviewsThunk = createAsyncThunk("reviews/getReviews", async (): Promise<Review[]> => {
    const request = await delayData(reviews);
    return request;
})

export const getReviewThunk = createAsyncThunk("reviews/getReview", async (id: string): Promise<Review> => {
    const request = await delayData(reviews.find(review => review.orderId === id));
    return request;
})

export const createReviewThunk = createAsyncThunk("reviews/createReview", async (review: Review): Promise<Review> => {
    await delayData(review);
    return review;
})

export const updateReviewThunk = createAsyncThunk("reviews/updateReview", async (review: Review): Promise<Review> => {
    await delayData(review);
    return review;
})

export const deleteReviewThunk = createAsyncThunk("reviews/deleteReview", async (id: string): Promise<string> => {
    await delayData(id);
    return id;
})