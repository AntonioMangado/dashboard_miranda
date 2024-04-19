import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "../../styledComponents/StyledLogin";
import { Button } from "../../styledComponents/Button";

const Login = ({setAuth}) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);

    if (e.target.username.value !== 'admin' || e.target.password.value !== 'admin') {
      alert('Invalid credentials');
      return;
    } else {
      setAuth(true);
      localStorage.setItem('auth', true);
      navigate('/dashboard');
    }
  }

  return (
    <StyledLogin>
      <div></div>
      <div></div>
      <form onSubmit={handleSubmit}>
          <article>
            <h2>Hello!</h2>
            <p>Sign in to your account</p>
          </article>
          <input type="text" id="username" name="username" placeholder="Username"/>
          <input type="password" id="password" name="password" placeholder="Password"/>
          <Button $primary type="submit">Login</Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
