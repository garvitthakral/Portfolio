import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showTabs, setShowTabs] = useState(false);
  const tabs = ["Projects", "Skills", "About", "contact"];

  return (
    <div className="flex justify-between text-lg px-3 py-5 md:py-10 md:px-12 md:text-2xl lg:px-25 lg:text-3xl font-light shadow-2xl ">
      
      {/* Left: Logo */}
      <img
        src="https://res.cloudinary.com/dtntjxdio/image/upload/v1746854326/DEVLOPMENT_IN_PROCESS_sufuat.png"
        alt="Logo"
        className="w-120"
      />
      
      {/* Right: Nav Tabs */}
      <div className="hidden md:flex gap-4 pt-4">
        <NavLink
          to={"/"}
          className={({ isActive }) => `${isActive ? "text-EPur font-semibold" : ""}`}
        >
          Home
        </NavLink>
        {tabs.map((tab, idx) => (
          <NavLink
            key={idx}
            to={`/${tab.toLocaleLowerCase()}`}
            className={({ isActive }) => ` ${isActive ? "text-EPur font-semibold" : ""}`}
          >
            {tab}
          </NavLink>
        ))}
      </div>
      
    </div>
  );
};

export default Navbar;
