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
          <img src={about} alt="Recovery Icon" className="absolute mb-4 h-[100px] w-[120px]" />
          <p className="ml-[140px] font-montserrat text-[22px] font-semibold leading-[27px]">
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
    <div className="ml-[80px] h-[713px] w-[640px] bg-[#3F8FC4] bg-opacity-[10%]">
      <div className={`${className}`}>
        {showTitle && (
          <div className={`max-w-${maxWidth} ml-[1px] mt-[10px] p-6`}>
            <h1 className="mb-4 font-inter text-[42px] font-[400] leading-[54px] text-[#15549A]">
              Frequently Asked Questions
            </h1>
          </div>
        )}
        <div className="flex justify-center p-[10px] font-opensans font-[400]">
          <div className="mx-auto ml-[5px] mt-[-20px] w-full max-w-[620px] overflow-hidden">
            {accordionData.map((item, index) => (
              <div key={index} className="p-2">
                <div
                  className="accordion-title flex cursor-pointer items-center justify-between bg-white px-6 py-4 font-montserrat text-[20px] font-bold leading-[25px] hover:bg-gray-200"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`accordion-content px-6 py-4 ${openIndex === index ? '' : 'hidden'}`}
                >
                  <div className="font-montserrat text-[22px] font-semibold leading-[27px]">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <img src={about} alt="Recovery Icon" className="absolute mb-4 h-[102px] w-[136px]" />
          <p className="ml-[170px] font-montserrat text-[22px] font-semibold leading-[27px]">
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
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[20px] flex items-center justify-center p-6 text-center">
        <h1 className="mb-4 font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-[1300px] bg-[#000000] bg-opacity-[10%]">
        <div className="flex w-[1290px] justify-center p-[20px] font-opensans font-[400]">
          <div className="mx-auto ml-[5px] mt-[10px] w-[1290px] overflow-hidden">
            {accordionData.map((item, index) => (
              <div key={index} className="p-2">
                <div
                  className="accordion-title flex cursor-pointer items-center justify-between bg-white px-6 py-4 font-montserrat text-[20px] font-bold leading-[25px] hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`accordion-content px-6 py-4 ${openIndex === index ? '' : 'hidden'}`}
                >
                  <p className="font-montserrat text-[20px] font-semibold leading-[25px]">
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
