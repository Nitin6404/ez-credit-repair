import { NavLink } from 'react-router-dom';
import logo from '../asset/672-6724074_transparent-tm-logo-png-logo-trademark-symbol-png.png';

export function MainNav() {
  // Helper function for active class styling
  const getLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#04284F] underline font-bold decoration-[9px] decoration-[#15549A] lg:underline-offset-[39px] md:underline-offset-[33px] z-10'
      : 'text-[#04284F]';

  return (
    <div>
      <div className="bg-white shadow-2xl">
        <nav className="lg:py-3 md:py-2 md:px-2 flex md:justify-between lg:justify-around items-center text-sm font-semibold">
          <div className="flex items-center h-16 md:ml-5 lg:ml-20">
            <NavLink to="/" className="text-2xl font-bold text-[#15549A]">
              <img
                height={85}
                width={146}
                src={logo}
                alt="Eze Credit Repair Logo"
                className="h-20"
              />
            </NavLink>
          </div>
          <div className="flex md:space-x-4 lg:space-x-8 md:text-base lg:text-lg text-[#04284F] font-montserrat">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/pricing" className={getLinkClass}>
              Pricing
            </NavLink>
            <NavLink to="/how-it-works" className={getLinkClass}>
              How it works
            </NavLink>
            <NavLink to="/tradelines" className={getLinkClass}>
              Tradelines
            </NavLink>
            <NavLink to="/faq" className={getLinkClass}>
              FAQ
            </NavLink>
            <NavLink to="/learning-center" className={getLinkClass}>
              Learning Center
            </NavLink>
            <NavLink to="/contact" className={getLinkClass}>
              Contact us
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="shadow-lg">
        <div className="relative w-full h-2 bg-[#FFFFFF]"></div>
        <div className="relative w-full h-2 bg-[#D2D3D4]"></div>
      </div>
    </div>
  );
}
