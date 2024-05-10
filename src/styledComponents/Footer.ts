import styled from "styled-components";
import { colors } from "../assets/theme";

export const Footer = styled.article`

    p {
        font: normal normal 300 12px Poppins; 
        color: ${colors.primary_text};
        margin-bottom: 20px;
    }

    div {
        p {
            &:first-of-type {
                font: normal normal 600 14px Poppins;
                margin-bottom: 0;
                color: black;
            }

            &:last-of-type {
                margin-top: 0;
                font: normal normal 300 12px Poppins;
                color: ${colors.primary_text};
            }
        }
    }

`