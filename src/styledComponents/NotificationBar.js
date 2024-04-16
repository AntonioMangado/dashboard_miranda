import styled from "styled-components";

export const NotificationBar = styled.article`
    display: flex;
    justify-content: space-between;
    padding: 35px 35px;
    box-shadow: 0px 3px 10px #00000005;

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
            

            div {
                &:first-of-type {
                    border-right: 1px solid #00000020;
                    padding-right: 30px;
                }
            }

            select {
                padding: 5px 10px;
                border: 1px solid #00000020;
                border-radius: 5px;
            }

            img {
                width: 40px;
                height: 40px;
                border-radius: 8px;
            }
        }
    }
`