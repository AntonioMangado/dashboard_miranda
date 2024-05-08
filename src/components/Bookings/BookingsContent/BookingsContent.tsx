import { useState, useEffect, useRef } from "react";
import styled from "styled-components"
import Filters from "../../Filters"
import Table from "../../Table"
import { StyledLink } from "../../../styledComponents/Link"
import { getBookingsData, getBookingsStatus, getBookingsError } from "../../../features/bookings/bookingsSlice";
import { getBookingsThunk } from "../../../features/bookings/bookingsThunk";
import { Button } from "../../../styledComponents/Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { TFilter, Booking } from "../../../../lib/types";

const StyledBookingsContainer = styled.div`
  padding: 35px;
  overflow-y: auto;
  position: relative;
`

const StyledDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  border: none;
  border-radius: 20px;

  button {
    position: absolute;
    top: 10px;
    right: 15px;
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }
`

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
`;



const BookingsContent = () => {

  const dispatch = useAppDispatch()
  const bookings = useAppSelector(getBookingsData)
  const [bookingData, setBookingData] = useState<Booking[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  const initialFetch = async (): Promise<void> => {
    await dispatch(getBookingsThunk()).unwrap();
      setBookingData(bookings);
      setLoading(false);
  }

  useEffect(() => {
    initialFetch();
  }, [])

  const cols = [
    {property: 'name', label: 'Name', display: (data: Booking) => (
      <StyledLink $nomargin to={`/bookings/${data.booking_id}`}>
        <p>{data.guest.name} {data.guest.surname}</p>
      </StyledLink>
    )},
    {property: 'order_date', label: 'Order Date'},
    {property: 'check_in', label: 'Check In'},
    {property: 'check_out', label: 'Check Out'},
    {property: 'special_request', label: 'Special Request', display: (data: Booking) => {
      return data.special_request === null 
        ? <Button $secondary>No Requests</Button>
        : <Button $primary onClick={() => setSelectedRequest(data.special_request)}>View Request</Button>
    }},
    {property: 'room_type', label: 'Room Type'},
    {property: 'status', label: 'Status', display: (data: Booking) => {
      if (data.status === 'Check In') {
        return <Button $success>Check In</Button>
      } else if (data.status === 'Check Out') {
        return <Button $error>Check Out</Button>
      } else {
        return <Button $warning>In Progress</Button>
      }
    }}
  ]

  const filters: TFilter[] = [
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
        {selectedRequest && (
            <StyledBackdrop>
              <StyledDialog open>
                <button onClick={() => setSelectedRequest(null)}>X</button>
                <p>{selectedRequest}</p>
              </StyledDialog>
            </StyledBackdrop>
            )}
      </> 
    }
  </StyledBookingsContainer>
  );
};

export default BookingsContent;
