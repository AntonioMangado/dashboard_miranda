import styled from "styled-components";

export const DashboardContent = styled.article`
    padding: 30px 35px;
    background-color: #f8f8f8;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 125px;
    grid-gap: 30px;
    justify-content: center;
    overflow-y: auto;
`