import { createAsyncThunk } from "@reduxjs/toolkit";
import { reviews } from "../../../data/reviews";
import { delayData } from "../delay";

export const getReviewsThunk = createAsyncThunk("reviews/getReviews", async () => {
    const request = await delayData(reviews);
    return request;
})