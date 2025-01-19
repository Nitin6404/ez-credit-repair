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
      <div className="relative p-2 mt-3">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 mt-[30px]"
        />

        {/* Inner Div with Background Image */}
        <div className="relative text-white p-2 items-center flex h-[130px]">
          <div className="flex max-w-screen-lg ml-[80px] mt-[50px] font-inter font-bold text-2xl leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-white mx-16">
        {/* Header Section */}
        <div className="flex flex-col justify-center text-center items-center mt-[80px] w-[1300px]">
          <p className="text-[#434343] font-inter font-normal text-2xl leading-7 w-full">
            For the past 15 years, we've been dedicated to helping thousands of individuals repair
            their credit and reclaim{' '}
            <div>
              financial control. At EzeCredit, we fight for every consumer’s right to an accurate,
              fair, and substantiated credit report.
            </div>
          </p>
          <h2 className="text-[50px] leading-[60px] font-bold font-inter mt-[50px] text-[#15549A]">
            Our Program
          </h2>
          <p className="text-[#4B4B4B] font-inter font-bold text-[29px] leading-[35px] mt-2">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 mb-6 mt-[50px]">
          {/* Card 1 */}
          {/* Card 1 */}
          <div className="bg-[#46CC02] text-white rounded-2xl flex-1 mb-4 md:mb-0 w-[410px]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-[25px] leading-[30px] font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                01
              </div>
              <h3 className="font-bold font-montserrat text-[25px] leading-[30px]">
                Credit Report Analysis
              </h3>
            </div>

            {/* Inner Card similar to Card 3 */}
            <div className="bg-[#ECF6FF] text-[#9A9A9A] p-3 flex rounded-lg h-[150px] w-[410px] hover:bg-[#15549A] hover:text-white">
              <div className="relative inline-block mr-3">
                {/* Image for Credit Report */}
                <img
                  src={credit}
                  alt="Credit Report Icon"
                  className="inline-block w-[188px] h-[106px] ml-[10px]"
                />
                {/* Nested Image (if needed) */}
              </div>
              <p className="font-montserrat font-bold text-[25px] leading-[30px] ml-[30px]">
                Establish a plan to identify roadblocks and inaccuracies impacting your score
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#46CC02] text-white rounded-2xl w-[418px] flex-1 mb-4 md:mb-0 shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat  text-[25px] leading-[30px] font-bold rounded w-8 h-8 flex items-center justify-center mr-3 ">
                02
              </div>
              <h3 className="font-bold font-montserrat  text-[25px] leading-[30px] ml-[10px]">
                Dispute & Escalations
              </h3>
            </div>
            <div className="bg-[#ECF6FF] text-[#9A9A9A] p-3 flex rounded-lg w-[418px] h-[150px] hover:bg-[#15549A] hover:text-white">
              <img
                src={credit2}
                alt="Dispute Icon"
                className="inline-block ml-[20px] w-[96px] h-[100px] mt-[15px]"
              />
              <p className="font-montserrat font-bold text-[20px] leading-[25px] ml-[20px] mt-[20px] ">
                Challenge and Dispute negative items until they are removed
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#46CC02] text-white rounded-2xl w-[410px] flex-1 mb-4 md:mb-0">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat  text-[25px] leading-[30px] font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                03
              </div>
              <h3 className="font-bold font-montserrat  text-[25px] leading-[30px] ml-[10px]">
                Credit Recovery
              </h3>
            </div>

            {/* Similar Inner Card as Card 2 */}
            <div className="bg-[#ECF6FF] text-[#9A9A9A] p-3 flex rounded-lg w-[410px] h-[150px] hover:text-[#FFFFFF] hover:bg-[#15549A]">
              <div className="relative inline-block mr-3 ml-[10px]">
                {/* Image for Credit 3 */}
                <img
                  src={credit3}
                  alt="Recovery Icon"
                  className=" inline-block w-[185px] h-[84px] mt-[10px]"
                />
                {/* Image for Credit 4 inside Credit 3 */}
                <img
                  src={credit4}
                  alt="Nested Icon"
                  className="absolute w-[50px] h-[40px] top-[35px] left-[15px]"
                />
              </div>
              <p className="font-montserrat font-bold text-[20px] leading-[25px] mt-[15px]">
                Take action to boost your credit score to reach your desired score range
              </p>
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="text-7xl mt-[-30px]">↓</h1>
        <div className="bg-blue-100 py-6 px-5 border-[#4054B2] border-[1px] h-[209px] w-[1300px]">
          <h4 className="text-[27px] leading-[32px] font-inter font-bold text-[#07284F] mb-2">
            Dispute & Escalation
          </h4>
          <p className="text-[#173455] font-inter text-[25px] leading-[30px] font-semibold">
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
