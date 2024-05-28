import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const createReviewThunk = createAsyncThunk("reviews/createReview", async (data) => {
    const request = await fetchData(`/reviews`, 'POST', data);
    return request;
})

export const updateReviewThunk = createAsyncThunk("reviews/updateReview", async (id, data) => {
    const request = await fetchData(`/review/${id}`, 'PATCH', data);
    return request;
})

export const deleteReviewThunk = createAsyncThunk("reviews/deleteReview", async (id) => {
    const request = await fetchData(`/review/${id}`, 'DELETE');
    return request;
})