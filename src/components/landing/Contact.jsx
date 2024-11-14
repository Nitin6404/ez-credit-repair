import React from "react";
import { Footer } from "../common/Footer";
import credit1 from '../asset/phone.png';
import credit2 from '../asset/mail.png';
import credit3 from '../asset/earth.png';
import credit4 from '../asset/map.png';
import credit0 from '../asset/rctangle.png';
import credit10 from '../asset/map1.png';
import credit11 from '../asset/sign.png';
import AboutUs from '../asset/AboutUsbackground.png';

export function Contact() {
  return (
    <div>
     <div className="relative p-2 mt-3">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        {/* Inner Div with Background Image */}
        <div className="relative bg-blue-900/20 text-white p-2 flex items-center h-[80px] ">
          <div className="flex justify-start max-w-screen-lg ml-10">
            <span className="font-semibold ml-10">Home</span>
            <span className="mx-1">|</span>
            <span className="font-semibold">Contact Us</span>
          </div>
        </div>
      </div>
      {/* Apply credit0 as background */}
      <div
        className="flex justify-center mt-10 px-4 py-6 w-[1100px] h-[550px] mx-auto mb-[30px] rounded-2xl"
        style={{
          backgroundImage: `url(${credit0})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white w-full p-6 rounded-2xl flex flex-col md:flex-row">
          <div className="w-[550px]">
            {/* Left Section - Form */}
            <div className="flex-1 md:mr-8 mt-[-10px]">
              <h2 className="text-4xl font-bold">We are here to help you</h2>
              <p className="mt-[15px] mb-8">
                We specialize in helping individuals and families regain control
                of their finances by repairing and improving their credit scores.
              </p>
              <form className="grid gap-3 mt-[-15px]">
                <div className="grid grid-cols-2 gap-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 rounded bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 rounded bg-white text-black"
                  />
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-2 rounded bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="p-2 rounded bg-white text-black"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Current Credit Score"
                  className="p-2 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Reason for Credit Repair"
                  className="p-2 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="How Soon?"
                  className="p-1 rounded bg-white text-black h-[100px]"
                />
                <button className="p-2 rounded bg-green-500 text-white font-bold w-[30%]">
                  Sign Up Now
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div>
            <div className="md:w-[70%] mt-[-10px] ml-[50px]">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
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
      </div >
                <span
                  className="p-1 w-[200px] h-[80px] ml-[500px] mt-[220px] bg-white text-black absolute">
                 Eze Credit Repair 120 Double Texas, Houston USA </span>
      <img 
      src={credit10}
      alt='map'
      className=" mb-[30px]"
      />
      <img 
      src={credit11}
      alt='map'
      className="ml-[550px] mt-[-450px] mb-[350px] w-[50px] h-[90px]" 
      />
      <Footer />
    </div>
  );
}
