import React, { useState } from "react";
import { Footer } from "../common/Footer";
import { Testinomial } from "../common/Testinomial";
import credit from "../asset/Rectangle.png";
import credit2 from "../asset/Rectangle1.png";
import credit3 from "../asset/Rectangle4.png";
import credit4 from "../asset/Rectangle2.png";
import AboutUs from "../asset/AboutUsbackground.png";
export function About() {
  return (
    <div>
      <div className="relative p-2 mt-3">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        {/* Inner Div with Background Image */}
        <div className="relative bg-blue-900/20 text-white p-2 flex items-center h-[80px] ">
          <div className="flex justify-start max-w-screen-lg ml-10">
            <span className="font-semibold ml-10">Home</span>
            <span className="mx-1">|</span>
            <span className="font-semibold">About Us</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white max-w-screen-lg mx-auto  rounded">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-[#434343] mb-2 font-inter font-thin">
            For the past 15 years, we've been dedicated to helping thousands of
            individuals repair their credit and reclaim financial control. At
            EzeCredit, we fight for every consumer’s right to an accurate, fair,
            and substantiated credit report.
          </p>
          <h2 className="text-3xl font-bold font-inter mt-10 text-[#15549A]">
            Our Program
          </h2>
          <p className="text-[#4B4B4B] font-inter mt-2 font-normal text-xl">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-4 mb-6">
          {/* Card 1 */}
          {/* Card 1 */}
          <div className="bg-[#46CC02] text-white rounded flex-1 mb-4 md:mb-0">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-lg font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                01
              </div>
              <h3 className="font-bold font-montserrat text-xl">
                Credit Report Analysis
              </h3>
            </div>

            {/* Inner Card similar to Card 3 */}
            <div className="bg-[#ECF6FF] text-[#9A9A9A] p-3 flex rounded">
              <div className="relative inline-block mr-3">
                {/* Image for Credit Report */}
                <img
                  src={credit}
                  alt="Credit Report Icon"
                  className="inline-block"
                />
                {/* Nested Image (if needed) */}
              </div>
              <p className="font-montserrat font-bold text-[#9A9A9A]">
                Establish a plan to identify roadblocks and inaccuracies
                impacting your score
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#46CC02] text-white rounded flex-1 mb-4 md:mb-0 shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-lg font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                02
              </div>
              <h3 className="font-bold font-montserrat text-xl">
                Dispute & Escalations
              </h3>
            </div>
            <div className="bg-[#15549A] text-gray-700 p-3 flex rounded">
              <img
                src={credit2}
                alt="Dispute Icon"
                className="inline-block mr-2 w-[70px] h-[70px]"
              />
              <p className="font-montserrat font-bold text-[#fff]">
                Challenge and Dispute negative items until they are removed
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#46CC02] text-white rounded flex-1 mb-4 md:mb-0">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-lg font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                03
              </div>
              <h3 className="font-bold font-montserrat text-xl">
                Credit Recovery
              </h3>
            </div>

            {/* Similar Inner Card as Card 2 */}
            <div className="bg-[#ECF6FF] text-[#9A9A9A] p-3 flex rounded">
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
              <p className="font-montserrat font-bold text-[#9A9A9A">
                Take action to boost your credit score to reach your desired
                score range
              </p>
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="ml-[475px] text-7xl mt-[-40px]">↓</h1>
        <div className="bg-blue-100 py-6 px-4 border-[#4054B2] border-[1px] ">
          <h4 className="text-xl font-inter font-bold text-[#07284F] mb-2">
            Dispute & Escalation
          </h4>
          <p className="text-[#173455] font-sans font-semibold">
            We start by assessing your current credit situation and identifying
            the roadblocks impacting your score. Each case is unique, but we
            specialize in spotting inaccuracies and other factors that should
            not be in your report damaging to credit reputation. Together, we’ll
            map out a plan to a better credit score.
          </p>
        </div>
      </div>
      <FeQ1></FeQ1>
      <Testinomial></Testinomial>

      <Footer></Footer>
    </div>
  );
}

function FeQ1() {
  const [selectedQuestion, setSelectedQuestion] = useState(
    "Can any credit be repaired?"
  );

  const questions = [
    {
      question: "Can any credit be repaired?",
      answer:
        "Credit repair involves resolving any questionable negative items that may be damaging your credit profile. If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and verified, they are legally required to remove them.",
    },
    {
      question: "How long can this process take?",
      answer:
        "The time varies depending on your unique credit situation, but results can often be seen within a few months.",
    },
    {
      question: "What type of items can be removed on my credit report?",
      answer:
        "Items such as late payments, collections, charge-offs, and other inaccurate or unfair items may be disputed and removed if applicable.",
    },
    {
      question: "If I just pay off my bills will that restore my good credit?",
      answer:
        "Paying off bills can help, but removing negative items and building positive credit history are key for credit restoration.",
    },
    {
      question: "What is a good credit score?",
      answer:
        "A good credit score typically ranges from 700 to 749, with higher scores reflecting better creditworthiness.",
    },
  ];

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };
  return (
    <div>
      <div className="max-w-4xl ml-[100px] p-6">
        <h1 className="text-3xl font-bold mb-4 ml-[300px] mt-[20px] text-blue-700">
          Frequently Asked Questions
        </h1>
        <div className="flex">
          <div className="w-1/3 border-4 mt-3 bg-gray-100 rounded-2xl border-white">
            {questions.map((q) => (
              <button
                key={q.question}
                onClick={() => handleQuestionClick(q.question)}
                className={`block w-full text-left p-4 border-b ${
                  selectedQuestion === q.question
                    ? "bg-white border-l-4 border-blue-600 font-bold"
                    : ""
                } hover:bg-white`}
              >
                {q.question}
              </button>
            ))}
          </div>
          <div className="w-2/3 p-4 mt-3 bg-white rounded-2xl border-4 border-black">
            <p>
              {questions.find((q) => q.question === selectedQuestion)?.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}