import React from "react";
import { useParams } from "react-router-dom";
import NotificationBar from "../NotificationBar";
import BookingDetailsContent from "./BookingDetailsContent";

const BookingDetails = () => {

  const { id } = useParams();
  console.log(id)
  
  return (
  <>
    <NotificationBar title="Booking Details" />
    <BookingDetailsContent id={id} />
  </>);
};

export default BookingDetails;
