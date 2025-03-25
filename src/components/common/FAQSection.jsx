import { useState } from 'react';
import { accordionDataFaqAbout } from '../../data/faqData';

export function FaqAbout() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 mt-6 flex items-center justify-center text-center md:mb-8 md:mt-12 md:p-0">
        <h1 className="font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:text-[50px] md:leading-[60px]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full bg-[#000000] bg-opacity-[10%] px-4 md:px-0">
        <div className="flex w-full justify-center p-[10px] font-opensans font-[400] md:p-[20px]">
          <div className="mx-auto mt-[10px] w-full overflow-hidden md:w-full md:max-w-[1290px]">
            {accordionDataFaqAbout.map((item, index) => (
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
                  <p className="font-montserrat text-[16px] font-semibold leading-[22px] md:text-[18px] md:leading-[25px]">
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
