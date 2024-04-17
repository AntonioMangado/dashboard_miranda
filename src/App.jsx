import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
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
  
  return (
    <>
    <BrowserRouter>
      {auth ? <SideBar setAuth={setAuth}/> : <></>}
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth}/>} />
        <Route path="/" element={
          <PrivateRoute auth={auth} >
            <Dashboard />
          </PrivateRoute> } />
        <Route path="/dashboard" element={
          <PrivateRoute auth={auth} >
            <Dashboard />
          </PrivateRoute> } />
        <Route path="/guests" element={
          <PrivateRoute auth={auth} >
            <GuestList />
          </PrivateRoute> } />
        <Route path="/staff" element={
          <PrivateRoute auth={auth} >
            <Staff />
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
        <Route path="/rooms/:id" element={
          <PrivateRoute auth={auth} >
            <RoomDetails/>
          </PrivateRoute> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}
