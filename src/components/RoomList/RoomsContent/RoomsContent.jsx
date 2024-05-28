import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { Button } from "../../../styledComponents/Button";
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
  const [roomsData, setRoomsData] = useState(rooms || []);
  const [loading, setLoading] = useState(true)

  const initialFetch = async () => {
      await dispatch(getRoomsThunk()).unwrap();
      setRoomsData(rooms);
      setLoading(false);
  } 
  
  useEffect(() => {
    initialFetch();
  }, [loading])

  const cols = [
    {label: 'Image', property: 'image', display: (row) => <img src={row.image} alt="room"/>},
    {label: 'Room No.', property: 'roomNumber'},
    {label: 'Room ID', property: 'roomID', display: (row) => <p>{row._id}</p>},
    {label: 'Room Type', property: 'roomType'},
    {label: 'Amenities', property: 'amenities', display: (row) => row.amenities.join(', ')},
    {label: 'Price', property: 'price', display: (row) => `$${row.price}/night`},
    {label: 'Offer Price', property: 'offerPrice', display: (row) => `$${row.offerPrice}/night`},
    {label: 'Status', property: 'status', display: (data) => {
      if (data.status === 'available') {
        return <Button $success>Available</Button>
      } else {
        return <Button $error>Booked</Button>
      } 
    }}
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
