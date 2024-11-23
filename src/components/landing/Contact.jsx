import { Footer } from "../common/Footer";
import credit1 from "../asset/phone.svg";
import credit2 from "../asset/mail.png";
import credit3 from "../asset/earth.png";
import credit4 from "../asset/map.png";
import credit10 from "../asset/map1.png";
import credit11 from "../asset/sign.png";
import AboutUs from "../asset/AboutUsbackground.png";

export function Contact() {
  return (
    <div className="w-full">
      <div className="relative p-2 mt-3">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 mt-[30px]"
        />

        {/* Inner Div with Background Image */}
        <div className="relative text-white p-2 items-center flex h-[130px]">
          <div className="flex max-w-screen-lg mt-[50px] font-inter font-bold text-2xl leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      {/* Apply credit0 as background */}
      <div className="flex justify-center mx-5 mt-20 w-[1375px] h-[705px] bg-[url('/src/components/asset/rctangle.svg')] ">
        <div className="text-white w-full flex flex-col md:flex-row px-20 py-7">
          <div className="w-1/2">
            {/* Left Section - Form */}
            <div className="flex-1 md:mr-8 mt-[15px]">
              <h2 className="text-5xl leading-[60px] font-inter font-bold">
                We are here to help you
              </h2>
              <p className="my-5 font-montserrat font-normal text-lg leading-6 w-[513px]">
                We specialize in helping individuals and families regain control
                of their finances by repairing and improving their credit
                scores.
              </p>
              <form className="grid gap-3 mt-[30px]">
                <div className="grid grid-cols-2 gap-2 w-[513px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 text-[#052B3E h-12] bg-white "
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 text-[#052B3E h-12] bg-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 w-[513px]">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-2 text-[#052B3E h-12] bg-white "
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="p-2 text-[#052B3E h-12] bg-white "
                  />
                </div>
                <input
                  type="text"
                  placeholder="Current Credit Score"
                  className="p-2 gap-2 w-[513px] bg-white h-12 text-black"
                />
                <input
                  type="text"
                  placeholder="Reason for Credit Repair"
                  className="p-2 gap-2 w-[513px] bg-white h-12 text-black"
                />
                <textarea
                  type="text"
                  placeholder="How Soon?"
                  className="p-1 gap-2 w-[513px] bg-white text-black h-[120px]"
                />
                <button className="p-2 h-12 font-montserrat bg-[#46CC02] text-lg text-white font-normal w-[30%]">
                  Sign Up Now
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div>
            <div className="md:w-[70%] mt-[20px] ml-[50px]">
              <h2 className="text-5xl leading-[60px] font-inter font-bold mb-4">
                Contact Us
              </h2>
              <ul className="space-y-8 font-montserrat font-normal text-3xl leading-9">
                <li className="flex items-center ">
                  <img
                    src={credit1}
                    alt="Credit Report"
                    className="mr-2 w-[40px] h-[40px]"
                  />
                  0000-00-0000
                </li>
                <li className="flex items-center">
                  <img
                    src={credit2}
                    alt="Credit Report"
                    className="inline-block mr-2 w-[40px] h-[40px]"
                  />
                  info@ezecreditrepair.com
                </li>
                <li className="flex items-center">
                  <img
                    src={credit3}
                    alt="Credit Report"
                    className="inline-block mr-2 w-[40px] h-[40px]"
                  />
                  ezecreditrepair.com
                </li>
                <li className="flex items-center">
                  <img
                    src={credit4}
                    alt="Credit Report"
                    className="inline-block mr-2 w-[40px] h-[40px]"
                  />
                  120 Double Street, Texas, Houston, USA
                </li>
              </ul>
              <div className="flex space-x-4 mt-8 text-2xl">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <span className="p-1 w-[200px] h-[80px] ml-[500px] mt-[220px] bg-white text-black absolute">
          Eze Credit Repair 120 Double Texas, Houston USA{" "}
        </span>
        <img src={credit10} alt="map" className=" mb-[30px]" />
        <img
          src={credit11}
          alt="map"
          className="ml-[550px] mt-[-450px] mb-[350px] w-[50px] h-[90px]"
        />
      </div>
      <Footer />
    </div>
  );
}
