import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEnvelope, faBell, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { StyledNotificationBar } from "../../styledComponents/StyledNotificationBar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { SideBarContext } from "../../context/SideBarContext";

const NotificationBar = ({title}) => {

  const { dispatch } = useAuthContext();
  const { isShown, setIsShown } = useContext(SideBarContext);

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    localStorage.removeItem('user');
  }

  const handleClick = () => {
    setIsShown(!isShown);
    console.log(isShown);
  }

  return (
    <StyledNotificationBar>
      <div>
          {isShown 
              ? <FontAwesomeIcon icon={faArrowLeft} onClick={handleClick}/>
              : <FontAwesomeIcon icon={faArrowRight} onClick={handleClick}/>
          }
          <p>{title}</p>
      </div>
      <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleLogout}/>
      </div>
    </StyledNotificationBar>
  );
};

export default NotificationBar;
