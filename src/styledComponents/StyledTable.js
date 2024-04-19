import styled from "styled-components";
import { colors } from "../assets/theme";


export const StyledTable = styled.table`
    padding: 22px 30px;
    background-color: white;
    border-radius: 20px;
    width: 100%;
    border-collapse: separate;

    th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #e5e5e5;
    }
`