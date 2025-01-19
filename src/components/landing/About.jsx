import AboutUs from '../asset/AboutUsbackground.png';
import credit from '../asset/Rectangle.png';
import credit2 from '../asset/Rectangle1.png';
import credit4 from '../asset/Rectangle2.png';
import credit3 from '../asset/Rectangle4.png';
import { FaqAbout } from '../common/FAQSection';
import { Footer } from '../common/Footer';
import { Testimonial } from '../common/Testimonial';

export function About() {
  return (
    <div>
      <div className="relative mt-3 p-2">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />

        {/* Inner Div with Background Image */}
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <div className="mx-16 flex flex-col items-center justify-center bg-white">
        {/* Header Section */}
        <div className="mt-[80px] flex w-[1300px] flex-col items-center justify-center text-center">
          <p className="w-full font-inter text-2xl font-normal leading-7 text-[#434343]">
            For the past 15 years, we've been dedicated to helping thousands of individuals repair
            their credit and reclaim{' '}
            <div>
              financial control. At EzeCredit, we fight for every consumer’s right to an accurate,
              fair, and substantiated credit report.
            </div>
          </p>
          <h2 className="mt-[50px] font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
            Our Program
          </h2>
          <p className="mt-2 font-inter text-[29px] font-bold leading-[35px] text-[#4B4B4B]">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="mb-6 mt-[50px] flex flex-col items-start justify-between md:flex-row md:space-x-8">
          {/* Card 1 */}
          {/* Card 1 */}
          <div className="mb-4 w-[410px] flex-1 rounded-2xl bg-[#46CC02] text-white md:mb-0">
            <div className="flex items-center p-2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-white font-montserrat text-[25px] font-bold leading-[30px] text-[#15549A]">
                01
              </div>
              <h3 className="font-montserrat text-[25px] font-bold leading-[30px]">
                Credit Report Analysis
              </h3>
            </div>

            {/* Inner Card similar to Card 3 */}
            <div className="flex h-[150px] w-[410px] rounded-lg bg-[#ECF6FF] p-3 text-[#9A9A9A] hover:bg-[#15549A] hover:text-white">
              <div className="relative mr-3 inline-block">
                {/* Image for Credit Report */}
                <img
                  src={credit}
                  alt="Credit Report Icon"
                  className="ml-[10px] inline-block h-[106px] w-[188px]"
                />
                {/* Nested Image (if needed) */}
              </div>
              <p className="ml-[30px] font-montserrat text-[25px] font-bold leading-[30px]">
                Establish a plan to identify roadblocks and inaccuracies impacting your score
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mb-4 w-[418px] flex-1 rounded-2xl bg-[#46CC02] text-white shadow-[0_4px_7px_rgba(0,0,0,0.7)] md:mb-0">
            <div className="flex items-center p-2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-white font-montserrat text-[25px] font-bold leading-[30px] text-[#15549A]">
                02
              </div>
              <h3 className="ml-[10px] font-montserrat text-[25px] font-bold leading-[30px]">
                Dispute & Escalations
              </h3>
            </div>
            <div className="flex h-[150px] w-[418px] rounded-lg bg-[#ECF6FF] p-3 text-[#9A9A9A] hover:bg-[#15549A] hover:text-white">
              <img
                src={credit2}
                alt="Dispute Icon"
                className="ml-[20px] mt-[15px] inline-block h-[100px] w-[96px]"
              />
              <p className="ml-[20px] mt-[20px] font-montserrat text-[20px] font-bold leading-[25px]">
                Challenge and Dispute negative items until they are removed
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mb-4 w-[410px] flex-1 rounded-2xl bg-[#46CC02] text-white md:mb-0">
            <div className="flex items-center p-2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-white font-montserrat text-[25px] font-bold leading-[30px] text-[#15549A]">
                03
              </div>
              <h3 className="ml-[10px] font-montserrat text-[25px] font-bold leading-[30px]">
                Credit Recovery
              </h3>
            </div>

            {/* Similar Inner Card as Card 2 */}
            <div className="flex h-[150px] w-[410px] rounded-lg bg-[#ECF6FF] p-3 text-[#9A9A9A] hover:bg-[#15549A] hover:text-[#FFFFFF]">
              <div className="relative ml-[10px] mr-3 inline-block">
                {/* Image for Credit 3 */}
                <img
                  src={credit3}
                  alt="Recovery Icon"
                  className="mt-[10px] inline-block h-[84px] w-[185px]"
                />
                {/* Image for Credit 4 inside Credit 3 */}
                <img
                  src={credit4}
                  alt="Nested Icon"
                  className="absolute left-[15px] top-[35px] h-[40px] w-[50px]"
                />
              </div>
              <p className="mt-[15px] font-montserrat text-[20px] font-bold leading-[25px]">
                Take action to boost your credit score to reach your desired score range
              </p>
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="mt-[-30px] text-7xl">↓</h1>
        <div className="h-[209px] w-[1300px] border-[1px] border-[#4054B2] bg-blue-100 px-5 py-6">
          <h4 className="mb-2 font-inter text-[27px] font-bold leading-[32px] text-[#07284F]">
            Dispute & Escalation
          </h4>
          <p className="font-inter text-[25px] font-semibold leading-[30px] text-[#173455]">
            We start by assessing your current credit situation and identifying the roadblocks
            impacting your score. Each case is unique, but we specialize in spotting inaccuracies
            and other factors that should not be in your report damaging to credit reputation.
            Together, we’ll map out a plan to a better credit score.
          </p>
        </div>
      </div>
      <FaqAbout />
      <Testimonial />
      <Footer></Footer>
    </div>
  );
}
