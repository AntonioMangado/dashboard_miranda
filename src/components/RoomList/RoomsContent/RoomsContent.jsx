import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { getRoomsData, getRoomsStatus, getRoomsError } from "../../../features/rooms/roomsSlice";
import { getRoomsThunk } from "../../../features/rooms/roomsThunk";

const StyledRoomsContainer = styled.div`
      padding: 35px;
      overflow-y: auto;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
      }
`

const RoomsContent = () => {

  const dispatch = useDispatch();
  const rooms = useSelector(getRoomsData);
  const status = useSelector(getRoomsStatus);
  const error = useSelector(getRoomsError);
  const [roomsData, setRoomsData] = useState(rooms || []);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (status === "idle") {
      dispatch(getRoomsThunk());
    } else if (status === "pending") {
      setLoading(true);
    } else if (status === "fulfilled") {
      setRoomsData(rooms);
      setLoading(false);
    } else if (status === "rejected") {
      console.log(error);
      setLoading(false);
    }
  }, [status])

  const cols = [
    {label: 'Image', property: 'image', display: (row) => <img src={row.image} alt="room"/>},
    {label: 'Room Number', property: 'roomNumber'},
    {label: 'Room ID', property: 'roomID'},
    {label: 'Room Type', property: 'roomType'},
    {label: 'Amenities', property: 'amenities', display: (row) => row.amenities.join(', ')},
    {label: 'Price', property: 'price', display: (row) => `$${row.price}/night`},
    {label: 'Offer Price', property: 'offerPrice', display: (row) => `$${row.price}/night`},
    {label: 'Status', property: 'status'}
  ]

  const filters = [
    {label: 'All Rooms', action: () => setRoomsData(rooms)},
    {label: 'Available', action: () => setRoomsData(rooms.filter(room => room.status === 'available'))},
    {label: 'Booked', action: () => setRoomsData(rooms.filter(room => room.status === 'booked'))},
  ]

  return (
  <StyledRoomsContainer>
    {loading ?
      <p>Loading...</p> 
      :
      <>
        <Filters buttons={filters} data={roomsData} setData={setRoomsData} rooms={rooms}/>
        <Table cols={cols} data={roomsData} />
      </> 
    }
  </StyledRoomsContainer>
  );
};


export default RoomsContent;
