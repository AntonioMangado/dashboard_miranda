import React from "react";
import styled from "styled-components";
import { Button } from "../../../styledComponents/Button";

const StyledNewRoomContainer = styled.div`
      padding: 35px;
      overflow-y: auto;

      & > div {
        background: white;
        padding: 20px;
      } 
`

const NewRoomContent = () => {
  return (
  <StyledNewRoomContainer>
    <div>
      <form>
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image"></input>
        <label htmlFor="roomNumber">Room Number</label>
        <input type="text" id="roomNumber" name="roomNumber"></input>
        <label htmlFor="roomType">Room Type</label>
        <select id="roomType" name="roomType">
          <option value='' disabled selected>Select Room Type</option>  
          <option value="single-bed">Single Bed</option>
          <option value="double-bed">Double Bed</option>
          <option value="double-superior">Double Superior</option>
          <option value="suite">Suite</option>
        </select>
        <label htmlFor="amenities">Room Type</label>
        <select id="amenities" name="amenities">
          <option value='' disabled selected>Choose Room Amenities</option>  
          <option value="ac">AC</option>
          <option value="wifi">WIFI</option>
          <option value="charging-stations">Charging Stations</option>
          <option value="coffee-kit">Coffee Kit</option>
          <option value="slippers">Slippers</option>
          <option value="minibar">Minibar</option>
          <option value="fitness-facilities">Fitness facilities</option>
          <option value="hairdryer">Hairdryer</option>
        </select>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price"></input>
        <label htmlFor="offerPrice">Offer Price</label>
        <input type="text" id="offerPrice" name="offerPrice"></input>
        <label htmlFor="status">Status</label>
        <select id="status" name="status">
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
