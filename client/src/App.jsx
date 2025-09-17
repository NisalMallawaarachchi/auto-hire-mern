import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import { useState } from "react";
export default function App() {
  const [ShowLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
    </>
  );
}
