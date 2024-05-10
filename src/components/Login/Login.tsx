import { useNavigate } from "react-router-dom";
import { StyledLogin } from "../../styledComponents/StyledLogin";
import { Button } from "../../styledComponents/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { admins } from "../../../data/admins";
import { User } from "../../../lib/types"

interface Target {
  username: { value: string };
  password: { value: string };
}

const Login = () => {

  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & Target;
    const admin = admins.find(admin => admin.username === target.username.value && admin.password === target.password.value);
    if (admin) {
      const user: User["user"] = {
        username: target.username.value,
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
