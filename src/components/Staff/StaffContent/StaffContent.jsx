import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { getUserData, getUsersData, getUsersError, getUsersStatus } from "../../../features/users/usersSlice";
import { getStaffThunk } from "../../../features/users/usersThunk";
 

const StyledStaffContainer = styled.div`
      padding: 35px;
      overflow-y: auto;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
`

const StaffContent = () => {

  const dispatch = useDispatch();
  const staff = useSelector(getUsersData);
  const status = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "idle") {
      dispatch(getStaffThunk());
    } else if (status === "pending") {
      setLoading(true);
    } else if (status === "fulfilled") {
      let data = [];
      staff.forEach(member => {
        data.push(member)
      })
      setStaffData(data);
      setLoading(false);
    } else if (status === "rejected") {
      console.log(error);
      setLoading(false);
    }
  }, [status])

  const cols = [
    {property: "photo", label: "Photo", display: (row) => <img src={row.photo} alt="employee"/>},
    {property: "fullName", label: "Full Name"},
    {property: "employeeId", label: "Employee ID"},
    {property: "email", label: "Email"},
    {property: "startDate", label: "Start Date"},
    {property: "description", label: "Description"},
    {property: "contact", label: "Contact"},
    {property: "status", label: "Status"}
  ]

  const filters = [
    {label: "All Employess", action: () => setStaffData(staff)},
    {label: "Active Employees", action: () => setStaffData(staff.filter(employee => employee.status === "ACTIVE"))},
    {label: "Inactive Employees", action: () => setStaffData(staff.filter(employee => employee.status === "INACTIVE"))}
  ]

  return (
    <StyledStaffContainer>
      {loading ?
        <p>Loading...</p> 
        :
        <>
          <Filters buttons={filters} data={staffData} setData={setStaffData} staff={staff}/>
          <Table cols={cols} data={staffData} />
        </> 
      }
    </StyledStaffContainer>
  );
};

export default StaffContent;
