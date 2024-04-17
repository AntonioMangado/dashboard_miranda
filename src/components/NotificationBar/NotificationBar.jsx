import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faBell, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { StyledNotificationBar } from "../../styledComponents/StyledNotificationBar";

const NotificationBar = ({title}) => {
  return (
    <StyledNotificationBar>
      <div>
          <FontAwesomeIcon icon={faBars} />
          <p>{title}</p>
      </div>
      <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </div>
    </StyledNotificationBar>
  );
};

export default NotificationBar;
