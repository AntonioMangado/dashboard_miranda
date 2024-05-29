import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthContext } from "../../hooks/useAuthContext";
import { resetErrorB } from "../../features/bookings/bookingsSlice"; 
import { resetErrorC } from "../../features/contact/contactSlice"; 
import { resetErrorR } from "../../features/rooms/roomsSlice"; 
import { resetErrorU } from "../../features/users/usersSlice"; 


const PrivateRoute = ({children}) => {

  const dispatch = useDispatch();
  const { state } = useAuthContext();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.user.isAuth) {
      dispatch(resetErrorB());
      dispatch(resetErrorC());
      dispatch(resetErrorR());
      dispatch(resetErrorU());
      navigate('/login');
    }
  }, [state])
  

  return children;
};

export default PrivateRoute;
