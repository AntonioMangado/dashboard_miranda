import { useState } from "react";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
const rooms = [
  {
    image: 'hotel-room.webp',
    roomNumber: 101,
    roomID: 'R101',
    roomType: 'Single Bed',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning'],
    price: 100,
    offerPrice: 90,
    status: 'available'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 102,
    roomID: 'R102',
    roomType: 'Double Bed',
    amenities: ['Wi-Fi', 'TV', 'Mini Bar'],
    price: 150,
    offerPrice: 135,
    status: 'available'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 103,
    roomID: 'R103',
    roomType: 'Double Superior',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Balcony'],
    price: 200,
    offerPrice: 180,
    status: 'booked'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 104,
    roomID: 'R104',
    roomType: 'Suite',
    amenities: ['Wi-Fi', 'TV', 'Mini Bar', 'Jacuzzi'],
    price: 300,
    offerPrice: 270,
    status: 'available'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 105,
    roomID: 'R105',
    roomType: 'Single Bed',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning'],
    price: 100,
    offerPrice: 90,
    status: 'available'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 106,
    roomID: 'R106',
    roomType: 'Double Bed',
    amenities: ['Wi-Fi', 'TV', 'Mini Bar'],
    price: 150,
    offerPrice: 135,
    status: 'booked'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 107,
    roomID: 'R107',
    roomType: 'Double Superior',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Balcony'],
    price: 200,
    offerPrice: 180,
    status: 'available'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 108,
    roomID: 'R108',
    roomType: 'Suite',
    amenities: ['Wi-Fi', 'TV', 'Mini Bar', 'Jacuzzi'],
    price: 300,
    offerPrice: 270,
    status: 'available'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 109,
    roomID: 'R109',
    roomType: 'Single Bed',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning'],
    price: 100,
    offerPrice: 90,
    status: 'booked'
  },
  {
    image: 'hotel-room.webp',
    roomNumber: 110,
    roomID: 'R110',
    roomType: 'Double Bed',
    amenities: ['Wi-Fi', 'TV', 'Mini Bar'],
    price: 150,
    offerPrice: 135,
    status: 'available'
  }
];

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
