import styled from "styled-components";
import { colors } from "../assets/theme";

export const StyledSelect = styled.select`
    padding: 13px 16px;
    background-color: transparent;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
`