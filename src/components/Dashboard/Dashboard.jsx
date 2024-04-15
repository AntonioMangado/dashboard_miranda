import React from "react";

const Dashboard = ({setAuth}) => {

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem('auth');
  }
  
  return (
  <div>
    <p>Dashboard</p>
    <button onClick={handleLogout}>LOGOUT</button>
  </div>
  )

    ;
};

export default Dashboard;
