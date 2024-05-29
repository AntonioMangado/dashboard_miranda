import React from "react";
import NotificationBar from "../NotificationBar";
import NewRoomContent from "./NewRoomContent";

const NewRoom = () => {
  return (
    <>
      <NotificationBar title="Creating a new room" />
      <NewRoomContent />
    </>
    );
};

export default NewRoom;
