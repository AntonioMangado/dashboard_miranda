import styled from "styled-components";

export const AdminCard = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    padding: 24px 30px;
    margin-bottom: 37px;

    img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    div {
        p {
            text-align: center;
            &:first-of-type{
                margin-bottom: 0;
            }

            &:last-of-type {
                font-size: 12px;
                color: #b2b2b2;
                margin-top: 0;
                margin-bottom: 20px;
            }
        }
    }
`