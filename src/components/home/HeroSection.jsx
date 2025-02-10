import React from 'react';
import rectangle11 from '../asset/Rectangle11.png';
import HeroSectionBg from '../asset/HeroSectionBg.png';
export function HeroSection() {
  return (
    <div className="relative min-h-[350px] w-full overflow-hidden bg-[#ECF5FF] bg-[url('../asset/HeroSectionBg.png')] bg-cover bg-center md:h-[462px] md:bg-none">
      {/* Main content container */}
      <div className="relative mx-auto h-full max-w-[1440px]">
        {/* Text content section */}
        <div className="relative z-20 w-full px-4 pt-8 md:w-3/5 md:pl-8 md:pt-16 lg:pl-32">
          <div className="text-center md:text-left">
            <h1 className="font-inter text-[22px] font-bold leading-[28px] text-[#15549A] md:text-[26px] md:leading-[32px]">
              YOUR PATH TO BETTER CREDIT,
            </h1>
            {/* Image section - Visible on mobile */}
            <div className="relative mx-auto my-4 h-[150px] w-[150px] md:hidden">
              <img
                src={rectangle11}
                alt="Eze Credit Repair Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-2 break-words font-inter text-[40px] font-bold leading-[45px] text-[#04284F] sm:text-[45px] md:mt-4 md:text-[73px] md:leading-[60px]">
              MADE EASY
            </p>
            <p className="mt-2 font-inter text-[15px] font-bold leading-[26px] text-[#737373] md:text-[26px] md:leading-[31px]">
              Let's Fix Your Credit and Raise Your Score
            </p>
            <div className="mt-4 text-center md:space-y-0 md:text-left">
              <p className="text-start font-inter text-[12px] font-normal leading-[22px] text-black md:text-[20px] md:leading-[28px]">
                Unlock financial freedom with a better credit score.
              </p>
              <p className="text-start font-inter text-[12px] font-normal leading-[22px] text-black md:text-[20px] md:leading-[28px]">
                Our easy-to-follow approach helps you improve your
              </p>
              <p className="mb-4 text-start font-inter text-[12px] font-normal leading-[22px] text-black md:mb-6 md:text-[20px] md:leading-[28px]">
                credit for better rates, loans and peace of mind.
              </p>
            </div>
            <button className="mb-4 mt-5 h-[40px] w-[180px] rounded-lg bg-[#15549A] px-1 py-1 font-inter text-xl font-normal text-white transition-colors duration-300 hover:bg-[#1a65b8] md:h-[47px] md:w-[220px] md:text-2xl">
              SIGN UP NOW
            </button>
          </div>
        </div>

        {/* Image section - Hidden on mobile */}
        <div className="absolute right-0 top-[300px] z-30 mb-5 hidden h-[509px] w-[398px] pt-8 md:right-[140px] md:top-0 md:block md:h-[509px] md:w-[398px]">
          <img
            src={rectangle11}
            alt="Eze Credit Repair Logo"
            className="h-full w-full object-contain pb-14"
          />
        </div>

        {/* Mobile background overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-[#ECF5FF] opacity-40 md:opacity-0"></div>
      </div>
    </div>
  );
}
