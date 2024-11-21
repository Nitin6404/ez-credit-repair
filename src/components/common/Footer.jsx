import credit0 from "../asset/logo.png";
import { HashLink } from "react-router-hash-link";
import square from "../asset/Vector.svg";
import wsquare from "../asset/wsquare.svg";
import layer191 from "../asset/Layer191.png";
import mail from "../asset/mailfooter.png";
import office from "../asset/officeaddress.png";
export function Footer() {
  return (
    <div>
      <div className="bg-[#15549A] text-white py-4 border-y  mb-[0px] mt-[40px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={credit0}
              alt="Eze Credit Repair Logo"
              className="w-[135px] h-[79px] ml-[70px] "
            />
          </div>

          {/* Mail & Phone Section */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex items-center">
              <img src={mail} alt="mail" className="w-[67px] h-[74px] ml-[150px]" />
              <i className="fas fa-user-circle text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold font-montserrat text-[25px] leading-[30px]">
                Mail & Phone
              </h3>
              <p className="font-normal font-montserrat text-[22px] leading-[27px]">
                Support@EZEcreditRepair.com
              </p>
              <p className="font-[400px] text-[22px] leading-[27px] font-montserrat">
                0000-000-000
              </p>
            </div>
          </div>

          {/* Office Address Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <img src={office} alt="mail" className="w-[56px] h-[81px]" />
              <i className="fas fa-map-marker-alt text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold font-montserrat text-[25px] leading-[30px]">
                Office Address, USA
              </h3>
              <p className="font-normal font-montserrat text-[22px] leading-[27px]">
                120 Double Street, Texas,
              </p>
              <p className="font-normal text-[22px] leading-[27px] font-montserrat">
                Houston USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#15549a] text-white py-[2px]">
        <div className="container mx-auto px-[0px] grid xl:grid-cols-3">
          {/* Logo and Description */}
          <div className="mt-[1px]">
            <h2 className="text-[31px] leading-[88px] font-montserrat font-bold">
              EzeCreditRepair LLC.
            </h2>
            <p className="mt-2 font-montserrat font-[700] text-[20px] leading-[25px] mr-[50px] ">
              EzeCredit Repair is your trusted guide to better credit, ensuring
              you're ready for every opportunity that comes your way. As the
              A-Team of credit repair, our fast-track process improves your
              credit for better rates, loans, and peace of mind.
            </p>
          </div>

          {/* Contact Information */}

          {/* Quick Links */}
          {/* <div className=" ml-[30px] border-x border-solid p-3">
            <h3 className="text-[31px] leading-[28px] font-bold font-montserrat">Shot Link</h3>
            <ul className="mt-2 space-y-1 font-montserrat text-sm">
              <li>
                <img src={square} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/" className=" hover:font-bold font-montserrat text-[20px] leading-[25px]">
                  Home
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/about" className=" hover:font-bold font-montserrat text-[20px] leading-[25px]">
                  About Us
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/services" className="hover:font-bold font-montserrat text-[20px] leading-[25px]">
                  Our Services
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/pricing" className=" hover:font-bold font-montserrat text-[20px] leading-[25px]">
                  Pricing Page
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/work" className=" hover:font-bold font-montserrat text-[20px] leading-[25px]">  
                  How It Works
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink
                  smooth
                  to="/learning-center"
                  className=" hover:font-bold  font-montserrat text-[20px] leading-[25px]"
                >
                  Learning Center
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink
                  to="/terms-and-conditions"
                  className=" hover:font-bold  font-montserrat text-[20px] leading-[25px]"
                >
                  Terms and Conditions
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/f&q" className=" hover:font-bold  font-montserrat text-[20px] leading-[25px]">
                  FAQ
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink
                  smooth
                  to="/privacy-policy"
                  className=" hover:font-bold font-montserrat text-[20px] leading-[25px]"
                >
                  Privacy Policy
                </HashLink>
              </li>
            </ul>
          </div> */}
          <div className="relative border-x border-solid p-3">
            <h3 className="text-[31px] leading-[28px] font-bold font-montserrat p-3 mt-[10px]">
              Shot Link
            </h3>
            <ul className="mt-[5px] space-y-1 font-montserrat p-5">
              {/* Main List */}
              <li>
                <img
                  src={square}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/about"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  About Us
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/services"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  Our Services
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/pricing"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  Pricing Page
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/work"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  How It Works
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/learning-center"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  Learning Center
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/terms-and-conditions"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  Terms and Conditions
                </HashLink>
              </li>
            </ul>

            {/* Right-Aligned Section */}
            <ul className="absolute top-[85px] mt-[12px] right-5 space-y-1">
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/f&q"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  FAQ
                </HashLink>
              </li>
              <li>
                <img
                  src={wsquare}
                  alt="square"
                  className="inline-block w-[8px] h-[15px] mr-2"
                />
                <HashLink
                  smooth
                  to="/privacy-policy"
                  className="hover:font-bold font-montserrat text-[20px] leading-[25px] align-middle"
                >
                  Privacy Policy
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Subscribe and Social Media */}
          <div className="mt-[30px] ml-[20px]">
            <h3 className="text-[31px] leading-[38px] font-bold font-montserrat">
              Follow us
            </h3>
            <div className="flex flex-col mt-4 space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border-none w-[348px] h-[50px] bg-[#4476AE] text-white placeholder-white font-montserrat font-bold text-[16px] leading-[20px]"
              />
              <button className="bg-[#46CC02] text-white text-left px-4 py-2 w-[348px] h-[50px] text-[16px] leading-[20px] font-montserrat font-[700] ">
                Subscribe Now
              </button>
            </div>
            <div className="flex space-x-4 mt-4 text-lg ">
              <img
                src={layer191}
                alt="layer191"
                className="w-[211px] h-[45px] mb-[40px]"
              />
              {/* <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              />
              <script src="https://cdn.tailwindcss.com"></script>

              <HashLink href="#" className="hover:text-gray-300 ">
                <i className="fab fa-facebook"></i>
              </HashLink>
              <HashLink href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </HashLink>
              <HashLink href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </HashLink>
              <HashLink href="#" className="hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </HashLink> */}
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="bg-[#46CC02] text-center font-inter font-bold text-[16px] leading-[20px] text-white h-[50px] py-4 mb-[-5px]">
          All 2024 Copyrights Reserved by EzeCreditRepair.com
        </div>
      </footer>
    </div>
  );
}
