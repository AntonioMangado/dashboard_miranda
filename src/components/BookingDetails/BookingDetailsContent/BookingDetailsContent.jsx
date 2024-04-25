import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, {css} from "styled-components";
import { Button } from "../../../styledComponents/Button";
import { getBookingData } from "../../../features/bookings/bookingsSlice";
import { getRoomData } from "../../../features/rooms/roomsSlice";
import { getBookingThunk } from "../../../features/bookings/bookingsThunk";
import { getRoomThunk } from "../../../features/rooms/roomsThunk";
import { colors } from "../../../assets/theme"

const StyledContainer = styled.section`
  padding: 35px;
  overflow-x: auto;
  
`

const StyledGuestDetail = styled.article`
  height: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  gap: 35px;

    h4 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 15px;

          span {
            font-size: 14px;
            font-weight: 400;
            color: ${colors.primary_text};
          }
        }

   > div {
    width: 50%;

    > p {
      margin-bottom: 25px;
      font-size: 14px;
    }

    &:first-of-type{
      
      h3 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      

      > div {
        background-color: white;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        padding-bottom: 15px;
        margin-bottom: 15px;
        gap: 25px;

        &:first-of-type {
          border-bottom: 1px solid #cecccc;
        }

        &:last-of-type {
          flex-direction: column;
          gap: 8px;

          > div {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 15px;
          }
        }

        div {
          display: inline-block;
          width: 40%;
          font-weight: 600;
        }
      }

      > p {

        &:first-of-type {
          margin-bottom: 15px;
        }
      }
    }

    &:last-of-type{
      background-color: #cecccc;
      display: flex;
      flex-direction: column;
      justify-content: end;
      position: relative;
      overflow: hidden;

      > div {
        width: 100%;
        background: linear-gradient(#00000000, #00000080);
        color: white;
        padding: 25px;
        
        p {
          font-size: 14px;
        }

        > div {
          background-color: green;
          
          
        }
      }
    }
   }
`

const StyledP = styled.p`
  ${props => props.$title && css`
        font-size: 14px;
        font-weight: 400;
        color: ${colors.primary_text};
  `};
`

const Ribbon = styled.div`
        text-align: center;
        position: absolute;
        top: 26px;
        right: -49px;
        padding: 10px 64px;
        text-transform: uppercase;
        transform: rotate(45deg);

        ${props => props.$success && css`
          background-color: ${colors.success};
        `};

        ${props => props.$danger && css`
          background-color: ${colors.danger};
        `}; 
`
 

const BookingDetailsContent = ({id}) => {

  const dispatch = useDispatch()
  const booking = useSelector(getBookingData)
  const room = useSelector(getRoomData)
  const [fetched, setFetched] = useState(false)
  const [loading, setLoading] = useState(true)

  const initialFetch = async () => {
    await dispatch(getBookingThunk(id)).unwrap();
    setLoading(false);
  }

  const fetchRoom = async () => {
    await dispatch(getRoomThunk(booking?.roomID)).unwrap();
    setFetched(true)
  }

  useEffect(() => {
    initialFetch()
    fetchRoom()
  }, [loading])

  return (
  <StyledContainer>
    {!fetched 
      ? <p>Loading...</p> 
      : <StyledGuestDetail>
          <div>
            <h3>{booking.guest.name} {booking.guest.surname}</h3>
            <StyledP $title>Booking ID: {booking.booking_id}</StyledP>
            <div>
              <div>
                <StyledP $title>Check In</StyledP>
                {booking.check_in}
              </div>
              <div>
                <StyledP $title>Check out</StyledP>
                {booking.check_out}
              </div>
            </div>
            <div>
              <div>
                <StyledP $title>Room Info</StyledP>
                <h4>{room?.roomType} - {booking.roomID}</h4>
              </div>
              <div>
                <StyledP $title>Room Price</StyledP>
                <h4>${room?.offerPrice}<span>/night</span></h4>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio officia quas corrupti ad deserunt veritatis nam eveniet pariatur impedit voluptate? Debitis sit reiciendis amet voluptatibus harum eius laboriosam a eaque!</p>
            <div>
              <StyledP $title>Amenities</StyledP>
              <div>{room?.amenities 
                      ? room?.amenities.map(((amenity, i) => <Button $success key={i}>{amenity}</Button>))
                      : <></>}
              </div>
            </div>            
          </div>
          <div>
            <div>
              <h4>{room?.roomType}</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eius eum eveniet impedit officiis fugit temporibus, exercitationem in, ea iure natus architecto aliquid? Repudiandae sapiente odit inventore impedit excepturi culpa.</p>
              <div>{room?.status == "available"
                      ? <Ribbon $success>available</Ribbon>
                      : <Ribbon $danger>booked</Ribbon>}
              </div>
            </div>
          </div>
        </StyledGuestDetail>
    }
  </StyledContainer>
  );
};

export default BookingDetailsContent;
