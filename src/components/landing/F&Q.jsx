import React, { useState } from 'react';
import { Footer } from '../common/Footer';

export function FeQ  ()  {
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
    <div class="bg-blue-900 text-white p-2 flex items-center h-[80px] mt-3">
  <div class="flex justify-start max-w-screen-lg ml-10">
    <span class="font-semibold ml-10">Home</span>
    <span class="mx-1">|</span>
    <span class="font-semibold">Frequently Asked Questions</span>
  </div>
</div>
    <div className="max-w-4xl ml-[100px] p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h1>
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
      <div className="w-[1050px] min-h-[400px] mt-[100px] flex items-center justify-between p-6 bg-gray-100">
      {/* Left Side Text */}
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
        <h2 className='text-2xl'> Are You Ready to Take action?</h2>
        <h2 className='text-2xl'>We Are Ready to Help</h2>
        
        
        <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up Now</button>
      </div>
      
      {/* Right Side Image */}
      <div className="w-1/2 max-w-xs">
        <img 
        src=''
          alt="Placeholder" 
          className="w-full h-auto rounded"
        />
      </div>
    </div>
   
    </div>
    <Footer></Footer>
    </div>
    
  );
};

