import React from 'react';
import rectangle10 from '../asset/Rectangle10.png';
import creditRepair from '../asset/creditrapiring.jpg';
import pauseIcon from '../asset/pauseIcon.svg';

export function GetStartedSection() {
  return (
    <div className="relative h-[779px] w-full bg-blue-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      <img src={creditRepair} className="h-full w-full object-cover object-top" alt="" />
      <div className="absolute left-1/2 top-[230px] h-[530px] w-[997px] -translate-x-1/2 -translate-y-1/2 transform rounded-md border-white">
        <img src={rectangle10} alt="Eze Credit Repair Logo" className="object-cover" />
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center">
        <div className="mb-[50px] w-[1220px] font-inter text-xl font-semibold text-white">
          <div className="">
            Achieving a better credit score is key to unlocking financial freedom and accessing
            life's biggest opportunities.
          </div>
          <div className="">
            With our EzeCredit Repair Program, our services will change your path to a brighter and
            improving credit profile,
          </div>
          <div>so you can secure better rates, loans, and financial peace of mind.</div>
        </div>
        <button className="mb-10 h-[52px] w-[248px] rounded-md bg-[#F30000] px-1 py-1 font-inter text-[27px] font-bold text-white transition-colors duration-300 hover:bg-[#ff1a1a]">
          <div className="flex justify-center gap-2">
            <span>GET STARTED </span>
            <img src={pauseIcon} alt="pause-icon" />
          </div>
        </button>
      </div>
    </div>
  );
}
