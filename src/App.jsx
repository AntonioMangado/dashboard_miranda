import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext.js"
import { SideBarContext } from "./context/SideBarContext.jsx"
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
import NewRoom from "./components/NewRoom"
import UpdateRoom from "./components/UpdateRoom"

export default function App() {

  const { state } = useAuthContext()
  const { isShown } = useContext(SideBarContext)

  return (
    <div className={isShown ? "content" : "content one-column"}>
      <BrowserRouter>
        {state.user.isAuth ? <SideBar/> : <></>}
        <Routes>
          <Route path="/login" element={<Login/>} />
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
          <Route path="/newroom" element={
            <PrivateRoute  >
              <NewRoom />
            </PrivateRoute> } />
          <Route path="/updateroom/:id" element={
            <PrivateRoute  >
              <UpdateRoom />
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
    </div>
  )
}
