import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";


const PrivateRoute = ({children}) => {

  const { state } = useAuthContext();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.user.isAuth) {
      navigate('/login');
    }
  }, [state])
  

  return children;
};

export default PrivateRoute;
