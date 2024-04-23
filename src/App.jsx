import { useState, useReducer } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import { initialState, reducer } from "./reducers/authReducer"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import GuestList from "./components/GuestList"
import GuestDetails from "./components/GuestDetails"
import Staff from "./components/Staff"
import RoomList from "./components/RoomList"
import RoomDetails from "./components/RoomDetails"
import Reviews from "./components/Reviews"
import Bookings from "./components/Bookings"
import BookingDetails from "./components/BookingDetails"
import PrivateRoute from "./components/PrivateRoute"
import SideBar from "./components/SideBar"

export default function App() {

  const [auth, setAuth] = useState(localStorage.getItem('auth') || false);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        {state.isAuth ? <SideBar setAuth={setAuth}/> : <></>}
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth}/>} />
          <Route path="/" element={
            <PrivateRoute  >
              <Dashboard />
            </PrivateRoute> } />
          <Route path="/dashboard" element={
            <PrivateRoute  >
              <Dashboard />
            </PrivateRoute> } />
          <Route path="/guests" element={
            <PrivateRoute  >
              <GuestList />
            </PrivateRoute> } />
          <Route path="/staff" element={
            <PrivateRoute  >
              <Staff />
            </PrivateRoute> } />
          <Route path="/rooms" element={
            <PrivateRoute  >
              <RoomList />
            </PrivateRoute> } />
          <Route path="/reviews" element={
            <PrivateRoute  >
              <Reviews />
            </PrivateRoute> } />
          <Route path="/bookings" element={
            <PrivateRoute  >
              <Bookings />
            </PrivateRoute> } />
          <Route path="/bookings/:id" element={
            <PrivateRoute  >
              <BookingDetails />
            </PrivateRoute> } />
          <Route path="/guests/:id" element={
            <PrivateRoute  >
              <GuestDetails/>
            </PrivateRoute> } />
          <Route path="/rooms/:id" element={
            <PrivateRoute  >
              <RoomDetails/>
            </PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider> 
    </>
  )
}
