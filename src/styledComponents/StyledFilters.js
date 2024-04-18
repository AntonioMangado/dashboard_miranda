import styled from "styled-components";
import { colors } from "../assets/theme";

export const StyledFilters = styled.div`
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