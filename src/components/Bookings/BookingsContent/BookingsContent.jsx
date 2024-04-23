import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components"
import Filters from "../../Filters"
import Table from "../../Table"
import { StyledLink } from "../../../styledComponents/Link"
import { getBookingsData, getBookingsStatus, getBookingsError } from "../../../features/bookings/bookingsSlice";
import { getBookingsThunk } from "../../../features/bookings/bookingsThunk";

const StyledBookingsContainer = styled.div`
  padding: 35px;
  overflow-y: auto;
`

const BookingsContent = () => {

  const dispatch = useDispatch()
  const bookings = useSelector(getBookingsData)
  const status = useSelector(getBookingsStatus)
  const error = useSelector(getBookingsError)
  const [bookingData, setBookingData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "idle") {
      dispatch(getBookingsThunk());
    } else if (status === "pending") {
      setLoading(true);
    } else if (status === "fulfilled") {
      let data = [];
      bookings.forEach(booking => {
        data.push(booking)
      })
      setBookingData(data);
      setLoading(false);
    } else if (status === "rejected") {
      console.log(error);
      setLoading(false);
    }
  }, [status])

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
    {label: 'All Bookings', action: () => setBookingData(bookings)},
    {label: 'Check In', action: () => setBookingData(bookings.filter(booking => booking.status === 'Check In'))},
    {label: 'Check Out', action: () => setBookingData(bookings.filter(booking => booking.status === 'Check Out'))},
    {label: 'In Progress' , action: () => setBookingData(bookings.filter(booking => booking.status === 'In Progress'))}
  ]
  
  return (
  <StyledBookingsContainer>
    {loading ? 
      <p>Loading...</p> 
      :
      <>
        <Filters buttons={filters} setData={setBookingData} data={bookingData} bookings={bookings}/>
        <Table cols={cols} data={bookingData}/>
      </> 
      }
  </StyledBookingsContainer>
  );
};

export default BookingsContent;
