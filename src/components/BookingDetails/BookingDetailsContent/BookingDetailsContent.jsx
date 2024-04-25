import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookingData, getBookingsStatus, getBookingsError } from "../../../features/bookings/bookingsSlice";
import { getBookingThunk } from "../../../features/bookings/bookingsThunk";

const BookingDetailsContent = ({id}) => {

  const dispatch = useDispatch()
  const booking = useSelector(getBookingData)
  const status = useSelector(getBookingsStatus)
  const error = useSelector(getBookingsError)
  const [loading, setLoading] = useState(true)

  const initialFetch = async () => {
    await dispatch(getBookingThunk(id)).unwrap();
    setLoading(false);
  }

  useEffect(() => {
    initialFetch()
  }, [])


  return <div>{loading ? <p>Loading...</p> : <>{booking.guest.name} {booking.guest.surname} {booking.booking_id}</>}</div>;
};

export default BookingDetailsContent;
