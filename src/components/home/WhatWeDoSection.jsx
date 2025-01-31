import React from 'react';
import logo from '../asset/logo.png';
import tick from '../asset/whatwedotick.png';
import pauseIcon from '../asset/pauseIcon.svg';
import rectangle0 from '../asset/Rectangle0.png';
import basketBallNet from '../asset/basketballNet.svg';

export function WhatWeDoSection() {
  return (
    <>
      <div className="absolute right-0 z-0 hidden h-[580px] w-[837px] md:block">
        <img src={basketBallNet} alt="" />
      </div>
      {/* What we do section*/}
      <div className="flex min-h-[695px] w-full flex-col items-center border-2 border-b-[#E8EEF5] bg-[#15549A] p-4 font-sans text-white md:p-6">
        {/* Main Container with Flex */}
        <div className="flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-x-10 md:space-y-0">
          {/* Left Side - What We Do Section */}
          <div className="flex w-full flex-col items-center space-y-4 px-4 text-center md:ml-[20px] md:w-auto md:items-start md:text-left">
            {/* Main Title */}
            <h1 className="mt-[20px] font-inter text-[32px] font-bold leading-[40px] text-[#78B6F6] md:text-[50px] md:leading-[60px]">
              What We Do
            </h1>

            {/* Description */}
            <p className="font-inter text-[20px] font-[400] leading-[26px] md:text-[29px] md:leading-[35px]">
              Empowering You to Seize New Opportunities, <br className="hidden md:block" />
              Because Everyone Deserves a Second Chance.
            </p>
            <p className="font-inter text-[20px] font-[400] italic leading-[26px] text-[#31FF01] md:text-[29.16px] md:leading-[35.29px]">
              When opportunity knocks, will your credit stand in the way?
            </p>

            {/* Services Header */}
            <div className="mb-4 flex flex-col items-center space-y-2 md:flex-row md:space-x-3 md:space-y-0">
              {/* Placeholder for Logo Image */}
              <div className="flex h-8 w-20 items-center justify-center rounded md:h-10 md:w-24">
                <img
                  src={logo}
                  alt="Eze Credit Repair Logo"
                  className="h-[40px] w-[110px] md:ml-[20px] md:h-[54px] md:w-[143px]"
                />
              </div>
              {/* Services Benefits Heading */}
              <h2 className="font-inter text-[32px] font-bold leading-[40px] text-white md:text-[50px] md:leading-[60.51px]">
                Services Benefits:
              </h2>
            </div>

            {/* Benefits List */}
            <ul className="mx-4 space-y-3 text-base md:mx-16">
              <li className="flex items-start font-inter text-[16px] font-bold leading-[22px] md:items-center md:text-[22px] md:leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[30px] w-[25px] object-contain md:h-[50px] md:w-[40px]"
                  />
                </span>
                Strong credit score opens doors to financial freedom.
              </li>
              <li className="flex items-start font-inter text-[16px] font-bold leading-[22px] md:items-center md:text-[22px] md:leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[30px] w-[25px] object-contain md:h-[50px] md:w-[40px]"
                  />
                </span>
                Easy path to better credit, to be ready for every opportunity that comes your way.
              </li>
              <li className="flex items-start font-inter text-[16px] font-bold leading-[22px] md:items-center md:text-[22px] md:leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[30px] w-[25px] object-contain md:h-[50px] md:w-[40px]"
                  />
                </span>
                Fast track repair and boost your score by 50-100 points* within 30 to 60 days.
              </li>
            </ul>

            {/* Get Started Button */}
            <button className="flex h-[40px] w-[200px] items-center justify-center gap-3 rounded-2xl bg-[#46CC02] font-semibold text-white md:h-[52px] md:w-[244px]">
              <span className="font-inter text-[20px] font-bold leading-[24px] md:text-[27px] md:leading-[32px]">
                GET STARTED
              </span>
              <img
                width={16}
                height={19}
                className="h-[19px] w-[16px] md:h-[23px] md:w-[20px]"
                src={pauseIcon}
                alt="pause-icon"
              />
            </button>
          </div>
          {/* Right Side - Basketball Image and Text */}
          <div className="z-10 mt-6 flex w-full flex-col items-center justify-center md:mt-[50px] md:w-1/2">
            {/* Basketball Image Placeholder */}
            <div className="mb-4 flex h-[300px] w-[300px] items-center justify-center md:h-[477px] md:w-[506px]">
              <img
                src={rectangle0}
                alt="Eze Credit Repair Logo"
                className="h-full w-full object-cover md:ml-[20px] md:h-[477px] md:w-[506px]"
              />
            </div>

            {/* Text beside the Basketball Image */}
            <p className="mt-4 text-center font-inter text-[18px] font-[400] leading-[24px] md:mt-[30px] md:text-left md:text-[26.36px] md:leading-[31.9px]">
              Don't Let Your Credit Block Opportunities
              <span className="mt-2 block font-inter text-[18px] font-[400] leading-[24px] md:ml-[30px] md:text-[26.36px] md:leading-[31.9px]">
                Start Building a Better Score Today!
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
