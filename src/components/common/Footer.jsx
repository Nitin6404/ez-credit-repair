import credit0 from '../asset/logo.png';
import { HashLink } from 'react-router-hash-link';
import square from '../asset/Vector.svg';
import wsquare from '../asset/wsquare.svg';
import layer191 from '../asset/Layer191.png';
import mail from '../asset/mailfooter.png';
import office from '../asset/officeaddress.png';
export function Footer() {
  return (
    <div>
      <div className="mb-[0px] mt-[40px] border-y bg-[#15549A] py-4 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          {/* Logo Section */}
          <div className="mb-4 flex items-center md:mb-0">
            <img
              src={credit0}
              alt="Eze Credit Repair Logo"
              className="ml-[70px] h-[79px] w-[135px]"
            />
          </div>

          {/* Mail & Phone Section */}
          <div className="mb-4 flex items-center space-x-2 md:mb-0">
            <div className="flex items-center">
              <img src={mail} alt="mail" className="ml-[150px] h-[74px] w-[67px]" />
              <i className="fas fa-user-circle text-3xl"></i>
            </div>
            <div>
              <h3 className="font-montserrat text-[25px] font-bold leading-[30px]">Mail & Phone</h3>
              <p className="font-montserrat text-[22px] font-normal leading-[27px]">
                Support@EZEcreditRepair.com
              </p>
              <p className="font-montserrat text-[22px] font-[400px] leading-[27px]">
                0000-000-000
              </p>
            </div>
          </div>

          {/* Office Address Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <img src={office} alt="mail" className="h-[81px] w-[56px]" />
              <i className="fas fa-map-marker-alt text-3xl"></i>
            </div>
            <div>
              <h3 className="font-montserrat text-[25px] font-bold leading-[30px]">
                Office Address, USA
              </h3>
              <p className="font-montserrat text-[22px] font-normal leading-[27px]">
                120 Double Street, Texas,
              </p>
              <p className="font-montserrat text-[22px] font-normal leading-[27px]">Houston USA</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#15549a] py-[2px] text-white">
        <div className="container mx-auto grid px-[0px] xl:grid-cols-3">
          {/* Logo and Description */}
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
            <h3 className="mt-[10px] p-3 font-montserrat text-[31px] font-bold leading-[28px]">
              Shot Link
            </h3>
            <ul className="mt-[5px] space-y-1 p-5 font-montserrat">
              {/* Main List */}
              <li>
                <img src={square} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/about"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  About Us
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/services"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  Our Services
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/pricing"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  Pricing Page
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/work"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  How It Works
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/learning-center"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  Learning Center
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/terms-and-conditions"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  Terms and Conditions
                </HashLink>
              </li>
            </ul>

            {/* Right-Aligned Section */}
            <ul className="absolute right-5 top-[85px] mt-[12px] space-y-1">
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/f&q"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  FAQ
                </HashLink>
              </li>
              <li>
                <img src={wsquare} alt="square" className="mr-2 inline-block h-[15px] w-[8px]" />
                <HashLink
                  smooth
                  to="/privacy-policy"
                  className="align-middle font-montserrat text-[20px] leading-[25px] hover:font-bold"
                >
                  Privacy Policy
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Subscribe and Social Media */}
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
            <div className="mt-4 flex space-x-4 text-lg">
              <img src={layer191} alt="layer191" className="mb-[40px] h-[45px] w-[211px]" />
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
        <div className="mb-[-5px] h-[50px] bg-[#46CC02] py-4 text-center font-inter text-[16px] font-bold leading-[20px] text-white">
          All 2024 Copyrights Reserved by EzeCreditRepair.com
        </div>
      </footer>
    </div>
  );
}
