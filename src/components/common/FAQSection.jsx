import { useState } from 'react';
import about from '../asset/about.png';

export function FAQSection({ className = '', showTitle = true, maxWidth = '4xl' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Can any credit be repaired?',
      content: (
        <>
          <img src={about} alt="Recovery Icon" className="mb-4 w-[120px] h-[100px] absolute" />
          <p className="ml-[140px] font-montserrat text-[22px] leading-[27px] font-semibold">
            Credit repair involves resolving any questionable negative items that may be damaging
            your credit profile. If the credit bureaus or your creditors cannot provide proof that
            these items are fair, accurate, and verified, they are legally required to remove them.
          </p>
        </>
      ),
    },
    {
      title: 'How long can this process take?',
      content:
        'The length of the credit repair process varies depending on the number of items disputed and the responsiveness of the creditors or credit bureaus.',
    },
    {
      title: 'What type of items can be removed on my credit report?',
      content:
        'Items such as late payments, charge-offs, collections, and foreclosures can potentially be removed if they are found to be inaccurate, unverifiable, or unfair.',
    },
    {
      title: 'If I just pay off my bills will that restore my good credit?',
      content:
        'Paying off bills is important, but it may not immediately improve your credit score. Credit repair may still be necessary for inaccurate items.',
    },
    {
      title: 'What is a good credit score?',
      content:
        'A good credit score generally ranges from 670 to 739. Higher scores reflect better creditworthiness.',
    },
  ];

  return (
    <div className={`${className}`}>
      {showTitle && (
        <div className={`max-w-${maxWidth} ml-[1px] p-6 mt-[10px]`}>
          <h1 className="text-[42px] leading-[54px] font-inter font-[400] mb-4 text-[#15549A]">
            Frequently Asked Questions
          </h1>
        </div>
      )}
      <div className="font-opensans flex justify-center font-[400] p-[10px]">
        <div className="w-full max-w-[620px] mx-auto mt-[-20px] ml-[5px] overflow-hidden">
          {accordionData.map((item, index) => (
            <div key={index} className="p-2">
              <div
                className="accordion-title flex justify-between items-center px-6 py-4 font-montserrat font-bold text-[20px] leading-[25px] cursor-pointer bg-white hover:bg-gray-200"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`accordion-content px-6 py-4 ${openIndex === index ? '' : 'hidden'}`}>
                <div className="font-montserrat text-[22px] leading-[27px] font-semibold">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqAbout() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Can any credit be repaired?',
      content: (
        <>
          <img src={about} alt="Recovery Icon" className="mb-4 w-[136px] h-[102px] absolute" />
          <p className="ml-[170px] font-montserrat text-[22px] leading-[27px] font-semibold">
            Credit repair involves resolving any questionable negative items that may be damaging
            your credit profile. If the credit bureaus or your creditors cannot provide proof that
            these items are fair, accurate, and verified, they are legally required to remove them.
          </p>
        </>
      ),
    },
    {
      title: 'How long can this process take?',
      content:
        'The length of the credit repair process varies depending on the number of items disputed and the responsiveness of the creditors or credit bureaus.',
    },
    {
      title: 'What type of items can be removed on my credit report?',
      content:
        'Items such as late payments, charge-offs, collections, and foreclosures can potentially be removed if they are found to be inaccurate, unverifiable, or unfair.',
    },
    {
      title: 'If I just pay off my bills will that restore my good credit?',
      content:
        'Paying off bills is important, but it may not immediately improve your credit score. Credit repair may still be necessary for inaccurate items.',
    },
    {
      title: 'What is a good credit score?',
      content:
        'A good credit score generally ranges from 670 to 739. Higher scores reflect better creditworthiness.',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex text-center justify-center items-center p-6 mt-[20px]">
        <h1 className="text-[50px] leading-[60px] font-bold font-inter mb-4 text-[#15549A]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="bg-[#000000] w-[1300px] bg-opacity-[10%]">
        <div className="font-opensans flex justify-center w-[1290px] font-[400] p-[20px]">
          <div className="w-[1290px] mx-auto mt-[10px] ml-[5px] overflow-hidden">
            {accordionData.map((item, index) => (
              <div key={index} className=" p-2">
                <div
                  className="accordion-title flex justify-between items-center px-6 py-4  font-montserrat font-bold text-[20px] leading-[25px] cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`accordion-content px-6 py-4 ${openIndex === index ? '' : 'hidden'}`}
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
