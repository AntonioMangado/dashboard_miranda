import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import { SideBarContext } from "./context/SideBarContext"
import Login from "./components/Login/index"
import Dashboard from "./components/Dashboard/index"
import Staff from "./components/Staff/index.js"
import RoomList from "./components/RoomList/index.js"
import RoomDetails from "./components/RoomDetails/index.js"
import Reviews from "./components/Reviews/index.js"
import Bookings from "./components/Bookings/index.js"
import BookingDetails from "./components/BookingDetails/index.js"
import PrivateRoute from "./components/PrivateRoute/index.js"
import SideBar from "./components/SideBar/index.js"



export default function App() {

  const { state, dispatch } = useAuthContext()
  const { isShown } = useContext(SideBarContext)

  return (
    <div className={isShown ? "" : "one-column"}>
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
          <Route path="/rooms/:id" element={
            <PrivateRoute  >
              <RoomDetails/>
            </PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
