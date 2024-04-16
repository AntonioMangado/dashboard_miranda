import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NotificationBarID = ({title}) => {
  return (
  <div>
      <FontAwesomeIcon icon={faBars} />
      <p>{title}</p>
  </div>
  );
};

export default NotificationBarID;
