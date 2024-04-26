import { configureStore } from '@reduxjs/toolkit'
import { bookingsSlice } from "../features/bookings/bookingsSlice";
import { roomsSlice } from "../features/rooms/roomsSlice";
import { usersSlice } from "../features/users/usersSlice";
import { reviewsSlice } from "../features/contact/contactSlice";

export const store = configureStore({
    reducer: {
        bookings: bookingsSlice.reducer,
        users: usersSlice.reducer,
        rooms: roomsSlice.reducer,
        reviews: reviewsSlice.reducer
    }
});