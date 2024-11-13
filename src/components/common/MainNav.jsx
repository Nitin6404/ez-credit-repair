import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/672-6724074_transparent-tm-logo-png-logo-trademark-symbol-png.png"


export function MainNav() {
  // Helper function for active class styling
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 underline font-bold decoration-[5px] underline-offset-[26px]"
      : "hover:text-blue-700";

  return (
    <nav className="flex justify-around items-center shadow-md border-b-[6px] border-zinc-500/50 text-sm font-semibold text-gray-700">
      <div className="flex p-5 items-center h-16">
        <NavLink to="/" className="text-2xl font-bold text-blue-700">
          <img src={logo} alt="Eze Credit Repair Logo" className="h-[60px] " />
        </NavLink>
      </div>
      <div className="flex space-x-3">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/services" className={getLinkClass}>
          Our Services
        </NavLink>
        <NavLink to="/pricing" className={getLinkClass}>
          Pricing Page
        </NavLink>
        <NavLink to="/how-it-works" className={getLinkClass}>
          How It Works
        </NavLink>
        <NavLink to="/f&q" className={getLinkClass}>
          FAQ
        </NavLink>
        <NavLink to="/contact" className={getLinkClass}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
