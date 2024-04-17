import React from "react";
import styled from "styled-components";
import { colors } from "../../assets/theme";
import { StyledSelect } from "../../styledComponents/Select";

const StyledFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    button {
      padding: 13px 26px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      font-family: "Poppins", sans-serif;

      &:hover {
        border-bottom: 1px solid ${colors.primary};
        color: ${colors.primary};
      }
    }
  }
`
const Filters = ({bookingData, setBookingData}) => {


  const handleSort = (e) => {
    const sortValue = e.target.value;
    let dataToSort = [...bookingData];
    let sortedData = [];
    switch (sortValue) {
      case "order-date":
        sortedData = dataToSort.sort((a, b) => new Date(a.order_date) - new Date(b.order_date));
        setBookingData(sortedData);
        break;
      case "guest":
        sortedData = dataToSort.sort((a, b) => a.guest.name > b.guest.name ? 1 : -1);
        setBookingData(sortedData);
        break;
      case "check-in":
        sortedData = dataToSort.sort((a, b) => new Date(a.check_in) - new Date(b.check_in));
        setBookingData(sortedData);
        break;
      case "check-out":
        sortedData = dataToSort.sort((a, b) => new Date(a.check_out) - new Date(b.check_out));
        setBookingData(sortedData);
        break;
    }
  }



  return (
  <StyledFilters>
    <div>
        <button>All Bookings</button>
        <button>Check In</button>
        <button>Check Out</button>
        <button>In Progress</button>
    </div>
    <StyledSelect onChange={handleSort}>
        <option value="order-date">Order Date</option>
        <option value="guest">Guest</option>
        <option value="check-in">Check In</option>
        <option value="check-out">Check Out</option>
    </StyledSelect>
  </StyledFilters>
  );
};

export default Filters;
