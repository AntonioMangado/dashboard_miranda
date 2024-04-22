import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBorderAll, faKey, faCalendar, faUser, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StyledSideBar } from "../../styledComponents/StyledSideBar";
import { Button } from "../../styledComponents/Button";
import { LogoContainer } from "../../styledComponents/LogoContainer";
import { StyledLink } from "../../styledComponents/Link";
import { NavBar } from "../../styledComponents/NavBar";
import { AdminCard } from "../../styledComponents/AdminCard";
import { Footer } from "../../styledComponents/Footer";
import { AuthContext } from "../../context/AuthContext";


const SideBar = () => {

  const { state, dispatch } = useContext(AuthContext)

  return (
  <StyledSideBar>
    <LogoContainer>
      <FontAwesomeIcon icon={faHotel} />
      <div>
        <span>Travl</span><span>Hotel Admin Dashboard</span>
      </div>
    </LogoContainer>
    <NavBar>
      <ul>
        <StyledLink to="/dashboard"><FontAwesomeIcon icon={faBorderAll} />Dashboard</StyledLink>
        <StyledLink to="/bookings"><FontAwesomeIcon icon={faCalendar} />Bookings</StyledLink>
        <StyledLink to="/rooms"><FontAwesomeIcon icon={faKey} />Rooms</StyledLink>
        <StyledLink to="/reviews"><FontAwesomeIcon icon={faPuzzlePiece} />Contact</StyledLink>
        <StyledLink to="/staff"><FontAwesomeIcon icon={faUser} />Staff</StyledLink>
      </ul>
    </NavBar>
    <AdminCard>
      <img src="/cat-avatar.jpg" alt="admin's profile picture" />
      <div>
        <p>{state.user}</p>
        <p>miemail@gmail.com</p>
      </div>
      <Button $secondary $wide>EDIT</Button>
    </AdminCard>
    <Footer>
      <div>
        <p>TravlHotel Admin Dashboard</p>
        <p>© 2024 All Rights Reserved</p>
      </div>
      <p>Made with love by AntonioMangado</p>
    </Footer>
  </StyledSideBar>
  );
};

export default SideBar;
