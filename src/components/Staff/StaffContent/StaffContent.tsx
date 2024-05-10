import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";
import { Button } from "../../../styledComponents/Button";
import { getUsersData } from "../../../features/users/usersSlice";
import { getStaffThunk } from "../../../features/users/usersThunk";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Staff, TCols, TFilter } from "../../../../lib/types";
 

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

  const dispatch = useAppDispatch();
  const staff = useAppSelector(getUsersData);
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true)

  const initialFetch = async () => {
    await dispatch(getStaffThunk()).unwrap();
    setStaffData(staff);
    setLoading(false);
  }

  useEffect(() => {
    initialFetch()
  }, [])

  const cols: TCols[] = [
    {property: "photo", label: "Photo", display: (row) => <img src={row.photo} alt="employee"/>},
    {property: "fullName", label: "Full Name"},
    {property: "employeeId", label: "Employee ID"},
    {property: "email", label: "Email"},
    {property: "startDate", label: "Start Date"},
    {property: "description", label: "Description"},
    {property: "contact", label: "Contact"},
    {property: "status", label: "Status", display: (data) => {
      if (data.status === "ACTIVE") {
        return <Button $success>Active</Button>
      } else {
        return <Button $error>Inactive</Button>
      }
    
    }}
  ]

  const filters: TFilter[] = [
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
