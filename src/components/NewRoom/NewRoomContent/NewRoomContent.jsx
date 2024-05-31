import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { Button } from "../../../styledComponents/Button";
import { createRoomThunk } from "../../../features/rooms/roomsThunk";
import { toast } from 'react-toastify';

const StyledNewRoomContainer = styled.div`
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
`

const NewRoomContent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amenitiesArr, setAmenitiesArr] = useState([]);

  const handleAmenitiesChange = (e) => {
    const selectedAmenity = e.target.value;
    if (!amenitiesArr.includes(selectedAmenity)) {
      setAmenitiesArr([...amenitiesArr, selectedAmenity]);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let data = Object.fromEntries(formData);
    data.amenities = amenitiesArr;
    data.roomNumber = parseFloat(data.roomNumber);
    data.price = parseFloat(data.price);
    data.offerPrice = parseFloat(data.offerPrice);
    const result = await dispatch(createRoomThunk(data)).unwrap();
    if (result.error) {
      toast.error('Missing fields: Please complete all information');
    } else {
      toast.success('Room created successfully');
      navigate('/rooms');
    }
  };

  return (
  <StyledNewRoomContainer>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image"></input>
        <label htmlFor="roomNumber">Room Number</label>
        <input type="text" id="roomNumber" name="roomNumber"></input>
        <select id="roomType" name="roomType">
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
               <li key={index}>{amenity}<span onClick={() => setAmenitiesArr(amenitiesArr.filter(am => am !== amenity))}>X</span></li>
            </>
          ))}
        </ul>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price"></input>
        <label htmlFor="offerPrice">Offer Price</label>
        <input type="number" id="offerPrice" name="offerPrice"></input>
        <label htmlFor="status">Status</label>
        <select id="status" name="status" >
          <option value='' disabled selected>Select Status</option>  
          <option value='available'>Available</option>
          <option value="booked">Booked</option>
        </select>
        <Button type="submit" $primary>Submit</Button>
      </form>
    </div>
  </StyledNewRoomContainer>);
};

export default NewRoomContent;
