import React from 'react';
import rectangle10 from '../asset/Rectangle10.png';
import creditRepair from '../asset/creditrapiring.jpg';
import pauseIcon from '../asset/pauseIcon.svg';

export function GetStartedSection() {
  return (
    <div className="relative w-full overflow-hidden md:h-[779px]">
      {/* Background image */}
      <img
        src={creditRepair}
        className="h-full w-full object-cover object-center md:object-top"
        alt="Credit Repair Background"
      />

      {/* Center image - Hidden on mobile */}
      <div className="absolute left-1/2 top-[230px] hidden h-[530px] w-[997px] -translate-x-1/2 -translate-y-1/2 transform rounded-md md:block">
        <img
          src={rectangle10}
          alt="Eze Credit Repair Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom content section */}
      <div className="absolute left-0 right-0 top-3 md:top-[550px]">
        <div className="mx-auto mb-6 max-w-[1220px] px-4 md:mb-[50px] md:px-0">
          <div className="space-y-3 text-center font-inter text-[14px] font-semibold text-white md:space-y-1 md:text-xl">
            <div className="leading-tight md:leading-normal">
              Achieving a better credit score is key to unlocking financial freedom and accessing
              life's biggest opportunities.
            </div>
            <div className="leading-tight md:leading-normal">
              With our EzeCredit Repair Program, our services will change your path to a brighter
              and improving credit profile,
            </div>
            <div className="leading-tight md:leading-normal">
              so you can secure better rates, loans, and financial peace of mind.
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mb-8 flex justify-center md:mb-10">
          <button className="h-[40px] w-[200px] rounded-md bg-[#F30000] px-1 py-1 font-inter text-[20px] font-bold text-white transition-colors duration-300 hover:bg-[#ff1a1a] md:h-[52px] md:w-[248px] md:text-[27px]">
            <div className="flex items-center justify-center gap-2">
              <span>GET STARTED</span>
              <img src={pauseIcon} alt="pause-icon" className="h-5 w-5 md:h-6 md:w-6" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
