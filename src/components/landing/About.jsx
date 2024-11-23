import { useState } from "react";
import { Footer } from "../common/Footer";
import { Testinomial } from "../common/Testinomial";
import credit from "../asset/Rectangle.png";
import credit2 from "../asset/Rectangle1.png";
import credit3 from "../asset/Rectangle4.png";
import credit4 from "../asset/Rectangle2.png";
import AboutUs from "../asset/AboutUsbackground.png";
import about from "../asset/about.png";

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
            For the past 15 years, we've been dedicated to helping thousands of
            individuals repair their credit and reclaim{" "}
            <div>
              financial control. At EzeCredit, we fight for every consumer’s
              right to an accurate, fair, and substantiated credit report.
            </div>
          </p>
          <h2 className="text-[50px] leading-[60px] font-bold font-inter mt-[50px] text-[#15549A]">
            Our Program
          </h2>
          <p className="text-[#4B4B4B] font-inter font-bold text-[29px] leading-[35px]">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 mb-6 mt-[50px] ml-[-135px] ">
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
                Establish a plan to identify roadblocks and inaccuracies
                impacting your score
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
                Take action to boost your credit score to reach your desired
                score range
              </p>
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="ml-[500px] text-7xl mt-[-30px]">↓</h1>
        <div className="bg-blue-100 py-6 px-5 border-[#4054B2] border-[1px] h-[209px] w-[1300px] ml-[-130px]">
          <h4 className="text-[27px] leading-[32px] font-inter font-bold text-[#07284F] mb-2">
            Dispute & Escalation
          </h4>
          <p className="text-[#173455] font-inter text-[25px] leading-[30px] font-semibold">
            We start by assessing your current credit situation and identifying
            the roadblocks impacting your score. Each case is unique, but we
            specialize in spotting inaccuracies and other factors that should
            not be in your report damaging to credit reputation. Together, we’ll
            map out a plan to a better credit score.
          </p>
        </div>
      </div>
      <FeQ4></FeQ4>
      <Testinomial></Testinomial>

      <Footer></Footer>
    </div>
  );
}

function FeQ4() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Can any credit be repaired?",
      content: (
        <>
          <img
            src={about}
            alt="Recovery Icon"
            className="mb-4 w-[136px] h-[102px] absolute"
          />
          <p className="ml-[170px] font-montserrat text-[22px] leading-[27px] font-semibold">
            Credit repair involves resolving any questionable negative items
            that may be damaging your credit profile. If the credit bureaus or
            your creditors cannot provide proof that these items are fair,
            accurate, and verified, they are legally required to remove them.
          </p>
        </>
      ),
    },
    {
      title: "How long can this process take?",
      content:
        "The length of the credit repair process varies depending on the number of items disputed and the responsiveness of the creditors or credit bureaus.",
    },
    {
      title: "What type of items can be removed on my credit report?",
      content:
        "Items such as late payments, charge-offs, collections, and foreclosures can potentially be removed if they are found to be inaccurate, unverifiable, or unfair.",
    },
    {
      title: "If I just pay off my bills will that restore my good credit?",
      content:
        "Paying off bills is important, but it may not immediately improve your credit score. Credit repair may still be necessary for inaccurate items.",
    },
    {
      title: "What is a good credit score?",
      content:
        "A good credit score generally ranges from 670 to 739. Higher scores reflect better creditworthiness.",
    },
  ];

  return (
    <div>
      <div className=" flex text-center justify-center items-center p-6 mt-[20px]">
        <h1 className="text-[50px] leading-[60px] font-bold font-inter mb-4 text-[#15549A]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="bg-[#000000] w-[1300px] h-[521px] ml-[60px] bg-opacity-[10%]">
        <div className="font-opensans flex justify-center w-[1290px] font-[400] p-[20px]">
          <div className="w-[1290px] mx-auto mt-[10px] ml-[5px] overflow-hidden">
            {accordionData.map((item, index) => (
              <div key={index} className=" p-2">
                <div
                  className="accordion-title flex justify-between items-center px-6 py-4  font-montserrat font-bold text-[20px] leading-[25px] cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="plus-minus-icon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`accordion-content px-6 py-4 ${
                    openIndex === index ? "" : "hidden"
                  }`}
                >
                  <p className="font-montserrat text-[20px] leading-[25px] font-semibold">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
