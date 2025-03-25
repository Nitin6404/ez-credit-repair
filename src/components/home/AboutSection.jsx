import creditImprove from '../asset/improvecs3.png';
import layer from '../asset/Layer 1002 copy.png';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="flex flex-col items-start justify-center px-4 py-4 font-sans md:flex-row md:py-8 md:pl-24 md:pr-14">
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:text-[50.04px] md:leading-[60.57px]">
          About Us
        </h1>
        <p className="font-inter text-[16px] leading-[22px] text-[#2E2F31] md:text-[18px] md:leading-[27.73px] lg:text-justify">
          For the past 15 years, we&apos;ve been dedicated to helping thousands of individuals
          repair their credit and reclaim financial control. At EzeCredit, we fight for every
          consumer&apos;s right to an accurate, fair, and substantiated credit report.
        </p>
        {/* Image Placeholder for Mobile View */}
        <div className="mt-8 flex w-full justify-center md:hidden">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-lg">
            <img src={creditImprove} alt="Recovery Icon" className="h-full w-full object-contain" />
          </div>
        </div>

        <h2 className="font-Montserrat mt-4 text-[22px] font-bold leading-[28px] text-[#529400] md:mb-3 md:text-[29px] md:leading-[35px]">
          Target Area
        </h2>
        <ul className="w-full list-none space-y-3 pl-0 text-justify font-inter text-[16px] font-medium leading-[20px] tracking-tight text-[#2E2F31] md:w-[736px] md:space-y-4 md:text-[18px] md:leading-[27.73px]">
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
            <div className="flex h-full w-full items-center">
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
        <div className="group flex font-bold">
          <button className="mt-6 flex h-[40px] w-[150px] items-center justify-center rounded-l-lg bg-[#15549A] p-[8px] text-center font-inter text-[20px] leading-[24px] text-white md:h-[51px] md:w-[200px] md:p-[10px] md:text-[27px] md:leading-[32px]">
            READ MORE
          </button>
          <span className="ml-[2px] mt-[24px] flex h-[40px] w-[35px] items-center justify-center rounded-r-lg bg-[#15549A] text-center text-[25px] text-white md:h-[51px] md:w-[45px] md:text-[45px]">
            <ArrowRight className="h-8 w-8" />
          </span>
        </div>
      </div>

      {/* Image Placeholder for Desktop View */}
      <div className="mt-8 hidden w-full justify-center md:mt-[50px] md:flex md:justify-center md:pl-6">
        <div className="flex h-[300px] w-[300px] items-center justify-center rounded-lg md:h-[459px] md:w-[474px]">
          <img src={creditImprove} alt="Recovery Icon" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
