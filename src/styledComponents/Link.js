import styled from "styled-components";
import { colors } from "../assets/theme";

export const Link = styled.li`

    list-style: none;
    color: ${colors.primary_text};
    font-size: 18px;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;

    &:hover {
        color: #5D5449;
    }

    a {
        text-decoration: none;
        font-size: 16px;
        color: ${colors.primary_text};

        &:hover {
        color: #5D5449;
    }
    }
`