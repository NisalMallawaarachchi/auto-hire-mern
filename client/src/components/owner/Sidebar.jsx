import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets.js";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };

  // Function to check if a link is active
  const isLinkActive = (linkPath) => {
    // Handle the dashboard/index route specifically
    if (linkPath === "/owner" || linkPath === "/owner/") {
      return location.pathname === "/owner" || location.pathname === "/owner/";
    }
    return location.pathname === linkPath;
  };

  return (
    <div className="fixed left-0 top-[64px] min-h-[calc(100vh-64px)] flex flex-col items-center pt-10 w-64 border-r border-borderColor bg-white text-sm shadow-md">

      {/* Profile Section */}
      <div className="relative group">
        <label htmlFor="image" className="cursor-pointer">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image || "https://i.postimg.cc/xjhghtvQ/boy.png"
            }
            alt="profile"
            className="w-24 h-24 rounded-full border-2 border-primary object-cover"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-full hidden group-hover:flex items-center justify-center">
            <img src={assets.edit_icon} alt="edit" className="w-6 h-6" />
          </div>
        </label>
      </div>

      {image && (
        <button
          className="mt-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-md hover:bg-primary/20 transition"
          onClick={updateImage}
        >
          Save{" "}
          <img
            src={assets.check_icon}
            alt="save"
            width={12}
            className="inline ml-1"
          />
        </button>
      )}

      {/* User Name */}
      <p className="mt-3 text-base font-medium">{user?.name}</p>

      {/* Menu Links */}
      <nav className="w-full mt-8">
        {ownerMenuLinks.map((link, index) => {
          const isActive = isLinkActive(link.path);

          return (
            <NavLink
              key={index}
              to={link.path}
              end={link.path === "/owner"} // Important: end prop for exact matching of index route
              className={({ isActive: navLinkActive }) => {
                // Use our custom logic for active state
                const active = isActive || navLinkActive;
                return `relative flex items-center gap-3 w-full py-3 pl-6 pr-4 transition-all 
                ${
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                }`;
              }}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt="icon"
                className="w-5 h-5"
              />
              <span>{link.name}</span>

              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r"></div>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
