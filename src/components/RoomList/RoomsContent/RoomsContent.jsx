import { useState, useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"; 
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Table from "../../Table";
import Filters from "../../Filters";
import { Button } from "../../../styledComponents/Button";
import { StyledActions } from "../../../styledComponents/Actions";
import { StyledBackdrop } from "../../../styledComponents/StyledBackdrop";
import { getRoomsData, getRoomsStatus, getRoomsError } from "../../../features/rooms/roomsSlice";
import { getRoomsThunk, deleteRoomThunk } from "../../../features/rooms/roomsThunk";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { toast } from "react-toastify";

const StyledRoomsContainer = styled.div`
      padding: 35px;
      overflow-y: auto;
      position: relative;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
      }

      div.delete-confirm-msg {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 12px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 20px;

          p {
            width: 100%;
          }

          div {
            align-self: flex-end;
            display: flex;
            gap: 10px;

            button {
              transition: all 0.3s ease-in-out;

              &:first-of-type{
                border: 1px solid #135846;

                &:hover {
                  background-color: #e6e5e5;
                  box-shadow: 0px 4px 4px #00000005;
                }
              }  
              &:last-of-type{
                &:hover {
                  background-color: #0f4637;
                  box-shadow: 0px 4px 4px #00000005;
                }
              }  
          }
          }

          
      }
`

const RoomsContent = () => {

  const dispatch = useDispatch();
  const rooms = useSelector(getRoomsData);
  const [roomsData, setRoomsData] = useState(rooms || []);
  const [loading, setLoading] = useState(true)
  const error = useSelector(getRoomsError);
  const { dispatch: authDispatch } = useAuthContext();
  const [roomToDelete, setRoomToDelete] = useState('');

  const initialFetch = async () => {
      await dispatch(getRoomsThunk()).unwrap();
      setRoomsData(rooms);
      setLoading(false);
  } 

  const handleDelete = async (id) => {
    await dispatch(deleteRoomThunk(id)).unwrap();
    toast.success('Room deleted successfully');
    setRoomToDelete('');
  }
  
  useEffect(() => {
    initialFetch();
  }, [loading])

  useEffect(() => {
    setRoomsData(rooms)
  }, [rooms])

  useEffect(() => {
    if (error === 'Token expired' || error === 'Token not found') {
      localStorage.setItem('auth-token', 'token expired')
      authDispatch({type: 'LOGOUT'})
    }
  }, [error]);

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
    }},
    {label: 'Actions', property: 'actions', display: (row) => {
      return (
        <StyledActions>
          <Link to={`/updateroom/${row._id}`}><FontAwesomeIcon icon={faPenToSquare}/></Link> 
          <FontAwesomeIcon icon={faTrashCan} onClick={() => setRoomToDelete(row._id)} />
        </StyledActions>
      )
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
        {roomToDelete && <StyledBackdrop>
                            <div className="delete-confirm-msg">
                              <p>You are about to delete room {roomToDelete}. Are you sure?</p>
                              <div>
                                <Button onClick={() => setRoomToDelete('')}>Cancel</Button>
                                <Button $primary onClick={() => handleDelete(roomToDelete)}>Delete</Button>
                              </div>
                            </div>
                          </StyledBackdrop>}
      </>
    }
  </StyledRoomsContainer>
  );
};

export default RoomsContent;
