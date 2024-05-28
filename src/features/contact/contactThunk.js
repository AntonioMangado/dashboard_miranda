import { createAsyncThunk } from "@reduxjs/toolkit";
import { reviews } from "../../../data/reviews";
import { delayData } from "../delay";
import { fetchData } from "../../utils/fetchData";

export const getReviewsThunk = createAsyncThunk("reviews/getReviews", async () => {
    const request = await fetchData('/reviews');
    return request;;
})

export const getReviewThunk = createAsyncThunk("reviews/getReview", async (id) => {
    const request = await fetchData(`/review/${id}`);
    return request;
})

export const createReviewThunk = createAsyncThunk("reviews/createReview", async (review) => {
    await delayData();
    return review;
})

export const updateReviewThunk = createAsyncThunk("reviews/updateReview", async (review) => {
    await delayData();
    return review;
})

export const deleteReviewThunk = createAsyncThunk("reviews/deleteReview", async (id) => {
    await delayData();
    return id;
})