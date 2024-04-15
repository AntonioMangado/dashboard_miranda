import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import GuestList from "./components/GuestList"
import GuestDetails from "./components/GuestDetails"
import ConciergeList from "./components/ConciergeList"
import RoomList from "./components/RoomList"
import Reviews from "./components/Reviews"

export default function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guests" element={<GuestList />} />
        <Route path="/guests/:id" element={<GuestDetails />} />
        <Route path="/concierge" element={<ConciergeList />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
