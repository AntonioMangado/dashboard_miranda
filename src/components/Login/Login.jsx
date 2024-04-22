import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "../../styledComponents/StyledLogin";
import { Button } from "../../styledComponents/Button";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value === 'admin' && e.target.password.value === 'admin') {
      dispatch({type: 'LOGIN', payload: e.target.username.value})
      localStorage.setItem('auth', true);
      localStorage.setItem('user', e.target.username.value);
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
