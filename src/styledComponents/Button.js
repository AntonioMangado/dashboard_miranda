import styled, { css } from "styled-components";
import { colors } from "../assets/theme";

export const Button = styled.button`
    padding: 13px 16px;
    background-color: transparent;
    color: ${colors.primary};
    font-weight: 600;
    border-radius: 12px;
    width: ${props => props.variant === 'wide' ? '100%' : 'auto'};
    border: none;
    cursor: pointer;

    ${props => props.$primary && css`
        background-color: ${colors.primary};
        color: white;
    `};

    ${props => props.$secondary && css`
        background-color: ${colors.secondary};
        color: ${colors.primary};
    `};
`