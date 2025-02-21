import { useState } from 'react';
import about from '../asset/about.png';

export function FAQSection({ className = '', showTitle = true, maxWidth = '4xl' }) {
  const [openIndex, setOpenIndex] = useState(0);

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
        "Opportunities often arise unexpectedly, requiring timely action. Unfortunately, there's no way to predict exactly how long credit repair will take without understanding the specific roadblocks affecting your score. However, we work quickly to position you for success, often within 30 to 90 days.",
    },
    {
      title: 'What type of items can be removed on my credit report?',
      content:
        'Any negative item that is inaccurate, unfair, or unverified can be disputed with the credit bureaus and your creditors. This includes collections, late payments, charge-offs, liens, bankruptcies, repossessions, and more.',
    },
    {
      title: 'If I just pay off my bills will that restore my good credit?',
      content:
        'Paying off your bills doesn’t automatically boost your credit score. Once the damage is done, further action is required to improve it. You’re history will be marked as a paid delinquency, charge-off, or collection. If your goal is to repair your credit, paying debts alone won’t be enough. Credit repair is a challenge for many, but we’re here to help. We offer a proven path to recovery and will teach you how to maintain your score once you reach your target.',
    },
    {
      title: 'What is a good credit score?',
      content: 'Credit bureaus typically consider a good credit score to be anything above 650.',
    },
  ];

  return (
    <div className="min-h-[500px] w-full bg-[#3F8FC4] bg-opacity-[10%] md:ml-[80px] md:h-[800px] md:w-[640px]">
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
  const [openIndex, setOpenIndex] = useState(0);

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
        'Opportunities often arise unexpectedly, requiring timely action. Unfortunately, theres no way to predict exactly how long credit repair will take without understanding the specific roadblocks affecting your score. However, we work quickly to position you for success, often within 30 to 90 days.',
    },
    {
      title: 'What type of items can be removed on my credit report?',
      content:
        'Any negative item that is inaccurate, unfair, or unverified can be disputed with the credit bureaus and your creditors. This includes collections, late payments, charge-offs, liens, bankruptcies, repossessions, and more.',
    },
    {
      title: 'If I just pay off my bills will that restore my good credit?',
      content:
        'Paying off your bills doesn’t automatically boost your credit score. Once the damage is done, further action is required to improve it. You’re history will be marked as a paid delinquency, charge-off, or collection. If your goal is to repair your credit, paying debts alone won’t be enough. Credit repair is a challenge for many, but we’re here to help. We offer a proven path to recovery and will teach you how to maintain your score once you reach your target.',
    },
    {
      title: 'What is a good credit score?',
      content: 'Credit bureaus typically consider a good credit score to be anything above 650.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[10px] flex items-center justify-center p-4 text-center md:mt-[20px] md:p-6">
        <h1 className="mb-4 font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:text-[50px] md:leading-[60px]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full bg-[#000000] bg-opacity-[10%] px-4 md:px-0">
        <div className="flex w-full justify-center p-[10px] font-opensans font-[400] md:p-[20px]">
          <div className="mx-auto mt-[10px] w-full overflow-hidden md:w-full md:max-w-[1290px]">
            {accordionData.map((item, index) => (
              <div key={index} className="p-2">
                {/* Accordion Title - Centered with Equal Space */}
                <div
                  className="accordion-title flex cursor-pointer items-center justify-between bg-white px-6 py-3 font-montserrat text-[16px] font-bold leading-[20px] hover:bg-gray-100 md:px-8 md:py-4 md:text-[20px] md:leading-[25px]"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex-1">{item.title}</span>
                  <span className="ml-4">{openIndex === index ? '-' : '+'}</span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`accordion-content px-6 py-3 md:px-8 md:py-4 ${openIndex === index ? '' : 'hidden'}`}
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
