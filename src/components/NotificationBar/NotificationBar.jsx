import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faBell, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { StyledNotificationBar } from "../../styledComponents/StyledNotificationBar";
import { AuthContext } from "../../context/AuthContext";

const NotificationBar = ({title}) => {

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
  }

  return (
    <StyledNotificationBar>
      <div>
          <FontAwesomeIcon icon={faBars} />
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
