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

    div {
        border: 1px solid black;
        box-shadow: 0px 4px 4px #00000005;
        border-radius: 12px;
        background-color: white;
        padding: 25px 30px;

        &.item5, &.item6 {
            grid-column: span 2
        }

        &.item5 {
            grid-row: 2 / span 4;
        }

        &.item6 {
            grid-row: 2 / span 2;
        }

        &.item9 {
            grid-column: span 2;
        }

        &.item10 {
            grid-column: span 4;
            grid-row: span 2;
        }

    }
`