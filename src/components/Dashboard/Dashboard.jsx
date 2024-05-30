import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarCheck, faArrowRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { DashboardContent } from "../../styledComponents/DashboardContent";
import { GridItem } from "../../styledComponents/GridItem";
import NotificationBar from "../NotificationBar";


const Dashboard = () => {
  return (
  <>
    <NotificationBar title="Dashboard" />
    <DashboardContent>
      <GridItem $KPI>
        <FontAwesomeIcon icon={faBed} />
        <div>
          <p>8461</p>
          <p>New bookings</p>
        </div>
      </GridItem>
      <GridItem $KPI $light>
        <FontAwesomeIcon icon={faCalendarCheck} />
        <div>
          <p>963</p>
          <p>Scheduled Rooms</p>
        </div>
      </GridItem>
      <GridItem $KPI>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        <div>
          <p>753</p>
          <p>Check Ins</p>
        </div>
      </GridItem>
      <GridItem $KPI>
        <FontAwesomeIcon icon={faRightFromBracket} />
        <div>
          <p>516</p>
          <p>Check Outs</p>
        </div>
      </GridItem>
      <GridItem $columnSpan4 $rowSpan4>Calendar</GridItem>
      <GridItem $columnSpan2 $rowSpan2>BarChart</GridItem>
      <GridItem $columnSpan2 $rowSpan2>LatestMessages</GridItem>
    </DashboardContent>
  </>
  );
};

export default Dashboard;
