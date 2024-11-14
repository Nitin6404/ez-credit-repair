import credit0 from "../asset/logo.png";
import { HashLink } from "react-router-hash-link";
import square from "../asset/Vector.svg"
import wsquare from "../asset/wsquare.svg"
import layer191 from "../asset/Layer191.png"
export function Footer() {
  return (
    <div>
      <div className="bg-[#15549A] text-white py-4 border-y  mb-[0px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={credit0}
              alt="Eze Credit Repair Logo"
              className="h-[60px] ml-[70px] "
            />
          </div>

          {/* Mail & Phone Section */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex items-center">
              <i className="fas fa-user-circle text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold font-montserrat">Mail & Phone</h3>
              <p className="font-normal font-montserrat">
                Support@EZEcreditRepair.com
              </p>
              <p className="font-normal font-montserrat">0000-000-000</p>
            </div>
          </div>

          {/* Office Address Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold font-montserrat">Office Address, USA</h3>
              <p className="font-normal font-montserrat">
                120 Double Street, Texas,
              </p>
              <p className="font-normal font-montserrat">Houston USA</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#15549a] text-white py-1">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="ml-[10px] mt-[10px]">
            <h2 className="text-2xl font-montserrat font-bold">
              EzeCreditRepair LLC.
            </h2>
            <p className="mt-4 font-montserrat font-[600] text-sm ">
              EzeCredit Repair is your trusted guide to better credit, ensuring
              you're ready for every opportunity that comes your way. As the
              A-Team of credit repair, our fast-track process improves your
              credit for better rates, loans, and peace of mind.
            </p>
          </div>

          {/* Contact Information */}

          {/* Quick Links */}
          <div className=" ml-[30px] border-x border-solid p-3">
            <h3 className="text-lg font-bold font-montserrat">Shot Link</h3>
            <ul className="mt-2 space-y-1 font-montserrat text-sm">
              <li>
                <img src={square} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/" className=" hover:font-bold">
                  Home
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/about" className=" hover:font-bold">
                  About Us
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/services" className="hover:font-bold">
                  Our Services
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/pricing" className=" hover:font-bold">
                  Pricing Page
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/work" className=" hover:font-bold">
                  How It Works
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink
                  smooth
                  to="/learning-center"
                  className=" hover:font-bold"
                >
                  Learning Center
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink
                  to="/terms-and-conditions"
                  className=" hover:font-bold"
                >
                  Terms and Conditions
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink smooth to="/f&q" className=" hover:font-bold">
                  FAQ
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="inline-block w-[8px] h-[15px] mr-2" />
                <HashLink
                  smooth
                  to="/privacy-policy"
                  className=" hover:font-bold"
                >
                  Privacy Policy
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Subscribe and Social Media */}
          <div className="mt-[10px]">
            <h3 className="text-lg font-bold font-montserrat">Follow us</h3>
            <div className="flex flex-col mt-4 space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border-none bg-[#4476AE] text-white placeholder-white"
              />
              <button className="bg-[#46CC02] text-white py-2 font-montserrat font-[700] ">
                Subscribe Now
              </button>
            </div>
            <div className="flex space-x-4 mt-4 text-lg ">
              <img src={layer191} alt="layer191" className="w-[150px] h-[32px] mb-[10px]" /> 
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
        <div className="bg-[#46CC02] text-center text-white py-2 mb-[-5px]">
          All 2024 Copyrights Reserved by EzeCreditRepair.com
        </div>
      </footer>
    </div>
  );
}
