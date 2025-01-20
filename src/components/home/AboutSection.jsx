import React from 'react';
import creditImprove from '../asset/improvecs3.png';
import layer from '../asset/Layer 1002 copy.png';

export function AboutSection() {
  const targetAreas = [
    'Like the A-Team, we become your trusted advocates, challenging inaccuracies and disputing negative items until they are removed.',
    'Credit Evaluation - In-depth assessment of your credit report',
    'Unlimited Disputes: We challenge any number of inaccuracies',
    'Debt & Inquiry Verification and Removal: We verify and dispute',
    'Escalation of Disputes for Fast Removal: We escalate disputes when necessary Recommendations to Boost Score: Personalized strategies fo help raise your credit score.',
  ];

  return (
    <div className="flex flex-col items-start justify-center py-8 pl-20 pr-14 font-sans md:flex-row">
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="font-inter text-[50.04px] font-bold leading-[60.57px] text-[#15549A]">
          About Us
        </h1>
        <p className="font-inter text-[22.92px] font-bold leading-[27.73px] text-[#2E2F31]">
          For the past 15 years, we've been dedicated to helping thousands of individuals repair
          their credit and reclaim financial control. At <strong>EzeCredit</strong>, we fight for
          every consumer's right to an accurate, fair, and substantiated credit report.
        </p>

        <h2 className="font-Montserrat mt-2 text-[29px] font-bold leading-[35px] text-[#529400]">
          Target Area
        </h2>
        <ul className="w-[736px] list-none space-y-4 pl-0 font-inter text-[22.91px] font-bold leading-[27.73px] tracking-tight text-[#2E2F31]">
          <li>
            <div className="flex h-full w-full items-start">
              <div className="mr-1.5 pt-1.5">
                <img height={20} width={20} src={layer} alt="Layer Icon" />
              </div>
              <div className="flex-1">
                Like the A-Team, we become your trusted advocates, challenging inaccuracies and
                disputing negative items until they are removed.
              </div>
            </div>
          </li>
          <li>
            <div className="flex h-full w-full items-start">
              <div className="mr-1.5 pt-1.5">
                <img height={20} width={20} src={layer} alt="Layer Icon" />
              </div>
              <div className="flex-1">
                Credit Evaluation - In-depth assessment of your credit report
              </div>
            </div>
          </li>
          <li>
            <div className="flex h-full w-full items-start">
              <div className="mr-1.5 pt-1.5">
                <img height={20} width={20} src={layer} alt="Layer Icon" />
              </div>
              <div className="flex-1">
                Unlimited Disputes: We challenge any number of inaccuracies
              </div>
            </div>
          </li>
          <li>
            <div className="flex h-full w-full items-start">
              <div className="mr-1.5 pt-1.5">
                <img height={20} width={20} src={layer} alt="Layer Icon" />
              </div>
              <div className="flex-1">
                Debt & Inquiry Verification and Removal: We verify and dispute
              </div>
            </div>
          </li>
          <li>
            <div className="flex h-full w-full items-start">
              <div className="mr-1.5 pt-1.5">
                <img height={20} width={20} src={layer} alt="Layer Icon" />
              </div>
              <div className="flex-1">
                Escalation of Disputes for Fast Removal: We escalate disputes when necessary
                Recommendations to Boost Score: Personalized strategies fo help raise your credit
                score.
              </div>
            </div>
          </li>
        </ul>
        <div className="group flex">
          <button className="mt-6 flex h-[51px] w-[200px] items-center justify-center rounded-l-lg bg-[#15549A] p-[10px] text-center font-inter text-[27px] font-normal leading-[32px] text-white">
            READ MORE
          </button>
          <span className="ml-[2px] mt-[24px] flex h-[51px] w-[45px] items-center justify-center rounded-r-lg bg-[#15549A] text-center text-[35px] text-white">
            →
          </span>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="mt-[50px] flex flex-1 items-center justify-end md:pl-6">
        <div className="flex h-[459px] w-[474px] items-center justify-center rounded-lg text-sm italic">
          <img
            src={creditImprove}
            alt="Recovery Icon"
            className="object-contained mr-2 inline-block"
          />
        </div>
      </div>
    </div>
  );
}
