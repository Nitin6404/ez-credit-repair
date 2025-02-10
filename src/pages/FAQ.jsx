import AboutUs from '../components/asset/AboutUsbackground.png';
import searchFaq from '../components/asset/searchFaq.svg';
import manOnFaq from '../components/asset/manOnFaq.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
            <span className="ml-3 sm:ml-10">
              <Link to="/">Home</Link>
            </span>
            <span className="mx-1">|</span>
            <span>Frequently Asked Questions</span>
          </div>
        </div>
      </div>
      <div className="m-5 p-6">
        <div className="flex justify-center pb-5 pt-10">
          <h1 className="mb-4 text-center font-inter text-3xl font-bold leading-[40px] text-[#15549A] sm:text-xl sm:leading-[50px] md:text-5xl md:leading-[60px]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg bg-[#E6E6E6] px-10 py-3 md:flex-row">
          <p className="text-center font-inter text-xl font-bold md:text-left">
            Have any Questions?
          </p>
          <img src={searchFaq} alt="Search Icon" className="" />
        </div>

        <div className="my-10 flex flex-col space-x-0 md:flex-row md:space-x-6">
          <div className="mt-3 w-full space-y-1 rounded-2xl font-inter font-bold md:w-1/3">
            {questions.map(q => (
              <button
                key={q.question}
                onClick={() => handleQuestionClick(q.id)}
                className={`block w-full p-4 text-left text-base font-bold hover:bg-[#46CC02] ${
                  selectedQuestion === q.id ? 'bg-[#46CC02] font-bold text-white' : 'bg-[#E3F9FF]'
                } ${q.id === 1 ? 'rounded-t-2xl' : ''} ${q.id === questions.length ? 'rounded-b-2xl' : ''} `}
              >
                {q.question}
              </button>
            ))}
          </div>
          <div className="mt-3 w-full rounded-2xl border-4 border-[#DCDCDC] bg-white p-4 font-montserrat text-xl font-semibold leading-6 md:w-2/3">
            <p>{questions.find(q => q.id === selectedQuestion)?.answer}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between bg-[url('/src/components/asset/areYouReadyToTakeActionBg.svg')] bg-cover lg:h-[542px] lg:flex-row">
        <div className="mx-10 flex w-full flex-col items-center justify-evenly lg:flex-row">
          {/* Left Side Text */}
          <div className="text-center font-inter text-[30px] font-bold leading-[40px] text-white sm:text-[40px] sm:leading-[50px] lg:text-left lg:text-[50px] lg:leading-[60px]">
            <p className="mt-2"> Are You Ready to Take action?</p>
            <p>We Are Ready to Help.</p>
            <button className="mt-5 rounded-lg bg-[#46CC02] px-6 py-2 text-[27px] font-normal leading-8 text-white">
              SIGN UP NOW
            </button>
          </div>

          {/* Right Side Image */}
          <div className="mt-10 lg:mt-0">
            <img
              src={manOnFaq}
              alt="Placeholder"
              className="mb-[50px] w-[200px] sm:w-[250px] md:w-[350px] lg:mb-[105px] lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
