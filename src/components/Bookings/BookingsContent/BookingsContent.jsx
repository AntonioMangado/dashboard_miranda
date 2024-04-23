import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Filters from "../../Filters"
import Table from "../../Table"
import { StyledLink } from "../../../styledComponents/Link"
import { bookings } from "../../../../data/bookings";

const StyledBookingsContainer = styled.div`
  padding: 35px;
  overflow-y: auto;
`

const BookingsContent = () => {


  const [bookingData, setBookingData] = useState([])

  useEffect(() => {
    setBookingData(bookings)
  }, [])

  const cols = [
    {property: 'name', label: 'Name', display: (data) => (
      <StyledLink $nomargin to={`/bookings/${data.booking_id}`}>
        <p>{data.guest.name} {data.guest.surname}</p>
      </StyledLink>
    )},
    {property: 'order_date', label: 'Order Date'},
    {property: 'check_in', label: 'Check In'},
    {property: 'check_out', label: 'Check Out'},
    {property: 'special_request', label: 'Special Request'},
    {property: 'room_type', label: 'Room Type'},
    {property: 'status', label: 'Status'}
  ]

  const filters = [
    {label: 'All Bookings', function: () => setBookingData(bookings)},
    {label: 'Check In', function: () => setBookingData(bookings.filter(booking => booking.status === 'Check In'))},
    {label: 'Check Out', function: () => setBookingData(bookings.filter(booking => booking.status === 'Check Out'))},
    {label: 'In Progress' , function: () => setBookingData(bookings.filter(booking => booking.status === 'In Progress'))}
  ]
  
  return (
  <StyledBookingsContainer>
    <Filters buttons={filters} setData={setBookingData} data={bookingData} bookings={bookings}/>
    <Table cols={cols} data={bookingData}/>
  </StyledBookingsContainer>
  );
};

export default BookingsContent;
