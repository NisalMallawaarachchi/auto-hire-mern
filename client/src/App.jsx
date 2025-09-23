import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import CarDetails from "./pages/CarDetails.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import { useState } from "react";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [ShowLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route
          path="/car-details/:id"
          element={
            <CarDetails ShowLogin={ShowLogin} setShowLogin={setShowLogin} />
          }
        />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
}
