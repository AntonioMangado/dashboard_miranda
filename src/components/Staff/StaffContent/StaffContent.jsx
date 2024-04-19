import { useState } from "react";
import styled from "styled-components";
import Table from "../../Table";
import Filters from "../../Filters";

const staff = [
  {
    photo: 'employee.webp',
    fullName: 'John Doe',
    employeeId: 'E001',
    email: 'john.doe@example.com',
    startDate: '2022-01-15',
    description: 'Software Developer',
    contact: '123-456-7890',
    status: 'ACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Jane Smith',
    employeeId: 'E002',
    email: 'jane.smith@example.com',
    startDate: '2021-05-20',
    description: 'HR Manager',
    contact: '123-456-7891',
    status: 'ACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Alice Johnson',
    employeeId: 'E003',
    email: 'alice.johnson@example.com',
    startDate: '2020-11-10',
    description: 'Accountant',
    contact: '123-456-7892',
    status: 'INACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Bob Williams',
    employeeId: 'E004',
    email: 'bob.williams@example.com',
    startDate: '2023-02-28',
    description: 'Marketing Specialist',
    contact: '123-456-7893',
    status: 'ACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Emily Brown',
    employeeId: 'E005',
    email: 'emily.brown@example.com',
    startDate: '2022-07-05',
    description: 'Sales Associate',
    contact: '123-456-7894',
    status: 'INACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Michael Davis',
    employeeId: 'E006',
    email: 'michael.davis@example.com',
    startDate: '2021-04-15',
    description: 'Project Manager',
    contact: '123-456-7895',
    status: 'ACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Sarah Wilson',
    employeeId: 'E007',
    email: 'sarah.wilson@example.com',
    startDate: '2020-09-20',
    description: 'Customer Service Representative',
    contact: '123-456-7896',
    status: 'ACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'David Garcia',
    employeeId: 'E008',
    email: 'david.garcia@example.com',
    startDate: '2023-05-10',
    description: 'Graphic Designer',
    contact: '123-456-7897',
    status: 'INACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Linda Anderson',
    employeeId: 'E009',
    email: 'linda.anderson@example.com',
    startDate: '2022-03-01',
    description: 'Finance Analyst',
    contact: '123-456-7898',
    status: 'ACTIVE'
  },
  {
    photo: 'employee.webp',
    fullName: 'Tom Wilson',
    employeeId: 'E010',
    email: 'tom.wilson@example.com',
    startDate: '2021-08-12',
    description: 'IT Support Specialist',
    contact: '123-456-7899',
    status: 'INACTIVE'
  }
];

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

  const [staffData, setStaffData] = useState(staff.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)));

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
        <Filters buttons={filters} data={staffData} setData={setStaffData}/>
        <Table cols={cols} data={staffData} />
    </StyledStaffContainer>
  );
};

export default StaffContent;
