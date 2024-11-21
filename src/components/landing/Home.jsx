import { useState } from "react";
import { Testinomial } from "../common/Testinomial";
import { Footer } from "../common/Footer";
import credit9 from "../asset/improvecs3.png";
import credit0 from "../asset/logo.png";
import credit8 from "../asset/Rectangle0.png";
import credit10 from "../asset/Rectangle10.png";
import credit11 from "../asset/Rectangle11.png";
import credit from "../asset/Rectangle.png";
import credit2 from "../asset/Rectangle1.png";
import credit3 from "../asset/Rectangle4.png";
import credit4 from "../asset/Rectangle2.png";
import hands from "../asset/hands.png";
import mobile from "../asset/mobile.png";
import wemen from "../asset/Rectangle 20.png";
import rect3 from "../asset/REct3.png";
import chingchong from "../asset/chingchong.png";
import creditrepairing from "../asset/creditrapiring.jpg";
import layer from "../asset/Layer 1002 copy.png";
import about from "../asset/about.png";
import tick from '../asset/whatwedotick.png';
export function Home() {
  return (
    <>
      <div className="bg-[#ECF5FF] flex  w-full h-[462px]">
        <div className="pt-14 pl-32">
          <h1 className="text-[#15549A] font-bold font-inter mb-1 text-[26px] leading-[32px]">
            YOUR PATH TO BETTER CREDIT,
          </h1>
          <h1 className="text-[#04284F] font-inter text-[73px] leading-[89px] font-bold mb-1">
            MADE EASY
          </h1>
          <p className="text-[#737373] text-[26px] leading-[31px] mb-3 font-inter font-bold">
            Let's Fix Your Credit and Raise Your Score
          </p>
          <p className="text-[#626161] font-[400px] font-inter text-[20px] leading-[25px] ">
            Unlock financial freedom with a better credit score.
          </p>
          <p className="text-[#626161] font-[400px] font-inter text-[20px] leading-[25px] ">
            {" "}
            Our easy-to-follow approach helps you improve your{" "}
          </p>
          <p className="text-[#626161] mb-5 font-[400px] font-inter text-[20px] leading-[25px] ">
            credit for better rates,loans and peace of mind.
          </p>
          <button className="bg-[#15549A] font-inter font-bold  text-white px-4 py-1 rounded-md">
            SIGN UP NOW
          </button>
        </div>
        <div className=" w-[398px] h-[509px] z-10 right-[140px] absolute p-[20px]">
          <img
            src={credit11}
            alt="Eze Credit Repair Logo"
            className="object-cover"
          />
        </div>
      </div>
      {/* get started section  */}
      <div className="bg-blue-800 h-[779px] relative  w-full">
        <img
          src={creditrepairing}
          className="object-cover w-full h-full"
          alt=""
        />
        <div className="w-[997px] h-[530px] rounded-md absolute top-[200px]  border-white left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={credit10}
            alt="Eze Credit Repair Logo"
            className="object-cover"
          />
        </div>
        <div className="absolute text-center left-1/2 transform -translate-x-1/2  bottom-5">
          <p className="text-white w-[1233px] h-[81.34px] font-inter text-xl font-bold mb-[70px]">
            Achieving a better credit score is key to unlocking financial
            freedom and accessing life's biggest opportunities.With our
            EzeCredit Repair Program, our services will change your path to a
            brighter and improving credit profile,so you can secure better
            rates, loans, and financial peace of mind.
          </p>
          <button className="bg-[#F30000] font-bold font-inter text-3xl text-white px-4 py-1 rounded-md w-[248px] h-[52px]">
            Get Started▶
          </button>
        </div>
      </div>
      {/* About us section */}
      <div className="flex flex-col md:flex-row items-start py-8 px-12 font-sans">
        {/* Text Content */}
        <div className="flex-1 ">
          <h1 className="text-[50.04px] leading-[60.57px] font-bold text-[#15549A] font-inter">
            About Us
          </h1>
          <p className="text-[22.92px] leading-[27.73px] text-[#2E2F31] font-inter font-[550] ">
            For the past 15 years, we've been dedicated to helping thousands of
            individuals repair their credit and reclaim financial control. At{" "}
            <strong>EzeCredit</strong>, we fight for every consumer's right to
            an accurate, fair, and substantiated credit report.
          </p>

          <h2 className="text-[29px] leading-[35px] font-bold text-[#529400] font-Montserrat mt-2">
            Target Area
          </h2>
          <ul className="list-none pl-0 text-[22.91px] leading-[27.73px] text-[#2E2F31] font-inter font-bold w-[736px] space-y-2">
            <li>
              <img
                src={layer}
                alt="Layer Icon"
                className="inline-block w-[20px] h-[20px] mr-2"
              />
              Like the A-Team, we become your trusted advocates, challenging
              inaccuracies and disputing negative items until they are removed.
            </li>
            <li>
              <img
                src={layer}
                alt="Layer Icon"
                className="inline-block w-[20px] h-[20px] mr-2"
              />
              Credit Evaluation - In-depth assessment of your credit report
            </li>
            <li>
              <img
                src={layer}
                alt="Layer Icon"
                className="inline-block w-[20px] h-[20px] mr-2"
              />
              Unlimited Disputes: We challenge any number of inaccuracies
            </li>
            <li>
              <img
                src={layer}
                alt="Layer Icon"
                className="inline-block w-[20px] h-[20px] mr-2"
              />
              Debt & Inquiry Verification and Removal: We verify and dispute
              unauthorized inquiries
            </li>
            <li>
              <img
                src={layer}
                alt="Layer Icon"
                className="inline-block w-[20px] h-[20px] mr-2"
              />
              Escalation of Disputes for Fast Removal: We escalate disputes when
              necessary. Recommendations to Boost Score: Personalized strategies
              to help raise your credit score.
            </li>
          </ul>
    <div className="flex">
          <button className="bg-[#15549A] font-inter font-bold text-[27px] leading-[32px] w-[200px] h-[51px] text-white rounded mt-6 p-[10px] flex items-center">
            READ MORE 
          </button>
          <span className=" ml-[2px] h-[51px] text-[35px] justify-center items-center mt-[24px] w-[35px] bg-[#15549A] rounded text-white">→</span>
        </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex-1 flex justify-center items-center mt-[50px] md:pl-6">
          <div className="w-[474px] h-[459px] flex justify-center items-center text-sm italic rounded-lg">
            <img
              src={credit9}
              alt="Recovery Icon"
              className="inline-block mr-2 object-contained"
            />
          </div>
        </div>
      </div>
      {/* What we do section*/}
      <div className="flex flex-col h-[695px] w-full items-center bg-[#15549A] text-white p-6 font-sans">
        {/* Main Container with Flex */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-10">
          {/* Left Side - What We Do Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 ml-[10px] ">
            {/* Main Title */}
            <h1 className="text-[50px] leading-[60px] mt-[20px] font-bold text-[#78B6F6] font-inter">
              What We Do
            </h1>

            {/* Description */}
            <p className="text-[29px] leading-[35px] font-inter font-[400px]">
              Empowering You to Seize New Opportunities, <br/>
              Because Everyone Deserves a Second Chance.
            </p>
            <p className="text-[#31FF01] font-inter font-[400] text-[29.16px] leading-[35.29px] italic">
              When opportunity knocks, will your credit stand in the way?
            </p>

            {/* Services Header */}
            <div className="flex items-center space-x-3 mb-4">
              {" "}
              {/* Flex container with spacing */}
              {/* Placeholder for Logo Image */}
              <div className="w-24 h-10 flex items-center justify-center rounded">
                <img
                  src={credit0}
                  alt="Eze Credit Repair Logo"
                  className="h-[54px] w-[143px] ml-[20px] "
                />
              </div>
              {/* Services Benefits Heading */}
              <h2 className="text-[50px] leading-[60.51px] font-bold text-white font-inter">
                Services Benefits:
              </h2>
            </div>

            {/* Benefits List */}
            <ul className="text-base space-y-3">
              <li className="flex items-center font-inter font-bold text-[22px] leading-[27px]">
                <span className="text-green-400 mr-2 items-center "><img src= {tick} className="w-[40px] h-[50px]"/></span>
                Strong credit score opens doors to financial freedom.
              </li>
              <li className="flex items-center font-inter font-bold text-[22px] leading-[27px]">
                <span className="text-green-400 mr-2"><img src= {tick} className="w-[40px] h-[50px]"/></span>
                Easy path to better credit, to be ready for every opportunity
                that comes your way.
              </li>
              <li className="flex items-center font-inter font-bold text-[22px] leading-[27px]">
                <span className=" mr-2"><img src= {tick} className="w-[40px] h-[50px]"/></span>
                Fast track repair and boost your score by 50-100 points* within
                30 to 60 days.
              </li>
            </ul>

            {/* Get Started Button */}
            <button className="bg-[#46CC02] text-white font-semibold  rounded w-[244px] h-[52px]">
             <span  className="font-inter font-bold text-[27px] leading-[32px]" >GET STARTED▶</span>
            </button>
          </div>

          {/* Right Side - Basketball Image and Text */}
          <div className="flex flex-col w-1/2 items-center  justify-center mt-[50px]">
            {/* <img src={basket} className="object-cover" alt="" /> */}
            {/* Basketball Image Placeholder */}
            <div className="w-[506px] h-[477px]  flex items-center justify-center mb-4">
              <img
                src={credit8}
                alt="Eze Credit Repair Logo"
                className="object-cover ml-[20px] w-[506px] h-[477px] "
              />
            </div>

            {/* Text beside the Basketball Image */}
            <p className="font-inter font-[400px] text-[26.36px] leading-[31.9px] md:text-left mt-[30px]">
              Don’t Let Your Credit Block Opportunities <br />
              <p className="font-inter font-[400px] text-[26.36px] leading-[31.9px] ml-[30px]">Start Building a Better Score Today!</p>
            </p>
          </div>
        </div>
      </div>
      {/* faq section */}
      <FeQ3></FeQ3>
      <Contactform></Contactform>

      {/* progressive correct and recovery plan */}
      <Program></Program>
      {/* testimonials */}
      <Testinomial></Testinomial>

      {/* News Blog section */}
      <div className="p-8 bg-gray-100 min-h-screen mt-[50px]">
        {/* Main Content Header */}
        <div className="text-center mb-8">
          <h1 className="text-[50px] leading-[60px] font-inter font-bold text-[#15549A]">
            News & Blog
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Credit Repair Section */}
          <div className="space-y-8">
            <h2 className="text-[#15549A] text-[25px] leading-[30px] font-bold font-inter">
              Credit Repair:<span className="font-inter font-bold text-[20px] leading-[25px]"> What It Is, How It Works, Related...</span>
            </h2>

            {/* Credit Repair Card 1 */}
            <div className=" relative rounded-lg bg-white overflow-hidden w-[540px] h-[191px]">
              <img
                src={hands}
                alt="Credit Repair 1"
                className="w-[540px] h-[191px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute top-4 left-5 bg-[#059C4B] font-inter font-[400] text-white px-2 py-1 rounded-md border-2 border-white text-[10px] leading-[12px] w-fit">
                  August 29, 2024
                </span>
              </div>
            </div>

            {/* Credit Repair Card 2 */}
            <h2 className="text-[#15549A]  text-[25px] leading-[30px] font-bold font-inter ">
              Credit Repair: <span className="font-inter font-bold text-[20px] leading-[25px]"> How Credit Repair Works </span>
            </h2>
            <div className="relative bg-white rounded-lg overflow-hidden w-[540px] h-[191px]">
              <img
                src={mobile}
                alt="Credit Repair 2"
                className="w-[535px] h-[189px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute top-2 left-2 bg-[#059C4B] font-inter font-[400] text-white px-2 py-1 rounded-md border-2 border-white text-[10px] leading-[12px] w-fit">
                  August 29, 2024
                </span>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-[29px] leading-[35px] font-bold text-[#4B4B4B] font-inter">
              Related Articles
            </h2>

            {/* Article 1 */}
            <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
              <img
                src={wemen}
                alt="Common Things"
                className="w-[148px] h-[111px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold font-inter text-[20px] leading-[25px]  text-[#15549A]">
                  Common Things That Improve or Lower Scores
                </h3>
                <p className="text-[18px] leading-[22px] font-inter font-[400] text-[#424242]">
                  A secured credit card is a type of credit card that is backed
                  by a cash deposit, which serves as collateral should you
                  default on payments. A secured card can rebuild credit.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
              <img
                src={rect3}
                alt="Average Outstanding Balance"
                className="w-[148px] h-[111px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold font-inter text-[20px] leading-[25px]  text-[#15549A]">
                  Average Outstanding Balance on Credit Cards: How It Works and
                  Calculation
                </h3>
                <p className="text-[18px] leading-[22px] font-inter font-[400] text-[#424242]">
                  Credit history is the ongoing documentation of your financial
                  information, including repayment of your debts. Your credit
                  history is an essential part of your credit report.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex items-start space-x-4 pb-4">
              <img
                src={chingchong}
                alt="What is a Secured Credit Card?"
                className="w-[148px] h-[111px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold font-inter text-[20px] leading-[25px]  text-[#15549A]">
                  What Is a Secured Credit Card? How It Works and Benefits
                </h3>
                <p className="text-[18px] leading-[22px] font-inter font-[400] text-[#424242]">
                  A fair credit score falls in the range between poor and good.
                  A fair FICO credit score is 580 to 669, and the equivalent
                  near-prime VantageScore is 601 to 660.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

function FeQ3() {
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
            className="mb-4 w-[120px] h-[100px] absolute"
          />
          <p className="ml-[140px] font-inter font-bold">
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
    <div className="h-[550px] bg-gray-100">
      <div className="max-w-4xl ml-[45px] p-6 mt-[10px]">
        <h1 className="text-[45px] leading-[54px] font-inter font-[400px] mb-4 text-[#15549A]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="bg-white-100 font-opensans flex justify-center w-full  font-[400] p-[10px]">
        <div className="w-[550px] mx-auto mt-[-20px] ml-[60px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-opensans font-bold hover:bg-gray-200"
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
                } bg-gray-100`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Program() {
  return (
    <div>
      <div className="p-6 bg-white max-w-screen-lg mx-auto  rounded">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-[#15549A] font-inter mt-[-240px] font-bold text-[50px] leading-[60px]">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-4 mb-6">
          {/* Card 1 */}
          {/* Card 1 */}
          <div className="bg-[#46CC02] text-white rounded flex-1 mb-4 md:mb-0 w-[407px] h-[56.48px] hover:shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-lg font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                01
              </div>
              <h3 className="font-bold font-montserrat text-xl">
                Credit Report Analysis
              </h3>
            </div>

            {/* Inner Card similar to Card 3 */}
            <div className="bg-[#ECF6FF]  p-3 flex rounded text-[#9A9A9A]  hover:bg-[#15549A] hover:text-white">
              <div className="relative inline-block mr-3">
                {/* Image for Credit Report */}
                <img
                  src={credit}
                  alt="Credit Report Icon"
                  className="inline-block"
                />
                {/* Nested Image (if needed) */}
              </div>
              <p className="font-montserrat font-bold ">
                Establish a plan to identify roadblocks and inaccuracies
                impacting your score
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#46CC02] text-white rounded flex-1 mb-4 md:mb-0 w-[407px] h-[56.48px] hover:shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-lg font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                02
              </div>
              <h3 className="font-bold font-montserrat text-xl">
                Dispute & Escalations
              </h3>
            </div>
            <div className="bg-[#ECF6FF]  p-3 flex rounded text-[#9A9A9A]  hover:bg-[#15549A] hover:text-white">
              <img
                src={credit2}
                alt="Dispute Icon"
                className="inline-block mr-2 w-[70px] h-[70px]"
              />
              <p className="font-montserrat font-bold  ">
                Challenge and Dispute negative items until they are removed
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#46CC02] text-white rounded flex-1 mb-4 md:mb-0 w-[407px] h-[56.48px] hover:shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-lg font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                03
              </div>
              <h3 className="font-bold font-montserrat text-xl">
                Credit Recovery
              </h3>
            </div>

            {/* Similar Inner Card as Card 2 */}
            <div className="bg-[#ECF6FF] text-[#9A9A9A]  p-3 flex rounded hover:bg-[#15549A] hover:text-white">
              <div className="relative inline-block mr-3">
                {/* Image for Credit 3 */}
                <img
                  src={credit3}
                  alt="Recovery Icon"
                  className=" inline-block"
                />
                {/* Image for Credit 4 inside Credit 3 */}
                <img
                  src={credit4}
                  alt="Nested Icon"
                  className="absolute w-[40px] h-[40px] top-[15px] left-[7px]"
                />
              </div>
              <p className="font-montserrat font-bold  ">
                Take action to boost your credit score to reach your desired
                score range
              </p>
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="ml-[475px] text-7xl mt-[80px]">↓</h1>
        <div className="bg-blue-100 py-6 px-4 border-[#4054B2] border-[1px] mt-[30px] w-[1100px] h-[208px]">
          <h4 className="text-[27px] leading-[32px] font-inter font-bold text-[#07284F] mb-2">
            Dispute & Escalation
          </h4>
          <p className="text-[#173455] font-opensans font-bold text-[24px] leading-[32px]">
            We start by assessing your current credit situation and identifying
            the roadblocks impacting your score. Each case is unique, but we
            specialize in spotting inaccuracies and other factors that should
            not be in your report damaging to credit reputation. Together, we’ll
            map out a plan to a better credit score.
          </p>
        </div>
      </div>
    </div>
  );
}

function Contactform() {
  return (
    <div>
      <div className =" text-white p-2 flex items-center h-[100px] mt-[150px]">
        <div className="flex justify-center mt-[-900px] px-4 py-6 w-[533px]  h-[636 px] mx-auto mb-[70px] ml-[700px]">
          {/* <div
          className="flex justify-center mt-[-900px] px-4 py-6 w-[500px] h-[550px] mx-auto mb-[70px] ml-[700px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${Rectangle5})` }} */}
          {/* > */}
          <div className=" w-full p-6 bg-[url('/src/components/asset/faqbg.png')] rounded flex flex-col md:flex-row">
            {/* <img src={Rectangle5} alt="Rectangle5" className="object-cover w-full h-full"/> */}
            {/* Left Section - Form */}
            <div className="flex-1 md:mr-8 mt-[-15px]">
              <h2 className="text-[45px] leading-[54.46px] font-[400px] font-inter">
                Start Your Recovery
              </h2>
              <form className="grid gap-3 mt-[25px]">
                <div className="grid grid-cols-2 gap-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Current Credit Score"
                  className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Reason for Credit Repair"
                  className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px]"
                />
                <textarea
                  placeholder="How Soon?"
                  className="p-3 rounded font-montserrat bg-[#496480] font-[400px] text-[18px] leading-[22px] h-17"
                ></textarea>
                <button className="p-3 w-[186px] h-[54px] bg-[#46CC02]  text-white font-[400px] font-inter text-[18px] leading-[22px]">
                  Sign Up Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
