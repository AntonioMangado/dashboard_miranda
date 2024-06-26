import styled from "styled-components";
import { colors } from "../assets/theme";


export const StyledTable = styled.table`
    padding: 22px 30px;
    background-color: white;
    border-radius: 20px;
    width: 100%;
    border-collapse: separate;
    overflow-x: auto;

    th, td {
        padding: 15px;
        border-bottom: 1px solid #e5e5e5;
        text-align: left;

        button {
            width: 100%;
        }

        a {
        color: black;
        display: flex;
        
        svg {
        margin: 0 auto;
        }
      }

    }
`