import React from "react";
import { useParams } from "react-router-dom";

const BookingDetails = () => {

  const { id } = useParams();
  
  return <div>BookingDetails - {id}</div>;
};

export default BookingDetails;
