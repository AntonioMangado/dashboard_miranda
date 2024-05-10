import styled, { css } from "styled-components";
import { colors } from "../assets/theme";

interface ButtonProps {
    $primary?: boolean,
    $secondary?: boolean,
    $wide?: boolean,
    $success?: boolean,
    $error?: boolean,
    $warning?: boolean
}

export const Button = styled.button<ButtonProps>`
    padding: 13px 16px;
    background-color: transparent;
    color: ${colors.primary};
    font-weight: 600;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    ${props => props.$primary && css`
        background-color: ${colors.primary};
        color: white;
    `};

    ${props => props.$secondary && css`
        background-color: ${colors.secondary};
        color: ${colors.primary};

        &:hover {
            background-color: ${colors.primary};
            color: white;
        }
    `};

    ${props => props.$wide && css`
        width: 100%;
    `};

    ${props => props.$success && css`
        background-color: ${colors.background_success};
        color: ${colors.success};
        width: 100%;
    `};
    
    ${props => props.$error && css`
        background-color: ${colors.background_error};
        color: ${colors.danger};
        width: 100%;
    `};

    ${props => props.$warning && css`
        background-color: ${colors.background_warning};
        color: ${colors.warning};
        width: 100%;
    `};
`