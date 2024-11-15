import { NavLink } from "react-router-dom";
import logo from "../asset/672-6724074_transparent-tm-logo-png-logo-trademark-symbol-png.png";

export function MainNav() {
  // Helper function for active class styling
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#04284F] underline font-bold decoration-[5px] decoration-[#15549A] underline-offset-[26px]"
      : "text-[#04284F]";

  return (
    <nav className="pt-3 pb-0.5 flex justify-around items-center text-sm font-semibold">
      <div className="flex items-center h-16 ml-40">
        <NavLink to="/" className="text-2xl font-bold text-[#15549A]">
          <img src={logo} alt="Eze Credit Repair Logo" className="h-20" />
        </NavLink>
      </div>
      <div className="flex space-x-8 text-xl text-[#04284F]">
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
