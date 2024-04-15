import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setAuth}) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    setAuth(true);
    localStorage.setItem('auth', true);
    navigate('/dashboard');
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
