import styled from "styled-components";
import { colors } from "../assets/theme";

export const LogoContainer = styled.article`
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 40px;

        svg {
            color: ${colors.primary};
            font-size: 47px;
        }

        div {
            display: flex;
            flex-direction: column;
        }

        span {
            &:first-of-type {
                font-size: 24px;
                font-weight: 800;
            }

            &:last-of-type {
                font-size: 12px;
                font-weight: 400;
                color: #5D5449;
                margin-top: -5px;
            }
        }
`