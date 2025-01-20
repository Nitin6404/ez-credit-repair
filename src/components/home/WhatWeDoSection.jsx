import React from 'react';
import logo from '../asset/logo.png';
import tick from '../asset/whatwedotick.png';
import pauseIcon from '../asset/pauseIcon.svg';
import rectangle0 from '../asset/Rectangle0.png';
import basketBallNet from '../asset/basketballNet.svg';

export function WhatWeDoSection() {
  return (
    <>
      <div className="absolute right-0 z-0 h-[580px] w-[837px]">
        <img src={basketBallNet} alt="" />
      </div>
      {/* What we do section*/}
      <div className="flex h-[695px] w-full flex-col items-center border-2 border-b-[#E8EEF5] bg-[#15549A] p-6 font-sans text-white">
        {/* Main Container with Flex */}
        <div className="flex w-full flex-col items-center justify-center space-x-0 md:flex-row md:space-x-10">
          {/* Left Side - What We Do Section */}
          <div className="ml-[20px] flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
            {/* Main Title */}
            <h1 className="mt-[20px] font-inter text-[50px] font-bold leading-[60px] text-[#78B6F6]">
              What We Do
            </h1>

            {/* Description */}
            <p className="font-inter text-[29px] font-[400] leading-[35px]">
              Empowering You to Seize New Opportunities, <br />
              Because Everyone Deserves a Second Chance.
            </p>
            <p className="font-inter text-[29.16px] font-[400] italic leading-[35.29px] text-[#31FF01]">
              When opportunity knocks, will your credit stand in the way?
            </p>

            {/* Services Header */}
            <div className="mb-4 flex items-center space-x-3">
              {' '}
              {/* Flex container with spacing */}
              {/* Placeholder for Logo Image */}
              <div className="flex h-10 w-24 items-center justify-center rounded">
                <img
                  src={logo}
                  alt="Eze Credit Repair Logo"
                  className="ml-[20px] h-[54px] w-[143px]"
                />
              </div>
              {/* Services Benefits Heading */}
              <h2 className="font-inter text-[50px] font-bold leading-[60.51px] text-white">
                Services Benefits:
              </h2>
            </div>

            {/* Benefits List */}
            <ul className="mx-16 space-y-3 text-base">
              <li className="flex items-center font-inter text-[22px] font-bold leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[50px] w-[40px] object-contain"
                    style={{ maxWidth: '40px' }}
                  />
                </span>
                Strong credit score opens doors to financial freedom.
              </li>
              <li className="flex items-center font-inter text-[22px] font-bold leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[50px] w-[40px] object-contain"
                    style={{ maxWidth: '40px' }}
                  />
                </span>
                Easy path to better credit, to be ready for every opportunity that comes your way.
              </li>
              <li className="flex items-center font-inter text-[22px] font-bold leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[50px] w-[40px] object-contain"
                    style={{ maxWidth: '40px' }}
                  />
                </span>
                Fast track repair and boost your score by 50-100 points* within 30 to 60 days.
              </li>
            </ul>

            {/* Get Started Button */}
            <button className="flex h-[52px] w-[244px] items-center justify-center gap-3 rounded-2xl bg-[#46CC02] font-semibold text-white">
              <span className="font-inter text-[27px] font-bold leading-[32px]">GET STARTED</span>
              <img
                width={20}
                height={23}
                className="h-[23px] w-[20px]"
                src={pauseIcon}
                alt="pause-icon"
              />
            </button>
          </div>
          {/* Right Side - Basketball Image and Text */}
          <div className="z-10 mt-[50px] flex w-1/2 flex-col items-center justify-center">
            {/* <img src={basket} className="object-cover" alt="" /> */}
            {/* Basketball Image Placeholder */}
            <div className="mb-4 flex h-[477px] w-[506px] items-center justify-center">
              <img
                src={rectangle0}
                alt="Eze Credit Repair Logo"
                className="ml-[20px] h-[477px] w-[506px] object-cover"
              />
            </div>

            {/* Text beside the Basketball Image */}
            <p className="mt-[30px] font-inter text-[26.36px] font-[400] leading-[31.9px] md:text-left">
              Don’t Let Your Credit Block Opportunities <br />
              <p className="ml-[30px] font-inter text-[26.36px] font-[400] leading-[31.9px]">
                Start Building a Better Score Today!
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
