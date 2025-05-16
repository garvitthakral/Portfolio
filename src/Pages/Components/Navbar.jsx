import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showTabs, setShowTabs] = useState(false);
  const tabs = ["Projects", "Skills", "About", "contact"];

  return (
    <div className="flex justify-between bg-black/10  text-lg px-3 py-5 md:py-10 md:px-12 md:text-2xl lg:px-25 lg:text-3xl font-light shadow-2xl ">
      
      {/* Left: Logo */}
      <img
        src="https://res.cloudinary.com/dtntjxdio/image/upload/v1746854326/DEVLOPMENT_IN_PROCESS_sufuat.png"
        alt="Logo"
        className="w-120"
      />
      
      {/* Right: Nav Tabs */}
      <div className="hidden lg:flex gap-4 pt-4">
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
      <div className="lg:hidden pt-4" onClick={() => setShowTabs(!showTabs)}>
        {showTabs ? <MenuIcon style={{ fontSize: 40 }}/> : <MenuIcon style={{ fontSize: 40 }}/>}
      </div>
      
      {/* Mobile Menu */}
      {showTabs && (
        <>
        <div className="absolute grid gap-4 bg-black/10 backdrop-blur-md h-100 w-50 rounded-xl p-10 right-15 text-2xl md:right-26 lg:hidden">
           <NavLink to="/" onClick={() => setShowTabs(false)} className="hover:text-EPur">Home</NavLink>
          {tabs.map((tab, i) => (
                 <NavLink
              key={i}
              to={`/${tab.toLowerCase()}`}
              onClick={() => setShowTabs(false)}
              className="hover:text-EPur"
            >
              {tab}
            </NavLink>     
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
