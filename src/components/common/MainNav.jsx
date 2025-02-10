import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../asset/672-6724074_transparent-tm-logo-png-logo-trademark-symbol-png.png';
import { Menu, X } from 'lucide-react';

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function for active class styling
  const getLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#04284F] underline font-bold decoration-[9px] decoration-[#15549A] lg:underline-offset-[39px] md:underline-offset-[33px] z-10'
      : 'text-[#7A7A7A]';

  return (
    <div>
      <div className="bg-white shadow-2xl">
        <nav className="relative flex items-center justify-between px-4 py-2 md:justify-between md:px-2 md:py-2 lg:justify-around lg:py-3">
          <div className="flex h-16 items-center">
            <NavLink to="/" className="text-2xl font-bold text-[#15549A]">
              <img
                height={85}
                width={146}
                src={logo}
                alt="Eze Credit Repair Logo"
                className="h-16 md:h-20"
              />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#15549A] md:hidden">
            {isMenuOpen ? (
              <X className="h-10 w-10 sm:h-14 sm:w-14" />
            ) : (
              <Menu className="h-10 w-10 sm:h-14 sm:w-14" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden font-montserrat text-[#7A7A7A] md:flex md:space-x-4 md:text-base lg:space-x-8 lg:text-lg">
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg md:hidden">
              <div className="flex flex-col space-y-3 p-4 font-montserrat text-[#7A7A7A]">
                <NavLink to="/" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/about" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
                  About Us
                </NavLink>
                <NavLink
                  to="/pricing"
                  className={getLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/how-it-works"
                  className={getLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </NavLink>
                <NavLink
                  to="/tradelines"
                  className={getLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tradelines
                </NavLink>
                <NavLink to="/faq" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </NavLink>
                <NavLink
                  to="/learning-center"
                  className={getLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learning Center
                </NavLink>
                <NavLink
                  to="/contact"
                  className={getLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className="shadow-lg">
        <div className="shadow-top relative h-2 w-full bg-[#FFFFFF]"></div>
      </div>
    </div>
  );
}
