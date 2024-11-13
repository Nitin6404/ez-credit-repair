import React , {useState} from 'react';
import { Footer } from '../common/Footer';
import { Testinomial } from '../common/Testinomial';
import credit from '../asset/Rectangle.png';
import credit2 from '../asset/Rectangle1.png';
import credit3 from '../asset/Rectangle4.png';
import credit4 from '../asset/Rectangle2.png';


export function About()  {
  return (
    <div>
       <div class="bg-blue-900 text-white p-2 flex items-center h-[80px] mt-3">
  <div class="flex justify-start max-w-screen-lg ml-10">
    <span class="font-semibold ml-10">Home</span>
    <span class="mx-1">|</span>
    <span class="font-semibold">About Us</span>
  </div>
</div>
    <div className="p-6 bg-white max-w-screen-lg mx-auto shadow-md rounded">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-gray-700 mb-2">
          For the past 15 years, we've been dedicated to helping thousands of individuals repair their credit and reclaim financial control. At EzeCredit, we fight for every consumer’s right to an accurate, fair, and substantiated credit report.
        </p>
        <h2 className="text-3xl font-bold text-blue-800">Our Program</h2>
        <p className="text-gray-600">Progressive Corrective & Recovery Plan</p>
      </div>

      {/* Program Cards Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-4 mb-6">
        {/* Card 1 */}
        <div className="bg-green-500 text-white rounded p-4 flex-1 mb-4 md:mb-0">
          <div className="flex items-center">
            <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">01</div>
            <h3 className="font-semibold">Credit Report Analysis</h3>
          </div>
          <div className="mt-2 bg-blue-100 text-gray-700 p-3 rounded">
            <img 
              src={credit}
              alt="Credit Report" 
              className="inline-block mr-2 w-[50px] h-[50px]"
            />
            Establish plan to identify roadblocks and inaccuracies impacting your score
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded p-4 flex-1 mb-4 md:mb-0">
          <div className="flex items-center">
            <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">02</div>
            <h3 className="font-semibold">Dispute & Escalations</h3>
          </div>
          <div className="mt-2 bg-blue-100 text-gray-700 p-3 rounded">
            <img 
              src={credit2}
              alt="Dispute Icon" 
              className="inline-block mr-2 w-[50px] h-[50px]"
            />
            Challenge and Dispute negative items until they are removed
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-green-500 text-white rounded p-4 flex-1">
          <div className="flex items-center">
            <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">03</div>
            <h3 className="font-semibold">Credit Recovery</h3>
          </div>
          <div className="mt-2 ml-[5px] bg-blue-100 text-gray-700 p-3 rounded relative">
            <img 
              src={credit4}
              alt="Recovery Icon" 
              className="inline-block mr-2 w-[40px] h-[45px]"
            />
            <img 
              src={credit3}
              alt="Recovery Icon" 
              className="inline-block mr-2 w-[60px] h-[60px] absolute left-[3px] top-[0px]"
            />

            Take action to boost your credit score to reach your desired score range
          </div>
        </div>
      </div>

      {/* Dispute & Escalation Details */}
      <h1 className='ml-[475px] text-7xl mt-[-40px]'>↓</h1>
      <div className="bg-blue-100 p-4 rounded shadow-md">
        <h4 className="text-lg font-bold text-blue-800 mb-2">Dispute & Escalation</h4>
        <p className="text-gray-700">
          We start by assessing your current credit situation and identifying the roadblocks impacting your score. Each case is unique, but we specialize in spotting inaccuracies and other factors that should not be in your report damaging to credit reputation. Together, we’ll map out a plan to a better credit score.
        </p>
      </div>
    </div>
  <FeQ1></FeQ1>
  <Testinomial></Testinomial>

  <Footer></Footer>
  
    </div>
  );
};

function FeQ1  ()  {
    const [selectedQuestion, setSelectedQuestion] = useState('Can any credit be repaired?');
    
    const questions = [
      { question: 'Can any credit be repaired?', answer: 'Credit repair involves resolving any questionable negative items that may be damaging your credit profile. If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and verified, they are legally required to remove them.' },
      { question: 'How long can this process take?', answer: 'The time varies depending on your unique credit situation, but results can often be seen within a few months.' },
      { question: 'What type of items can be removed on my credit report?', answer: 'Items such as late payments, collections, charge-offs, and other inaccurate or unfair items may be disputed and removed if applicable.' },
      { question: 'If I just pay off my bills will that restore my good credit?', answer: 'Paying off bills can help, but removing negative items and building positive credit history are key for credit restoration.' },
      { question: 'What is a good credit score?', answer: 'A good credit score typically ranges from 700 to 749, with higher scores reflecting better creditworthiness.' },
    ];
  
    const handleQuestionClick = (question) => {
      setSelectedQuestion(question);
    };
    return (
    <div>
      <div className="max-w-4xl ml-[100px] p-6">
        <h1 className="text-3xl font-bold mb-4 ml-[300px] mt-[20px] text-blue-700">Frequently Asked Questions</h1>
        <div className="flex">
          <div className="w-1/3 border-4 mt-3 bg-gray-100 rounded-2xl border-white">
            {questions.map((q) => (
              <button
                key={q.question}
                onClick={() => handleQuestionClick(q.question)}
                className={`block w-full text-left p-4 border-b ${selectedQuestion === q.question ? 'bg-white border-l-4 border-blue-600 font-bold' : ''} hover:bg-white`}
              >
                {q.question}
              </button>
            ))}
          </div>
          <div className="w-2/3 p-4 mt-3 bg-white rounded-2xl border-4 border-black">
            <p>{questions.find((q) => q.question === selectedQuestion)?.answer}</p>
          </div>
          </div>
          </div>
          </div>
          )
          }
