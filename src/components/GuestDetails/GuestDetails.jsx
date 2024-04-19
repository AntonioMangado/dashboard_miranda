import React from "react";
import { useParams } from "react-router-dom";

const GuestDetails = () => {

  const { id } = useParams();

  return <div>GuestDetails - {id}</div>;
};

export default GuestDetails;
