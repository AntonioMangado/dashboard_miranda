import { useEffect, useState } from "react";
import { StyledSelect } from "../../styledComponents/Select";
import { StyledFilters } from "../../styledComponents/StyledFilters";
import { Button } from "../../styledComponents/Button";

const Filters = ({data, setData, bookings, staff, rooms, reviews, buttons}) => {

  const isInRoomsPage = window.location.pathname.includes("rooms");
  const isInBookingsPage = window.location.pathname.includes("bookings");
  const isInStaffPage = window.location.pathname.includes("staff");


  const [bookingsInput, setBookingsInput] = useState("");
  const [staffInput, setStaffInput] = useState("");

  const handleBookingsChange = (e) => {
    setBookingsInput(e.target.value);
  };

  const handleStaffChange = (e) => {
    setStaffInput(e.target.value);
  };

  useEffect(() => {
    if (bookingsInput === "") {
      setData(bookings || staff || rooms || reviews);
    } else {
      const filteredData = bookings.filter((item) => item.guest.name.toLowerCase().includes(bookingsInput.toLowerCase()));
      setData(filteredData);
    }
  }, [bookingsInput]);

  useEffect(() => {
    if (staffInput === "") {
      setData(staff || bookings || rooms || reviews);
    } else {
      const filteredData = staff.filter((item) => item.fullName.toLowerCase().includes(staffInput.toLowerCase()));
      setData(filteredData);
    }
  }, [staffInput]);

  const handleBookingsSort = (e) => {
    const sortValue = e.target.value;
    let dataToSort = [...data];
    let sortedData = [];
    switch (sortValue) {
      case "order-date":
        sortedData = dataToSort.sort((a, b) => new Date(a.order_date) - new Date(b.order_date));
        setData(sortedData);
        break;
      case "guest":
        sortedData = dataToSort.sort((a, b) => a.guest.name > b.guest.name ? 1 : -1);
        setData(sortedData);
        break;
      case "check-in":
        sortedData = dataToSort.sort((a, b) => new Date(a.check_in) - new Date(b.check_in));
        setData(sortedData);
        break;
      case "check-out":
        sortedData = dataToSort.sort((a, b) => new Date(a.check_out) - new Date(b.check_out));
        setData(sortedData);
        break;
    }
  }

  const handleEmployeesSort = (e) => {
    const sortValue = e.target.value;
    let dataToSort = [...data];
    let sortedData = [];
    switch (sortValue) {
      case "start-date":
        sortedData = dataToSort.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        setData(sortedData);
        break;
      case "employee-name":
        sortedData = dataToSort.sort((a, b) => a.fullName > b.fullName ? 1 : -1);
        setData(sortedData);
        break;
    }
  }

  return (
  <StyledFilters>
    <div>
        {buttons.map((button, index) => {
            return <button onClick={button.action} key={index}>{button.label}</button>
        })}
        {isInBookingsPage && <input onChange={handleBookingsChange} value={bookingsInput} type="text" name="guest-name" id="guest-name"  placeholder="Guest name"/>}
        {isInStaffPage && <input onChange={handleStaffChange} value={staffInput} type="text" name="staff-name" id="staff-name"  placeholder="Staff member"/>}
    </div>
    {isInRoomsPage && <Button $primary>+ New Room</Button>} 
    {isInBookingsPage &&  <StyledSelect onChange={handleBookingsSort}>
                            <option value="order-date">Order Date</option>
                            <option value="guest">Guest</option>
                            <option value="check-in">Check In</option>
                            <option value="check-out">Check Out</option>
                          </StyledSelect>}
    {isInStaffPage && <article>
                        <Button $primary>+ New Employee</Button>
                        <StyledSelect onChange={handleEmployeesSort}>
                            <option value="start-date">Start Date</option>
                            <option value="employee-name">Name</option>
                        </StyledSelect>
                      </article>}
  </StyledFilters>
  );
};

export default Filters;
