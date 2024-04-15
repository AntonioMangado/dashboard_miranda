import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import GuestList from "./components/GuestList"
import GuestDetails from "./components/GuestDetails"
import ConciergeList from "./components/ConciergeList"
import RoomList from "./components/RoomList"
import Reviews from "./components/Reviews"
import Bookings from "./components/Bookings"
import BookingDetails from "./components/BookingDetails"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {

  const [auth, setAuth] = useState(localStorage.getItem('auth') || false);
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth}/>} />
        <Route path="/login" element={<Login setAuth={setAuth}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute auth={auth} >
            <Dashboard setAuth={setAuth}/>
          </PrivateRoute> } />
        <Route path="/guests" element={
          <PrivateRoute auth={auth} >
            <GuestList />
          </PrivateRoute> } />
        <Route path="/concierge" element={
          <PrivateRoute auth={auth} >
            <ConciergeList />
          </PrivateRoute> } />
        <Route path="/rooms" element={
          <PrivateRoute auth={auth} >
            <RoomList />
          </PrivateRoute> } />
        <Route path="/reviews" element={
          <PrivateRoute auth={auth} >
            <Reviews />
          </PrivateRoute> } />
        <Route path="/bookings" element={
          <PrivateRoute auth={auth} >
            <Bookings />
          </PrivateRoute> } />
        <Route path="/bookings/:id" element={
          <PrivateRoute auth={auth} >
            <BookingDetails />
          </PrivateRoute> } />
        <Route path="/guests/:id" element={
          <PrivateRoute auth={auth} >
            <GuestDetails/>
          </PrivateRoute> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}
