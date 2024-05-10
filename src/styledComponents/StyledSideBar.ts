import styled from "styled-components"

type SideBarProps = {
    $display: string
}

export const StyledSideBar = styled.section<SideBarProps>`
        grid-row: 1 / -1;
        padding: 30px 35px;
        box-shadow: 13px 3px 40px #00000005;
        background-color: white;
        display: ${props => props.$display};
    `