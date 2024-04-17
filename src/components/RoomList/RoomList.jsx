import React from "react";
import NotificationBar from "../NotificationBar";
import RoomsContent from "./RoomsContent";

const RoomList = () => {
  return (
  <>
    <NotificationBar title="Rooms" />
    <RoomsContent />
  </>
  );
};

export default RoomList;
