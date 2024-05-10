import styled from "styled-components";
import { colors } from "../assets/theme";

export const StyledLogin = styled.section`

    position: relative;
    width: 100vw;
    height: 100vh;

    div {
        &:first-of-type {
            width: 100%;
            height: 65%;
            background-color: ${colors.primary};
        }

        &:last-of-type {
            width: 100%;
            height: 35%;
            background-color: ${colors.primary_text};
        }
    }

    form {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 250px;
        background-color: white;
        display: flex;
        flex-direction: column;

        width: 350px;
        padding: 50px 25px 25px 25px;
        border-radius: 20px;

        article {
            margin-bottom: 40px;
            text-align: center;

            h2 {
                font-size: 3.5rem;
            }

            p {
                margin-top: -15px;
                font-size: 0.9rem;
            }
        }

        input {
            margin-bottom: 20px;
            padding: 10px 10px;
            border: none;
            outline: none;
            border-radius: 8px;
            box-shadow: 1px 4px 4px #00000020;


            &::placeholder {
                color: #acacac;
            }
        }
    }
    
`