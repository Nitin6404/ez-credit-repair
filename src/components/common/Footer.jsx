import React from 'react';
import { useLocation } from 'react-router-dom';
import layer191 from '../asset/Layer191.png';
import credit0 from '../asset/logo.png';
import mail from '../asset/mailfooter.png';
import office from '../asset/officeaddress.png';
import wsquare from '../asset/wsquare.svg';

const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/service', label: 'Our Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/learning-center', label: 'Learning Center' },
  { path: '/terms-and-conditions', label: 'Terms and Conditions' },
];

const rightAlignedLinks = [
  { path: '/faq', label: 'FAQ' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
];

const contactInfo = {
  email: 'Support@EZEcreditRepair.com',
  phone: '0000-000-000',
  address: {
    line1: '120 Double Street, Texas,',
    line2: 'Houston USA',
  },
};

const NavigationLink = ({ path, label, isActive }) => (
  <li className="flex items-center whitespace-nowrap">
    <div className="mr-2 h-[15px] w-[8px] flex-shrink-0">
      {isActive ? (
        <div className="h-full w-full bg-[#46CC02]" />
      ) : (
        <img src={wsquare} alt="square" className="h-full w-full" />
      )}
    </div>
    <a
      href={path}
      onClick={e => {
        e.preventDefault();
        if (path === window.location.pathname) {
          window.location.reload();
        } else {
          window.location.href = path;
        }
      }}
      className="inline-block font-montserrat text-[20px] font-[400] leading-[25px] hover:font-[700]"
    >
      {label}
    </a>
  </li>
);

const ContactSection = ({ icon, title, children }) => (
  <div className="mb-4 flex items-center space-x-2 md:mb-0">
    <div className="flex items-center">
      <img
        src={icon}
        alt={`${title} Icon`}
        className={icon === mail ? 'ml-[150px] h-[74px] w-[67px]' : 'h-[81px] w-[56px]'}
      />
    </div>
    <div>
      <h3 className="font-montserrat text-[25px] font-bold leading-[30px]">{title}</h3>
      {children}
    </div>
  </div>
);

export function Footer() {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Top Info Bar */}
      <div className="mb-[0px] mt-[40px] border-y bg-[#15549A] py-4 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          {/* Logo */}
          <div className="mb-4 flex items-center md:mb-0">
            <img
              src={credit0}
              alt="Eze Credit Repair Logo"
              className="ml-[70px] h-[79px] w-[135px]"
            />
          </div>

          {/* Contact Info */}
          <ContactSection icon={mail} title="Mail & Phone">
            <p className="font-montserrat text-[22px] font-normal leading-[27px]">
              {contactInfo.email}
            </p>
            <p className="font-montserrat text-[22px] font-[400px] leading-[27px]">
              {contactInfo.phone}
            </p>
          </ContactSection>

          {/* Address */}
          <ContactSection icon={office} title="Office Address, USA">
            <p className="font-montserrat text-[22px] font-normal leading-[27px]">
              {contactInfo.address.line1}
            </p>
            <p className="font-montserrat text-[22px] font-normal leading-[27px]">
              {contactInfo.address.line2}
            </p>
          </ContactSection>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#15549a] py-[2px] text-white">
        <div className="container mx-auto grid px-[0px] xl:grid-cols-3">
          {/* Company Info */}
          <div className="mt-[1px]">
            <h2 className="font-montserrat text-[31px] font-bold leading-[88px]">
              EzeCreditRepair LLC.
            </h2>
            <p className="mr-[50px] mt-2 font-montserrat text-[20px] font-[700] leading-[25px]">
              EzeCredit Repair is your trusted guide to better credit, ensuring you're ready for
              every opportunity that comes your way. As the A-Team of credit repair, our fast-track
              process improves your credit for better rates, loans, and peace of mind.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="relative border-x border-solid p-3">
            <h3 className="mt-[10px] p-3 font-montserrat text-[31px] font-bold leading-[28px]">
              Short Link
            </h3>
            <div className="flex px-4">
              {/* Main Navigation */}
              <div className="w-1/2">
                <ul className="mt-[5px] space-y-1 font-montserrat">
                  {navigationLinks.map(link => (
                    <NavigationLink
                      key={link.path}
                      path={link.path}
                      label={link.label}
                      isActive={pathname === link.path}
                    />
                  ))}
                </ul>
              </div>

              {/* Right-Aligned Links */}
              <div className="w-1/2">
                <ul className="mt-[5px] space-y-1 font-montserrat">
                  {rightAlignedLinks.map(link => (
                    <NavigationLink
                      key={link.path}
                      path={link.path}
                      label={link.label}
                      isActive={pathname === link.path}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className="ml-[20px] mt-[30px]">
            <h3 className="font-montserrat text-[31px] font-bold leading-[38px]">Follow us</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="h-[50px] w-[348px] border-none bg-[#4476AE] px-4 py-2 font-montserrat text-[16px] font-bold leading-[20px] text-white placeholder-white"
              />
              <button className="h-[50px] w-[348px] bg-[#46CC02] px-4 py-2 text-left font-montserrat text-[16px] font-[700] leading-[20px] text-white">
                Subscribe Now
              </button>
            </div>
            <div className="mt-4 flex space-x-4">
              <img
                src={layer191}
                alt="Social Media Icons"
                className="mb-[40px] h-[45px] w-[211px]"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mb-[-5px] h-[50px] bg-[#46CC02] py-4 text-center font-inter text-[16px] font-bold leading-[20px] text-white">
          All {currentYear} Copyrights Reserved by EzeCreditRepair.com
        </div>
      </footer>
    </div>
  );
}
