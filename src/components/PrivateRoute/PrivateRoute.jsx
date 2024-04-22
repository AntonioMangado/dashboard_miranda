import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const PrivateRoute = ({children}) => {

  const { state } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuth) {
      navigate('/login');
    }
  }, [state.isAuth])
  

  return children;
};

export default PrivateRoute;
