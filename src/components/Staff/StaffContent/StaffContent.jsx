import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { Button } from "../../../styledComponents/Button";
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
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true)

  const initialFetch = async () => {
    await dispatch(getStaffThunk()).unwrap();
    setStaffData(staff);
    setLoading(false);
  }

  useEffect(() => {
    initialFetch()
  }, [loading])

  const cols = [
    {property: "photo", label: "Photo", display: (row) => <img src={row.photo} alt="employee"/>},
    {property: "fullName", label: "Full Name"},
    {property: "employeeId", label: "Employee ID", display: (row) => <p>{row._id}</p>},
    {property: "email", label: "Email", display: (row) => <p>{(row.email).toLowerCase()}</p>},
    {property: "startDate", label: "Start Date"},
    {property: "description", label: "Description"},
    {property: "contact", label: "Contact"},
    {property: "status", label: "Status", display: (data) => {
      if (data.status === "Active") {
        return <Button $success>Active</Button>
      } else {
        return <Button $error>Inactive</Button>
      }
    
    }}
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
