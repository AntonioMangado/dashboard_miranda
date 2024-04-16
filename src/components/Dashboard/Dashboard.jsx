import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faHeart, faEnvelope, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {

  return (
  <section>
    <article className="notification-bar">
      <div className="notification-bar__id">
        <FontAwesomeIcon icon={faBars} />
        <p>Dashboard</p>
      </div>
      <div className="notification-bar__notifications">
        <div className="notifications">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faMessage} />
          <img src="" alt="admin's profile picture" />
        </div>
        <div className="language">
          <select name="language" id="language">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
        </div>
      </div>
    </article>
    <article className="dashboard-content">
      
    </article>
  </section>
  )

    ;
};

export default Dashboard;
