import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { getRoomThunk, updateRoomThunk } from "../../../features/rooms/roomsThunk";
import { getRoomData } from "../../../features/rooms/roomsSlice";
import { Button } from "../../../styledComponents/Button";

const StyledUpdateRoomContainer = styled.div`
      padding: 35px;
      overflow-y: auto;

      & > div {
        background: white;
        padding: 20px;
        border-radius: 20px;
        height: 100%;
        
        form {
          display: flex;
          flex-direction: column;
          width: 50%;
          margin: 0 auto;
          justify-content: center;
          align-items: center;

          label {
            align-self: flex-start;
          }

          input, select {
            padding: 10px;
            margin: 3px 0 10px;
            background-color: #f5f5f5;
            border: none;
            outline: none;
            border-radius: 5px;
            width: 100%;
            &:focus {
              border: 1px solid #000000;
            }
          }

          select {
            font-size: 1rem;
          }

          button {
            margin-top: 10px;
            align-self: flex-end;
            width: 200px;
          }
        }  
      }

      ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        gap: 10px;
        align-self: flex-start;

        li {
          background: #f5f5f5;
          padding: 5px 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          display: flex;
          gap: 7px;
          align-items: center;

          span {
            cursor: pointer;
            font-size: 12px;
            color: #00000090;
          }
        }
      }
`;

const UpdateRoomContent = ({id}) => {
  const navigate = useNavigate();
  const room = useSelector(getRoomData);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [dataIsSet, setDataIsSet] = useState(false);
  const [amenitiesArr, setAmenitiesArr] = useState([]);
  const [roomData, setRoomData] = useState({
    image: '',
    roomNumber: '',
    roomType: '',
    amenities: [],
    price: '',
    offerPrice: '',
    status: ''
  });

  const handleAmenitiesChange = (e) => {
    const selectedAmenity = e.target.value;
    if (!amenitiesArr.includes(selectedAmenity)) {
      setAmenitiesArr([...amenitiesArr, selectedAmenity]);
    }
    setRoomData({...roomData, amenities: [...amenitiesArr, selectedAmenity]});
  }

  const initialFetch = async () => {
    await dispatch(getRoomThunk(id)).unwrap()
    setLoading(false)
  }

  const setData = () => {
    if (!loading) {
      setRoomData(room)
      setAmenitiesArr(room.amenities)
      setDataIsSet(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(roomData)
    const result = await dispatch(updateRoomThunk({id, body: roomData})).unwrap()
    if (result.error) {
      toast.error('Missing fields: Please complete all information');
    } else {
      toast.success('Room updated successfully');
      navigate('/rooms');
    }
  } 

  useEffect(() => {
    initialFetch()
    setData()
  }, [loading])

  return (
    <>{!dataIsSet 
      ? <p>Loading...</p> 
      : <StyledUpdateRoomContainer>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="image">Image</label>
              <input type="text" id="image" name="image" onChange={(e) => {setRoomData({...roomData, image: e.target.value})}} value={roomData.image}></input>
              <label htmlFor="roomNumber">Room Number</label>
              <input type="text" id="roomNumber" name="roomNumber" onChange={(e) => {setRoomData({...roomData, roomNumber: e.target.value})}} value={roomData.roomNumber}></input>
              <select id="roomType" name="roomType" onChange={(e) => {setRoomData({...roomData, roomType: e.target.value})}} value={roomData.roomType}>
                <option value='' disabled selected>Select Room Type</option>  
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Double Superior">Double Superior</option>
                <option value="Suite">Suite</option>
              </select>
              <select id="amenities" name="amenities" onChange={handleAmenitiesChange}>
                <option value='' disabled selected>Choose Room Amenities</option>  
                <option value="AC">AC</option>
                <option value="WIFI">WIFI</option>
                <option value="Charging Stations">Charging Stations</option>
                <option value="Coffee Kit">Coffee Kit</option>
                <option value="Slippers">Slippers</option>
                <option value="Minibar">Minibar</option>
                <option value="Fitness Facilities">Fitness facilities</option>
                <option value="Hairdryer">Hairdryer</option>
              </select>
              <ul>
                {amenitiesArr.map((amenity, index) => (
                  <>
                    <li key={index}>{amenity}<span onClick={() => {
                      setAmenitiesArr(amenitiesArr.filter(am => am !== amenity))
                      setRoomData({...roomData, amenities: amenitiesArr.filter(am => am !== amenity)})
                      }}>X</span></li>
                  </>
                ))}
              </ul>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" onChange={(e) => {setRoomData({...roomData, price: e.target.value})}} value={roomData.price}></input>
              <label htmlFor="offerPrice">Offer Price</label>
              <input type="number" id="offerPrice" name="offerPrice" onChange={(e) => {setRoomData({...roomData, offerPrice: e.target.value})}} value={roomData.offerPrice}></input>
              <label htmlFor="status">Status</label>
              <select id="status" name="status" onChange={(e) => {setRoomData({...roomData, status: e.target.value})}} value={roomData.status}>
                <option value='' disabled selected>Select Status</option>  
                <option value='available'>Available</option>
                <option value="booked">Booked</option>
              </select>
              <Button type="submit" $primary>Update</Button>
            </form>
          </div>
        </StyledUpdateRoomContainer>}</>
    );
};

export default UpdateRoomContent;
