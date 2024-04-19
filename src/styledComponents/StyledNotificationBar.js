import styled from "styled-components";

export const StyledNotificationBar = styled.article`
    display: flex;
    justify-content: space-between;
    padding: 35px 35px;
    box-shadow: 0px 3px 10px #00000005;
    background-color: white;

    div {
        &:first-of-type {
            display: flex;
            align-items: center;
            gap: 30px;

            p, svg {
                font-size: 24px;
                margin: 0;
            }

            p {
                font-size: 28px;
                font-weight: 600;
            }
        }

        &:last-of-type {
            display: flex;
            align-items: center;
            gap: 30px;

            svg {
                font-size: 24px;
                cursor: pointer;
            }
        }
    }
`