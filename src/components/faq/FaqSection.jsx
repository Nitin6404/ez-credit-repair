import PropTypes from 'prop-types';
import { useState } from 'react';
import { accordionDataFaqSection } from '../../data/faqData';

export function FAQSection({ className = 'h-full', showTitle = true, maxWidth = '4xl' }) {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-[500px] w-full bg-[#3F8FC4] bg-opacity-[10%] md:ml-[130px] md:h-[700px] md:w-[640px]">
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
            {accordionDataFaqSection.map((item, index) => (
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
                  <div className="font-montserrat text-[16px] font-semibold leading-[22px] md:text-[18px] md:leading-[27px]">
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

FAQSection.propTypes = {
  className: PropTypes.string,
  showTitle: PropTypes.bool,
  maxWidth: PropTypes.string,
};
