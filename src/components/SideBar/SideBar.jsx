import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBorderAll, faKey, faCalendar, faUser, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { StyledSideBar } from "../../styledComponents/StyledSideBar";
import { Button } from "../../styledComponents/Button";
import { LogoContainer } from "../../styledComponents/LogoContainer";
import { StyledLink } from "../../styledComponents/Link";
import { NavBar } from "../../styledComponents/NavBar";
import { AdminCard } from "../../styledComponents/AdminCard";
import { Footer } from "../../styledComponents/Footer";
import { useAuthContext } from '../../hooks/useAuthContext';
import { SideBarContext } from '../../context/SideBarContext';



const SideBar = () => {

  const { state, dispatch } = useAuthContext();
  const { isShown } = useContext(SideBarContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_USER", payload: e.target.user.value })
    setIsEditing(false);
    localStorage.setItem('user', e.target.user.value);
  }

  return (
  <StyledSideBar $display={isShown ? "block" : "none"}>
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
        {isEditing ? <form onSubmit={handleSubmit}><input type="text" name="user"/></form> : <p>{state.user.username}</p> }
        <p>{state.user.email}</p>
      </div>
      <Button $secondary $wide onClick={() => setIsEditing(!isEditing)}>EDIT</Button>
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
