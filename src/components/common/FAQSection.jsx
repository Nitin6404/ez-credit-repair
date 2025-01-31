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
          <img
            src={about}
            alt="Recovery Icon"
            className="absolute mb-4 h-[60px] w-[80px] md:h-[100px] md:w-[120px]"
          />
          <p className="ml-[100px] font-montserrat text-[16px] font-semibold leading-[22px] md:ml-[140px] md:text-[22px] md:leading-[27px]">
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
    <div className="mx-4 min-h-[500px] w-full bg-[#3F8FC4] bg-opacity-[10%] md:ml-[80px] md:h-[713px] md:w-[640px]">
      <div className={`${className}`}>
        {showTitle && (
          <div className={`max-w-${maxWidth} mt-[10px] p-4 md:ml-[1px] md:p-6`}>
            <h1 className="mb-4 font-inter text-[28px] font-[400] leading-[36px] text-[#15549A] md:text-[42px] md:leading-[54px]">
              Frequently Asked Questions
            </h1>
          </div>
        )}
        <div className="flex justify-center p-[10px] font-opensans font-[400]">
          <div className="mx-auto mt-[-20px] w-full max-w-[620px] overflow-hidden md:ml-[5px]">
            {accordionData.map((item, index) => (
              <div key={index} className="p-2">
                <div
                  className="accordion-title flex cursor-pointer items-center justify-between bg-white px-3 py-3 font-montserrat text-[16px] font-bold leading-[20px] hover:bg-gray-200 md:px-6 md:py-4 md:text-[20px] md:leading-[25px]"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`accordion-content px-3 py-3 md:px-6 md:py-4 ${openIndex === index ? '' : 'hidden'}`}
                >
                  <div className="font-montserrat text-[16px] font-semibold leading-[22px] md:text-[22px] md:leading-[27px]">
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
          <img
            src={about}
            alt="Recovery Icon"
            className="absolute mb-4 h-[60px] w-[80px] md:h-[102px] md:w-[136px]"
          />
          <p className="ml-[100px] font-montserrat text-[16px] font-semibold leading-[22px] md:ml-[170px] md:text-[22px] md:leading-[27px]">
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
      <div className="mt-[10px] flex items-center justify-center p-4 text-center md:mt-[20px] md:p-6">
        <h1 className="mb-4 font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:text-[50px] md:leading-[60px]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full bg-[#000000] bg-opacity-[10%] px-4 md:w-[1300px] md:px-0">
        <div className="flex w-full justify-center p-[10px] font-opensans font-[400] md:w-[1290px] md:p-[20px]">
          <div className="mx-auto mt-[10px] w-full overflow-hidden md:ml-[5px] md:w-[1290px]">
            {accordionData.map((item, index) => (
              <div key={index} className="p-2">
                <div
                  className="accordion-title flex cursor-pointer items-center justify-between bg-white px-3 py-3 font-montserrat text-[16px] font-bold leading-[20px] hover:bg-gray-100 md:px-6 md:py-4 md:text-[20px] md:leading-[25px]"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`accordion-content px-3 py-3 md:px-6 md:py-4 ${openIndex === index ? '' : 'hidden'}`}
                >
                  <p className="font-montserrat text-[16px] font-semibold leading-[22px] md:text-[20px] md:leading-[25px]">
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
