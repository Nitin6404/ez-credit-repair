import AboutUs from '../asset/AboutUsbackground.png';
import searchFaq from '../asset/searchFaq.svg';
import manOnFaq from '../asset/manOnFaq.svg';
import { useState } from 'react';

export function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Can any credit be repaired?',
      answer:
        'Credit repair involves resolving any questionable negative items that may be damaging your credit profile. If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and verified, they are legally required to remove them.',
    },
    {
      id: 2,
      question: 'How long can this process take?',
      answer:
        'The time varies depending on your unique credit situation, but results can often be seen within a few months.',
    },
    {
      id: 3,
      question: 'What type of items can be removed on my credit report?',
      answer:
        'Items such as late payments, collections, charge-offs, and other inaccurate or unfair items may be disputed and removed if applicable.',
    },
    {
      id: 4,
      question: 'If I just pay off my bills will that restore my good credit?',
      answer:
        'Paying off bills can help, but removing negative items and building positive credit history are key for credit restoration.',
    },
    {
      id: 5,
      question: 'What is a good credit score?',
      answer:
        'A good credit score typically ranges from 700 to 749, with higher scores reflecting better creditworthiness.',
    },
  ];

  const handleQuestionClick = id => {
    setSelectedQuestion(id);
  };
  return (
    <div className="flex w-full flex-col">
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
            <span>Frequently Asked Questions</span>
          </div>
        </div>
      </div>
      <div className="m-5 p-6">
        <div className="flex justify-center">
          <h1 className="mb-4 font-inter text-5xl font-bold leading-[60px] text-[#15549A]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg bg-[#E6E6E6] px-10 py-3">
          <p className="font-inter text-xl font-bold leading-6">Have any Questions?</p>
          <img src={searchFaq} alt="Search Icon" />
        </div>
        <div className="my-10 flex space-x-6">
          <div className="mt-3 w-1/3 space-y-1 rounded-2xl font-inter font-bold">
            {questions.map(q => (
              <button
                key={q.question}
                onClick={() => handleQuestionClick(q.id)}
                className={`block w-full p-4 text-left hover:bg-[#46CC02] ${
                  selectedQuestion === q.id ? 'bg-[#46CC02] font-bold text-white' : 'bg-[#E3F9FF]'
                } ${q.id === 1 ? 'rounded-t-2xl' : ''} ${q.id === questions.length ? 'rounded-b-2xl' : ''} `}
              >
                {q.question}
              </button>
            ))}
          </div>
          <div className="mt-3 w-2/3 rounded-2xl border-4 border-[#DCDCDC] bg-white p-4 font-inter text-xl font-normal leading-6">
            <p>{questions.find(q => q.id === selectedQuestion)?.answer}</p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-between bg-[url('/src/components/asset/areYouReadyToTakeActionBg.svg')] bg-cover lg:h-[542px] lg:w-[1437px]">
        <div className="mx-10 flex w-full items-center justify-evenly">
          {/* Left Side Text */}
          <div className="font-inter text-[50px] font-bold leading-[60px] text-white">
            <p> Are You Ready to Take action?</p>
            <p>We Are Ready to Help.</p>
            <button className="mt-5 rounded-lg bg-[#46CC02] px-4 py-2 text-3xl leading-8 text-white">
              SIGN UP NOW
            </button>
          </div>

          {/* Right Side Image */}
          <div className="">
            <img src={manOnFaq} alt="Placeholder" className="mb-[105px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
