import React from 'react';
import {Footer} from '../common/Footer';

export function Contact() {
  return (
    <div>
    <div class="bg-blue-900 text-white p-2 flex items-center h-[80px] mt-3">
  <div class="flex justify-start max-w-screen-lg ml-10">
    <span class="font-semibold ml-10">Home</span>
    <span class="mx-1">|</span>
    <span class="font-semibold">Contact Us!</span>
  </div>
</div>
    <div className="flex justify-center mt-10 px-4 py-6 bg-blue-700 rounded-2xl border-8 border-blue-800 w-[800px] h-[550px] mx-auto mb-[30px]">
      <div className="bg-blue-800 text-white w-full p-6 rounded-lg flex flex-col md:flex-row">
        {/* Left Section - Form */}
        <div className="flex-1 md:mr-8 mt-[-20px]">
          <h2 className="text-2xl font-bold">We are here to help you</h2>
          <p className="mt-1 mb-8">
            We specialize in helping individuals and families regain control of their finances by
            repairing and improving their credit scores.
          </p>
          <form className="grid gap-3 mt-[-25px]">
            <div className="grid grid-cols-2 gap-1">
              <input type="text" placeholder="First Name" className="p-2 rounded bg-white text-black" />
              <input type="text" placeholder="Last Name" className="p-2 rounded bg-white text-black" />
            </div>
            <input type="text" placeholder="Phone Number" className="p-2 rounded bg-white text-black" />
            <input type="text" placeholder="Subject" className="p-2 rounded bg-white text-black" />
            <input type="text" placeholder="Current Credit Score" className="p-2 rounded bg-white text-black" />
            <input type="text" placeholder="Reason for Credit Repair" className="p-2 rounded bg-white text-black" />
            <textarea placeholder="How Soon?" className="p-2 rounded bg-white text-black h-10"></textarea>
            <button className="p-2 rounded bg-green-500 text-white font-bold">Sign Up Now</button>
          </form>
        </div>

        {/* Right Section - Contact Information */}
        <div className="w-[100px] md:w-[40%] mt-[-20px] ">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span role="img" aria-label="phone" className="mr-2">📞</span> 0000-00-0000
            </li>
            <li className="flex items-center">
              <span role="img" aria-label="email" className="mr-2">✉️</span> info@ezecreditrepair.com
            </li>
            <li className="flex items-center">
              <span role="img" aria-label="web" className="mr-2">🌐</span> ezecreditrepair.com
            </li>
            <li className="flex items-center">
              <span role="img" aria-label="location" className="mr-2">📍</span> 120 Double Street, Texas, Houston, USA
            </li>
          </ul>
          <div className="flex space-x-4 mt-8 text-2xl">
            <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
     
    </div>
    <Footer>
    </Footer>
    </div>
  );
};
