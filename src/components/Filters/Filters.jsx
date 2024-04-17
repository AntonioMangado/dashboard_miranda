import React from "react";
import styled from "styled-components";
import { colors } from "../../assets/theme";
import { StyledSelect } from "../../styledComponents/Select";

const Filters = () => {

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
  return (
  <StyledFilters>
    <div>
        <button>All Bookings</button>
        <button>Check In</button>
        <button>Check Out</button>
        <button>In Progress</button>
    </div>
    <StyledSelect>
        <option value="order-date">Order Date</option>
        <option value="guest">Guest</option>
        <option value="check-in">Check In</option>
        <option value="check-out">Check Out</option>
    </StyledSelect>
  </StyledFilters>
  );
};

export default Filters;
