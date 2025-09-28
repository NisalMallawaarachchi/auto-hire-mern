import Sidebar from "../../components/owner/Sidebar.jsx";
import NavBarOwner from "../../components/owner/NavBarOwner.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <NavBarOwner />

      <div className="flex flex-1">
        {/* Sidebar stays fixed */}
        <Sidebar />

        {/* Page content shifts right */}
        <main className="ml-64 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
