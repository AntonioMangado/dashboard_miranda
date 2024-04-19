import React from "react";
import { useParams } from "react-router-dom";
import NotificationBar from "../NotificationBar";
import RoomDetailsContent from "./RoomDetailsContent";

const RoomDetails = () => {
  const { id } = useParams();
  return (
  <>
    <NotificationBar title="Room Details" />
    <RoomDetailsContent id={id} />
  </>
  );
};

export default RoomDetails;
