import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBorderAll, faKey, faCalendar, faUser, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { StyledSideBar } from "../../styledComponents/StyledSideBar";
import { Button } from "../../styledComponents/Button";
import { LogoContainer } from "../../styledComponents/LogoContainer";
import { Link } from "../../styledComponents/Link";
import { NavBar } from "../../styledComponents/NavBar";
import { AdminCard } from "../../styledComponents/AdminCard";
import { Footer } from "../../styledComponents/Footer";


const SideBar = ({setAuth}) => {

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem('auth');
  }

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
        <Link><FontAwesomeIcon icon={faBorderAll} /><a href="/dashboard">Dashboard</a></Link>
        <Link><FontAwesomeIcon icon={faCalendar} /><a href="/bookings">Bookings</a></Link>
        <Link><FontAwesomeIcon icon={faKey} /><a href="/rooms">Rooms</a></Link>
        <Link><FontAwesomeIcon icon={faPuzzlePiece} /><a href="/concierge">Contact</a></Link>
        <Link><FontAwesomeIcon icon={faUser} /><a href="/guests">Users</a></Link>
      </ul>
    </NavBar>
    <AdminCard className="sidebar__admin-user">
      <img src="/cat-avatar.jpg" alt="admin's profile picture" />
      <div>
        <p>Antonio Mangado</p>
        <p>miemail@gmail.com</p>
      </div>
      <Button $secondary $wide onClick={handleLogout}>EDIT</Button>
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
