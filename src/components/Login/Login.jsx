import { useNavigate } from "react-router-dom";
import { StyledLogin } from "../../styledComponents/StyledLogin";
import { Button } from "../../styledComponents/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useAuthContext();

  const notifyLoginSuccessful = () => toast.success('Login successful!', {
    autoClose: 1300,
  });
  const notifyWrongCrendentials = (message) => toast.error(`${message}!`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })

    if (!response.ok) {
      notifyWrongCrendentials('Couldnt connect to server!');
      return;
    }
    const data = await response.json();
    if (!data.error && data.email) {
      const user = {
        username: data.username,
        email: data.email,
        isAuth: true
      }
      localStorage.setItem('auth-token', data.token);
      notifyLoginSuccessful();
      dispatch({type: 'LOGIN', payload: user})
      navigate('/dashboard');
    } else {
      notifyWrongCrendentials(data.message);
      return;
    }
  }

  return (
    <StyledLogin>
      <div className="background-top"></div>
      <div className="background-bottom"></div>
      <form onSubmit={handleSubmit}>
          <article>
            <h2>Hello!</h2>
            <p>Sign in to your account</p>
          </article>
          <input type="email" id="email" name="email" placeholder="Email"/>
          <input type="password" id="password" name="password" placeholder="Password"/>
          <Button $primary type="submit">Login</Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
