import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthContext } from "../../hooks/useAuthContext";
import { resetError } from "../../features/bookings/bookingsSlice"; 


const PrivateRoute = ({children}) => {

  const dispatch = useDispatch();
  const { state } = useAuthContext();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.user.isAuth) {
      dispatch(resetError());
      navigate('/login');
    }
  }, [state])
  

  return children;
};

export default PrivateRoute;
