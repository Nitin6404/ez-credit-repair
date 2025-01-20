import React from 'react';
import rectangle11 from '../asset/Rectangle11.png';

export function HeroSection() {
  return (
    <div className="flex h-[462px] w-full bg-[#ECF5FF]">
      <div className="md:pl-8 md:pt-8 lg:pl-32 lg:pt-16">
        <h1 className="font-inter text-[26px] font-bold leading-[32px] text-[#15549A]">
          YOUR PATH TO BETTER CREDIT,
        </h1>
        <p className="mt-4 text-start font-inter text-[73px] font-bold leading-[60px] text-[#04284F]">
          MADE EASY
        </p>
        <p className="font-inter text-[26px] font-bold leading-[31px] text-[#737373]">
          Let's Fix Your Credit and Raise Your Score
        </p>
        <p className="font-inter text-[20px] font-normal leading-[28px] text-[#626161]">
          Unlock financial freedom with a better credit score.
        </p>
        <p className="font-inter text-[20px] font-normal leading-[28px] text-[#626161]">
          Our easy-to-follow approach helps you improve your
        </p>
        <p className="mb-6 font-inter text-[20px] font-normal leading-[28px] text-[#626161]">
          credit for better rates, loans and peace of mind.
        </p>
        <button className="h-[47px] w-[220px] rounded-lg bg-[#15549A] px-1 py-1 font-inter text-2xl font-normal text-white transition-colors duration-300 hover:bg-[#1a65b8]">
          SIGN UP NOW
        </button>
      </div>
      <div className="absolute right-[140px] z-10 h-[509px] w-[398px] px-[20px] pl-5 pt-20">
        <img src={rectangle11} alt="Eze Credit Repair Logo" className="object-cover" />
      </div>
    </div>
  );
}
