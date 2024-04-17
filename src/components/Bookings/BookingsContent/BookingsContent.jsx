import { useState } from "react";
import styled from "styled-components"
import Filters from "../../Filters"
import Table from "../../Table"
const bookings = [
  {
    "guest": {
      "name": "John",
      "surname": "Doe"
    },
    "booking_id": 1,
    "order_date": "2024-04-17",
    "check_in": "2024-05-01",
    "check_out": "2024-05-05",
    "special_request": "Non-smoking room",
    "room_type": "Single Bed",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Jane",
      "surname": "Smith"
    },
    "booking_id": 2,
    "order_date": "2024-04-18",
    "check_in": "2024-06-10",
    "check_out": "2024-06-15",
    "special_request": "Ocean view",
    "room_type": "Double Bed",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Emily",
      "surname": "Johnson"
    },
    "booking_id": 3,
    "order_date": "2024-04-19",
    "check_in": "2024-07-20",
    "check_out": "2024-07-25",
    "special_request": "Early check-in",
    "room_type": "Double Superior",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Michael",
      "surname": "Williams"
    },
    "booking_id": 4,
    "order_date": "2024-04-20",
    "check_in": "2024-08-05",
    "check_out": "2024-08-10",
    "special_request": "King size bed",
    "room_type": "Suite",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Sarah",
      "surname": "Brown"
    },
    "booking_id": 5,
    "order_date": "2024-04-21",
    "check_in": "2024-09-15",
    "check_out": "2024-09-20",
    "special_request": "High floor",
    "room_type": "Single Bed",
    "status": "pending"
  },
  {
    "guest": {
      "name": "David",
      "surname": "Jones"
    },
    "booking_id": 6,
    "order_date": "2024-04-22",
    "check_in": "2024-10-10",
    "check_out": "2024-10-15",
    "special_request": "Late check-out",
    "room_type": "Double Bed",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Laura",
      "surname": "Wilson"
    },
    "booking_id": 7,
    "order_date": "2024-04-23",
    "check_in": "2024-11-01",
    "check_out": "2024-11-05",
    "special_request": "Pool view",
    "room_type": "Double Superior",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Chris",
      "surname": "Taylor"
    },
    "booking_id": 8,
    "order_date": "2024-04-24",
    "check_in": "2024-12-10",
    "check_out": "2024-12-15",
    "special_request": "Adjoining rooms",
    "room_type": "Suite",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Emma",
      "surname": "Harris"
    },
    "booking_id": 9,
    "order_date": "2024-04-25",
    "check_in": "2025-01-20",
    "check_out": "2025-01-25",
    "special_request": "Room with a balcony",
    "room_type": "Single Bed",
    "status": "pending"
  },
  {
    "guest": {
      "name": "Tom",
      "surname": "Clark"
    },
    "booking_id": 10,
    "order_date": "2024-04-26",
    "check_in": "2025-02-15",
    "check_out": "2025-02-20",
    "special_request": "Child-friendly amenities",
    "room_type": "Double Bed",
    "status": "pending"
  }
];

const StyledBookingsContainer = styled.div`
  padding: 35px;
  overflow-y: auto;
`

const BookingsContent = () => {


  const [bookingData, setBookingData] = useState(bookings)

  const cols = [
    {property: 'name', label: 'Name', display: (data) => (
      <a href={`/bookings/${data.booking_id}`}>
        <p>{data.guest.name} {data.guest.surname}</p>
      </a>
    )},
    {property: 'order_date', label: 'Order Date'},
    {property: 'check_in', label: 'Check In'},
    {property: 'check_out', label: 'Check Out'},
    {property: 'special_request', label: 'Special Request'},
    {property: 'room_type', label: 'Room Type'},
    {property: 'status', label: 'Status'}
  ]
  
  return (
  <StyledBookingsContainer>
    <Filters setBookingData={setBookingData} bookingData={bookingData}/>
    <Table cols={cols} data={bookingData}/>
  </StyledBookingsContainer>
  );
};

export default BookingsContent;
