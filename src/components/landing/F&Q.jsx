import { Footer } from "../common/Footer";
import AboutUs from "../asset/AboutUsbackground.png";
import searchFaq from "../asset/searchFaq.svg";
import manOnFaq from "../asset/manOnFaq.svg";
import { useState } from "react";

export function FeQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Can any credit be repaired?",
      answer:
        "Credit repair involves resolving any questionable negative items that may be damaging your credit profile. If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and verified, they are legally required to remove them.",
    },
    {
      id: 2,
      question: "How long can this process take?",
      answer:
        "The time varies depending on your unique credit situation, but results can often be seen within a few months.",
    },
    {
      id: 3,
      question: "What type of items can be removed on my credit report?",
      answer:
        "Items such as late payments, collections, charge-offs, and other inaccurate or unfair items may be disputed and removed if applicable.",
    },
    {
      id: 4,
      question: "If I just pay off my bills will that restore my good credit?",
      answer:
        "Paying off bills can help, but removing negative items and building positive credit history are key for credit restoration.",
    },
    {
      id: 5,
      question: "What is a good credit score?",
      answer:
        "A good credit score typically ranges from 700 to 749, with higher scores reflecting better creditworthiness.",
    },
  ];

  const handleQuestionClick = (id) => {
    setSelectedQuestion(id);
  };
  return (
    <div className="w-full flex flex-col ">
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
            <span>Frequently Asked Questions</span>
          </div>
        </div>
      </div>
      <div className="m-5 p-6">
        <div className="flex justify-center">
          <h1 className="text-5xl leading-[60px] font-inter font-bold mb-4 text-[#15549A]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full flex justify-between items-center bg-[#E6E6E6] rounded-lg px-10 py-3">
          <p className="font-inter font-bold text-xl leading-6">
            Have any Questions?
          </p>
          <img src={searchFaq} alt="Search Icon" />
        </div>
        <div className="flex space-x-6 my-10">
          <div className="w-1/3 mt-3 space-y-1 font-inter font-bold rounded-2xl">
            {questions.map((q) => (
              <button
                key={q.question}
                onClick={() => handleQuestionClick(q.id)}
                className={`block hover:bg-[#46CC02] w-full text-left p-4 ${
                  selectedQuestion === q.id
                    ? "bg-[#46CC02] font-bold text-white"
                    : "bg-[#E3F9FF]"
                } 
                ${q.id === 1 ? "rounded-t-2xl" : ""}
                ${q.id === questions.length ? "rounded-b-2xl" : ""}
                `}
              >
                {q.question}
              </button>
            ))}
          </div>
          <div className="w-2/3 p-4 mt-3 font-inter font-normal text-xl leading-6 bg-white rounded-2xl border-4 border-[#DCDCDC]">
            <p>{questions.find((q) => q.id === selectedQuestion)?.answer}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[1437px] lg:h-[542px] mt-20 flex items-center justify-between bg-[url('/src/components/asset/areYouReadyToTakeActionBg.svg')] bg-cover">
        <div className="w-full mx-10 flex items-center justify-evenly">
          {/* Left Side Text */}
          <div className="font-inter font-bold text-white text-[50px] leading-[60px]">
            <p> Are You Ready to Take action?</p>
            <p>We Are Ready to Help.</p>
            <button className="mt-5 px-4 py-2 text-3xl leading-8 bg-[#46CC02] text-white rounded-lg">
              SIGN UP NOW
            </button>
          </div>

          {/* Right Side Image */}
          <div className="">
            <img
              src={manOnFaq}
              alt="Placeholder"
              className="w-full mb-[105px]"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
