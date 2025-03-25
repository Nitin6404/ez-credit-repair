import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  { path: '/terms-and-conditions', label: 'Terms and Conditions' },
];

const rightAlignedLinks = [
  { path: '/faq', label: 'FAQ' },
  { path: '/learning-center', label: 'Learning Center' },
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
      className="inline-block font-montserrat text-[18px] font-[400] leading-[25px] hover:font-[700]"
    >
      {label}
    </a>
  </li>
);

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

const ContactSection = ({ icon, title, children }) => (
  <div
    className={`hidden flex-col items-center md:ml-5 md:flex-row md:items-center lg:flex lg:w-full`}
  >
    <div className="flex items-center lg:mr-5">
      <img src={icon} alt={`${title} Icon`} className={`object-cover`} />
    </div>
    <div className="text-center md:text-left">
      <h3 className="font-montserrat text-[20px] font-bold leading-[30px] md:text-[25px]">
        {title}
      </h3>
      {children}
    </div>
  </div>
);

ContactSection.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export function Footer() {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden">
      {/* Top Info Bar */}
      <div className="mb-[0px] mt-[40px] bg-[#15549A] py-4 text-white lg:border-y">
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-3">
          {/* Logo */}
          <div className="ml-28 w-full">
            <div className="mb-4 hidden items-center md:mb-0 lg:flex">
              <img
                src={credit0}
                alt="Eze Credit Repair Logo"
                className="h-[60px] w-[100px] md:h-[79px] md:w-[135px]"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full">
            <ContactSection icon={mail} title="Mail & Phone">
              <p className="font-montserrat text-[22px] font-normal leading-[27px]">
                {contactInfo.email}
              </p>
              <p className="font-montserrat text-[22px] font-[400px] leading-[27px]">
                {contactInfo.phone}
              </p>
            </ContactSection>
          </div>

          {/* Address */}

          <div className="w-full">
            <ContactSection icon={office} title="Office Address, USA">
              <p className="text-nowrap font-montserrat text-[22px] font-normal leading-[27px]">
                {contactInfo.address.line1}
              </p>
              <p className="font-montserrat text-[22px] font-normal leading-[27px]">
                {contactInfo.address.line2}
              </p>
            </ContactSection>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#15549a] py-[2px] text-white">
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-3">
          {/* Company Info */}
          <div className="mt-[1px] hidden md:ml-5 lg:ml-28 lg:block lg:pr-4">
            <h2 className="text-left font-montserrat text-[25px] font-bold leading-normal md:text-left md:text-[31px] md:leading-[88px]">
              EzeCreditRepair LLC.
            </h2>
            <p className="mt-2 text-left font-montserrat text-[16px] font-normal leading-[25px] md:text-left md:text-[18px] lg:text-justify">
              EzeCredit Repair is your trusted guide to better credit, ensuring you&apos;re ready
              for every opportunity that comes your way. As the A-Team of credit repair, our
              fast-track process improves your credit for better rates, loans, and peace of mind.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="relative md:border-x md:border-y-0 lg:border-solid">
            <h2 className="text-left font-montserrat text-[25px] font-bold leading-normal md:ml-5 md:text-left md:text-[31px] md:leading-[88px]">
              Short Link
            </h2>
            <div className="flex flex-col px-4 md:flex-row">
              {/* Main Navigation */}
              <div className="w-full md:w-1/2">
                <ul className="mt-[5px] space-y-1 text-left font-montserrat md:text-left lg:text-center">
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
              <div className="mt-2 w-full md:mt-[5px] md:w-1/2 lg:mt-4">
                <ul className="space-y-1 text-left font-montserrat md:text-left lg:text-center">
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
          <div className="mt-[30px] px-4 md:mt-0 md:px-0">
            <h2 className="ml-5 text-left font-montserrat text-[25px] font-bold leading-normal md:text-left md:text-[31px] md:leading-[88px]">
              Follow Us
            </h2>
            <div className="mt-4 flex flex-col items-center space-y-2 md:ml-5 md:mt-1 md:items-start">
              <input
                type="email"
                placeholder="Email address"
                className="h-[50px] w-full max-w-[348px] border-none bg-[#4476AE] px-4 py-2 font-montserrat text-[16px] font-bold leading-[20px] text-white placeholder-white"
              />
              <button className="h-[50px] w-full max-w-[348px] bg-[#46CC02] px-4 py-2 text-center font-montserrat text-[16px] font-[700] leading-[20px] text-white md:text-left">
                Subscribe Now
              </button>
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <img
                src={layer191}
                alt="Social Media Icons"
                className="mb-[40px] h-[45px] w-[211px] md:ml-5"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="h-[50px] bg-[#46CC02] py-4 text-center font-inter text-[14px] font-bold leading-[20px] text-white md:text-[16px]">
          All {currentYear} Copyrights Reserved by EzeCreditRepair.com
        </div>
      </footer>
    </div>
  );
}
