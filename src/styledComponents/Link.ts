import styled, {css} from "styled-components";
import { colors } from "../assets/theme";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`

    list-style: none;
    color: ${colors.primary_text};
    font-size: 18px;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 15px;
    text-decoration: none;

    &:hover {
        color: #5D5449;
    }

    ${props => props.$nomargin && css`
        margin-bottom: 0;
    `};


`