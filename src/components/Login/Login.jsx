import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "../../styledComponents/StyledLogin";
import { Button } from "../../styledComponents/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { admins } from "../../../data/admins";

const Login = () => {

  const navigate = useNavigate();
  const { dispatch, state } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = admins.find(admin => admin.username === e.target.username.value && admin.password === e.target.password.value);
    if (admin) {
      const user = {
        username: e.target.username.value,
        email: admin.email,
        isAuth: true
      }
      dispatch({type: 'LOGIN', payload: user})
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
      return;
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
