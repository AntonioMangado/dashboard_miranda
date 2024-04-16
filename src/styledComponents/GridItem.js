import styled, { css } from "styled-components";
import { colors } from "../assets/theme";

export const GridItem = styled.div`
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    background-color: white;
    padding: 25px 30px;

    ${props => props.$columnSpan2 && css`
        grid-column: span 2;
    `};

    ${props => props.$columnSpan4 && css`
        grid-column: span 4;
    `};

    ${props => props.$rowSpan2 && css`
        grid-row: span 2;
    `};

    ${props => props.$rowSpan4 && css`
        grid-row: span 4;
    `};

    ${props => props.$primaryColor && css`
        background-color: ${colors.primary};
        color: white;
    `};

    ${props => props.$iconStats && css`
        display: flex;
        align-items: center;
        gap: 20px;

        svg {
            font-size: 30px;
            color: ${colors.danger};
            padding: 20px;
            background-color: ${colors.danger_light};
            border-radius: 8px;
        }

        p {
            margin: 0;
            &:first-of-type {
                font: normal normal 600 30px Poppins;
            };

            &:last-of-type {
                font: normal normal 300 14px Poppins;
                color: ${colors.primary_text};
            };
        };
    `};

    ${props => props.$light && css`
        svg {
                color: white;
                background-color: ${colors.danger};
        };
    `};
`