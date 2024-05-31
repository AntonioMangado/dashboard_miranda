import React from "react";
import { useParams } from "react-router-dom";
import NotificationBar from "../NotificationBar";
import UpdateRoomContent from "./UpdateRoomContent";

const UpdateRoom = () => {

  const { id } = useParams();

  return (
  <>
    <NotificationBar title="Updating Room" />
    <UpdateRoomContent id={id}/>
  </>
  );
};

export default UpdateRoom;
