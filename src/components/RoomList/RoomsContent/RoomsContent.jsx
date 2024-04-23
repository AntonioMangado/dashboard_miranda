import { useState } from "react";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { rooms } from "../../../../data/rooms";

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

  const [roomsData, setRoomsData] = useState(rooms);

  

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
    {label: 'All Rooms'},
    {label: 'Available'},
    {label: 'Booked'}
  ]

  return (
  <StyledRoomsContainer>
    <Filters buttons={filters} data={roomsData} setData={setRoomsData}/>
    <Table cols={cols} data={rooms} />
  </StyledRoomsContainer>
  );
};


export default RoomsContent;
