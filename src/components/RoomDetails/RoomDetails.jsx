import React from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  return <div>RoomDetails - {id}</div>;
};

export default RoomDetails;
