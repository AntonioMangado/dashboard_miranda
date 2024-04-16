import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBed, faHeart, faEnvelope, faBell, faMessage, faCalendarCheck, faArrowRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NotificationBar } from "../../styledComponents/NotificationBar";
import NotificationBarID from "../NotificationBarID";
import { DashboardContent } from "../../styledComponents/DashboardContent";
import { GridItem } from "../../styledComponents/GridItem";

const Dashboard = () => {

  return (
  <>
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
      <GridItem $iconStats>
        <FontAwesomeIcon icon={faBed} />
        <div>
          <p>8461</p>
          <p>New bookings</p>
        </div>
      </GridItem>
      <GridItem $iconStats $light>
        <FontAwesomeIcon icon={faCalendarCheck} />
        <div>
          <p>963</p>
          <p>Scheduled Rooms</p>
        </div>
      </GridItem>
      <GridItem $iconStats>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        <div>
          <p>753</p>
          <p>Check Ins</p>
        </div>
      </GridItem>
      <GridItem $iconStats>
        <FontAwesomeIcon icon={faRightFromBracket} />
        <div>
          <p>516</p>
          <p>Check Outs</p>
        </div>
      </GridItem>
      <GridItem $columnSpan2 $rowSpan4>Calendar</GridItem>
      <GridItem $columnSpan2 $rowSpan2>BarChart</GridItem>
      <GridItem $primaryColor>AvailableRooms</GridItem>
      <GridItem $primaryColor>SoldOutRooms</GridItem>
      <GridItem $columnSpan2>ConciergeStats</GridItem>
      <GridItem $columnSpan4 $rowSpan2>LatestReviews</GridItem>
    </DashboardContent>
  </>
  );
};

export default Dashboard;
