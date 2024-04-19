import React from "react";
import NotificationBar from "../NotificationBar";
import BookingsContent from "./BookingsContent";

const Bookings = () => {
  return (
  <>
    <NotificationBar title="Bookings" />
    <BookingsContent />
  </>
  );
};

export default Bookings;
