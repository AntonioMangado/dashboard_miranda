import { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { staff } from "../../../../data/staff";
 

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

  const [staffData, setStaffData] = useState([]);
  

  useEffect(() => {
    setStaffData(staff.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)))
  }, [])

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
    {label: "All Employess", function: () => setStaffData(staff)},
    {label: "Active Employees", function: () => setStaffData(staff.filter(employee => employee.status === "ACTIVE"))},
    {label: "Inactive Employees", function: () => setStaffData(staff.filter(employee => employee.status === "INACTIVE"))}
  ]

  return (
    <StyledStaffContainer>
        <Filters buttons={filters} data={staffData} setData={setStaffData} staff={staff}/>
        <Table cols={cols} data={staffData} />
    </StyledStaffContainer>
  );
};

export default StaffContent;
