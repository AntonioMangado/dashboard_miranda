import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faHeart, faEnvelope, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import { NotificationBar } from "../../styledComponents/NotificationBar";
import NotificationBarID from "../NotificationBarID";
import { DashboardContent } from "../../styledComponents/DashboardContent";

const Dashboard = () => {

  return (
  <section>
    <NotificationBar>
      <NotificationBarID title="Dashboard"/>
      <div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faMessage} />
          <img src="./cat-avatar.jpg" alt="admin's profile picture" />
        </div>
        <div>
          <select name="language" id="language">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
        </div>
      </div>
    </NotificationBar>
    <DashboardContent>
      <div className="item1">1</div>
      <div className="item2">2</div>
      <div className="item3">3</div>
      <div className="item4">4</div>
      <div className="item5">Calendar</div>
      <div className="item6">BarChart</div>
      <div className="item7">7</div>
      <div className="item8">8</div>
      <div className="item9">9</div>
      <div className="item10">10</div>
    </DashboardContent>
  </section>
  )

    ;
};

export default Dashboard;
