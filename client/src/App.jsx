// Layout.jsx - Debug version with console logs
import Sidebar from "./components/owner/Sidebar.jsx";
import NavBarOwner from "./components/owner/NavBarOwner.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  
  // Debug: Log when Layout renders and current path
  useEffect(() => {
    console.log("Layout component rendered, current path:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <NavBarOwner />
      </div>

      {/* Main Layout Container */}
      <div className="flex pt-16">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto z-40">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-64 min-h-screen">
          <main className="p-6">
            {/* Debug info */}
            <div className="mb-4 p-2 bg-yellow-100 text-yellow-800 text-sm rounded">
              Debug: Current route: {location.pathname}
            </div>
            
            {/* This is crucial - Outlet renders the nested route */}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;